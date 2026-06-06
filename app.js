const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Animated Node App</title>
      <style>
        html,body{height:100%;}
        body{display:flex;align-items:center;justify-content:center;margin:0;background:#0e0f11;color:#fff;font-family:Inter,Segoe UI,Roboto,Arial,sans-serif}
        .box{width:120px;height:120px;border-radius:16px;background:linear-gradient(45deg,#ff4d4d,#ffb24d);animation:float 2s ease-in-out infinite,rotate 4s linear infinite;box-shadow:0 12px 30px rgba(0,0,0,0.5)}
        @keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-40px)}100%{transform:translateY(0)}}
        @keyframes rotate{0%{filter:hue-rotate(0deg)}100%{filter:hue-rotate(360deg)}}
        .container{text-align:center}
        h1{font-size:18px;margin-top:20px;color:#cfe8ff}
      </style>
    </head>
    <body>
      <div class="container">
        <div class="box" aria-hidden="true"></div>
        <h1>Animated Node App</h1>
      </div>
    </body>
  </html>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
