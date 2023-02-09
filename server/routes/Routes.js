const express = require("express");
const router = express.Router();
const Pic = require("../modules/picModule");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dhkfytcvj",
  api_key: "673625697456759",
  api_secret: "z_Qr5UiNHX0iih0AekFQW3buZkA",
  secure: true,
});

router.route("/images").post(async (req, res) => {
  const url1 = req.body.url;
  const name = req.body.name;
  const prompt = req.body.prompt;

  const res1 = await cloudinary.uploader.upload(url1);

  const newPic = new Pic({
    url: res1.url,
    name,
    prompt,
  });
  newPic.save();
});

router.route("/getImages").get((req, res) => {
  console.log("lol5");
  Pic.find()
    .limit()
    .then((pics) => res.json(pics));
});

module.exports = router;
