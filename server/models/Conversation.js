const mongoose = require("mongoose");

const conversationSchema = mongoose.schema({
  participants: [
    { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  ],
  messages: [
    { type: mongoose.Schema.Types.ObjectId, ref: "message", default: [] },
  ],
});
