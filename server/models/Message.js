const mongoose = require("mongoose");
const { MESSAGE_TYPE_TEXT, MESSAGE_TYPE_MEDIA } = require("../utils/constants");

const messageSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
    read: { type: Boolean, default: false },
    type: {
      type: String,
      required: true,
      enum: [MESSAGE_TYPE_MEDIA, MESSAGE_TYPE_TEXT],
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

model.exports = Message = mongoose.model("message", messageSchema);
