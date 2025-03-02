const express = require('express');
const compression = require('compression');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

// Enable compression
app.use(compression());

// Serve static files from the build directory
app.use(serveStatic(path.join(__dirname, 'build'), {
  maxAge: '1y',
  setHeaders: (res, path) => {
    // Don't cache index.html
    if (path.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0');
    }
  }
}));

// Always return the main index.html for any route (for SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Set port based on environment or default to 3000
const PORT = process.env.PORT || 3000;

// Increase Node.js memory limit
const v8 = require('v8');
v8.setFlagsFromString('--max_old_space_size=4096');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Memory limit set to 4GB`);
});
