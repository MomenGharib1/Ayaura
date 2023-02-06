const mongoose = require("mongoose");

const picSchema = new mongoose.Schema(
  {
    url: "",
    name: "",
    prompt: "",
  },
  { collection: "pics" }
);

const Pic = mongoose.model("pics", picSchema);

module.exports = Pic;
