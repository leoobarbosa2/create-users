const mongoose = require('mongoose')

class Database {
  constructor(){
    this.mongo();
  }

  mongo(){
    this.connection = mongoose.connect(
      "mongodb+srv://leonardo:leonardo@cluster0-y0lts.mongodb.net/users?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}

module.exports = new Database();

