const mongoose = require("mongoose");

const logoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
  styles: {
    type: String,
    required: false,
  },
});

logoSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Logo", logoSchema);
