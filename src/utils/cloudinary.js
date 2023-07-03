const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dwc1snd78",
  api_key: "534973426169124",
  api_secret: "lBW4CHW7RYmT7yjOrdiEmu0X-jE",
  secure: true,
});
module.exports = cloudinary;
