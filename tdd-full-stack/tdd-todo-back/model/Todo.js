const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
