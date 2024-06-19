const express = require("express");
const app = express();
const port = 3000; // Sunucunun çalışacağı port

// Statik dosyaların yer alacağı klasör
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor.`);
});
