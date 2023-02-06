const express = require("express");
const router = express.Router();
const Pic = require("../modules/picModule");

router.route("/images").post((req, res) => {
  const url = req.body.url;
  const name = req.body.name;
  const prompt = req.body.prompt;
  const newPic = new Pic({
    url,
    name,
    prompt,
  });
  newPic.save();
});

module.exports = router;
