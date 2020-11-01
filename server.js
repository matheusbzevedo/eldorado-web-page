const express = require('express'),
  next = require('next'),
  compression = require('compression');

const port = parseInt(process.env.PORT, 10) || 3000,
  dev = process.env.NODE_ENV !== 'production',
  forcarHTTPS = true,
  caminho = 'out',
  app = next({ dev }),
  handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (forcarHTTPS) {
    server.use((req, res, next) => {
      if (req.headers['x-forwarded-proto'] != undefined && (!req.hostname.startsWith('www.') || (req.headers['x-forwarded-proto'] || '').endsWith('http')))
        res.redirect(`https://${req.hostname.startsWith('www.') ? '' : 'www.'}${req.hostname}${req.url}`);
      else
        next();
    });
  }

  server.use(compression());
  server.use(express.static(caminho));

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query);
  });

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Escutando na porta: ${port}`);
  });
});
