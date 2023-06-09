const mongoose = require("mongoose");
autoIncrement = require("@alec016/mongoose-autoincrement");

const connection = mongoose.connection;

autoIncrement.initialize(connection);
const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

noteSchema.plugin(autoIncrement.plugin, {
  model: "Note",
  field: "TicketNum",
  startAt: 100,
});
const Note = connection.model("Note", noteSchema);

module.exports = Note;
