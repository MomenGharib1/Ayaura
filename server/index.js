const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Ayaura:Xdesignerstrange2020@cluster0.x9gijlq.mongodb.net/Ayaura"
);

app.use("/", require("./routes/Routes"));

app.listen(process.env.PORT || 3001, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
