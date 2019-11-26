const mongoose = require('mongoose')

class Database {
  constructor(){
    this.mongo();
  }

  mongo(){
    this.connection = mongoose.connect(
      "mongodb+srv://leonardo:<password>@cluster0-41ikl.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}

module.exports = new Database();

