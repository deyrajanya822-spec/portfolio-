import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const toffeemanDir = path.join(publicDir, 'toffeeman');
  if (!fs.existsSync(toffeemanDir)) {
    fs.mkdirSync(toffeemanDir, { recursive: true });
  }

  // API Route: Get available Toffeeman assets
  app.get('/api/toffeeman-assets', (req, res) => {
    try {
      if (!fs.existsSync(toffeemanDir)) {
        return res.json({ files: [] });
      }
      const files = fs.readdirSync(toffeemanDir).filter(f => !f.startsWith('.'));
      res.json({ files, baseUrl: '/toffeeman' });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // API Route: Upload Toffeeman design asset
  app.post(
    '/api/upload-toffeeman-image',
    express.raw({ type: '*/*', limit: '50mb' }),
    (req, res) => {
      try {
        const rawFilename = (req.query.filename as string) || `toffeeman-${Date.now()}.png`;
        const sanitized = path.basename(rawFilename).replace(/[^a-zA-Z0-9._-]/g, '_');
        const targetPath = path.join(toffeemanDir, sanitized);
        fs.writeFileSync(targetPath, req.body);
        console.log(`Saved Toffeeman asset to ${targetPath} (${req.body.length} bytes)`);
        res.json({ success: true, filename: sanitized, url: `/toffeeman/${sanitized}` });
      } catch (err: any) {
        console.error('Error saving toffeeman asset:', err);
        res.status(500).json({ error: err.message || 'Failed to save image file' });
      }
    }
  );

  // API Route: Check if persistent video exists on server
  app.get('/api/video-status', (req, res) => {
    const requestedId = (req.query.id as string) || 'placement-copilot';
    const configPath = path.join(process.cwd(), 'src', 'data', 'videoConfig.json');

    let videoConfig: any = {};
    if (fs.existsSync(configPath)) {
      try {
        videoConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (e) {
        // ignore parse error
      }
    }

    if (requestedId === 'placement-copilot' || requestedId === 'copilot') {
      // 1. Check if configured in videoConfig.json
      if (videoConfig.placementCopilot?.url) {
        return res.json({
          exists: true,
          url: videoConfig.placementCopilot.url,
          filename: videoConfig.placementCopilot.filename || 'placement-copilot-demo.mp4',
          isExternal: !videoConfig.placementCopilot.url.startsWith('/')
        });
      }

      // 2. Check filesystem
      const copilotFiles = ['placement-copilot-demo.mp4', 'placement-copilot.mp4', 'n8n-copilot.mp4'];
      for (const file of copilotFiles) {
        const filePath = path.join(publicDir, file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          if (stats.size > 1000) { // must be valid file > 1KB
            return res.json({ exists: true, url: `/${file}`, filename: file, size: stats.size });
          }
        }
      }
      return res.json({ exists: false, url: null });
    }

    // Lotus Commercial check
    if (videoConfig.lotusCommercial?.url) {
      return res.json({
        exists: true,
        url: videoConfig.lotusCommercial.url,
        filename: videoConfig.lotusCommercial.filename || 'lotus-high5-commercial.mp4',
        isExternal: !videoConfig.lotusCommercial.url.startsWith('/')
      });
    }

    const videoFiles = ['lotus-high5-commercial.mp4', 'lotus-high5.mp4', 'commercial.mp4'];
    for (const file of videoFiles) {
      const filePath = path.join(publicDir, file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        if (stats.size > 1000) {
          return res.json({ exists: true, url: `/${file}`, filename: file, size: stats.size });
        }
      }
    }
    res.json({ exists: false, url: null });
  });

  // API Route: Save permanent external video URL or embed (Loom, YouTube, Drive, direct MP4)
  app.post('/api/save-video-url', express.json(), (req, res) => {
    try {
      const { id = 'placement-copilot', url, title } = req.body;
      if (!url) {
        return res.status(400).json({ error: 'Video URL is required' });
      }

      const configPath = path.join(process.cwd(), 'src', 'data', 'videoConfig.json');
      let config: any = {};
      if (fs.existsSync(configPath)) {
        try {
          config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        } catch (e) {}
      }

      const key = id === 'placement-copilot' || id === 'copilot' ? 'placementCopilot' : 'lotusCommercial';
      config[key] = {
        url,
        title: title || config[key]?.title || 'Video Demonstration',
        filename: path.basename(url),
        isPersisted: true,
        lastUpdated: new Date().toISOString()
      };

      fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
      console.log(`Saved persistent video URL for ${key}: ${url}`);
      res.json({ success: true, url, key });
    } catch (err: any) {
      console.error('Error saving video URL:', err);
      res.status(500).json({ error: err.message || 'Failed to save video URL' });
    }
  });

  // API Route: Chunked video upload (bypasses reverse proxy size limits, 100% reliable)
  app.post(
    '/api/upload-video-chunk',
    express.raw({ type: '*/*', limit: '20mb' }),
    (req, res) => {
      try {
        const chunkIndex = parseInt((req.query.chunkIndex as string) || '0', 10);
        const totalChunks = parseInt((req.query.totalChunks as string) || '1', 10);
        const requestedId = (req.query.id as string) || 'placement-copilot';
        const filename = requestedId === 'placement-copilot' ? 'placement-copilot-demo.mp4' : 'lotus-high5-commercial.mp4';
        const targetPath = path.join(publicDir, filename);

        if (chunkIndex === 0) {
          // Initialize fresh file
          fs.writeFileSync(targetPath, req.body);
        } else {
          // Append chunk
          fs.appendFileSync(targetPath, req.body);
        }

        const isComplete = chunkIndex === totalChunks - 1;
        if (isComplete) {
          const stats = fs.statSync(targetPath);
          console.log(`Video upload complete! Final size: ${stats.size} bytes at ${targetPath}`);

          // Update videoConfig.json
          const configPath = path.join(process.cwd(), 'src', 'data', 'videoConfig.json');
          let config: any = {};
          if (fs.existsSync(configPath)) {
            try {
              config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
            } catch (e) {}
          }
          const key = requestedId === 'placement-copilot' ? 'placementCopilot' : 'lotusCommercial';
          config[key] = {
            url: `/${filename}`,
            title: key === 'placementCopilot' ? 'Autonomous Placement Co-Pilot & ATS RAG Engine' : 'Lotus High 5 — Some Fights End Better',
            filename,
            isPersisted: true,
            size: stats.size,
            lastUpdated: new Date().toISOString()
          };
          fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
        }

        res.json({
          success: true,
          chunkIndex,
          totalChunks,
          isComplete,
          url: isComplete ? `/${filename}` : null
        });
      } catch (err: any) {
        console.error('Error handling video chunk:', err);
        res.status(500).json({ error: err.message || 'Chunk upload failed' });
      }
    }
  );

  // API Route: Permanent Video Upload (persists directly into /public so it is never lost)
  app.post(
    '/api/upload-video',
    express.raw({ type: '*/*', limit: '500mb' }),
    (req, res) => {
      try {
        const requestedId = (req.query.id as string) || '';
        let filename = 'placement-copilot-demo.mp4';
        if (req.query.filename) {
          filename = path.basename(req.query.filename as string).replace(/[^a-zA-Z0-9._-]/g, '_');
        } else if (requestedId === 'lotus' || requestedId === 'tvc') {
          filename = 'lotus-high5-commercial.mp4';
        }

        const targetPath = path.join(publicDir, filename);
        fs.writeFileSync(targetPath, req.body);
        console.log(`Saved persistent video to ${targetPath} (${req.body.length} bytes)`);

        // Update videoConfig.json
        const configPath = path.join(process.cwd(), 'src', 'data', 'videoConfig.json');
        let config: any = {};
        if (fs.existsSync(configPath)) {
          try {
            config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
          } catch (e) {}
        }
        const key = requestedId === 'lotus' || requestedId === 'tvc' ? 'lotusCommercial' : 'placementCopilot';
        config[key] = {
          url: `/${filename}`,
          title: requestedId === 'lotus' ? 'Lotus High 5 Commercial' : 'Autonomous Placement Co-Pilot & ATS RAG Engine',
          filename,
          isPersisted: true,
          size: req.body.length,
          lastUpdated: new Date().toISOString()
        };
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');

        res.json({ success: true, url: `/${filename}`, filename, size: req.body.length });
      } catch (err: any) {
        console.error('Error saving video to server:', err);
        res.status(500).json({ error: err.message || 'Failed to save video file' });
      }
    }
  );

  // Serve static files from public directory
  app.use(express.static(publicDir));

  // Vite middleware for development vs static for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
