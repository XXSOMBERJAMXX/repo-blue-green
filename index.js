// Al inicio de tu archivo
const APP_COLOR = process.env.APP_COLOR || 'unknown';

// En tu ruta principal, agrega el color
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: ${APP_COLOR === 'blue' ? '#4A90E2' : APP_COLOR === 'green' ? '#27AE60' : '#95a5a6'};
            color: white;
          }
          .container {
            text-align: center;
          }
          h1 {
            font-size: 4em;
            margin: 0;
            text-transform: uppercase;
          }
          p {
            font-size: 1.5em;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${APP_COLOR} Environment</h1>
          <p>Hello World!</p>
          <p>Deployment: Blue/Green Strategy</p>
        </div>
      </body>
    </html>
  `);
});git add .
git commit -m "Add Blue/Green visual indicator"
git push origin main