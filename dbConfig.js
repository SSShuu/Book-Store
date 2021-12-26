const mongoose = require("mongoose");

const connect_to_mongo_server = async () => {
  try {
    await mongoose.connect("mongodb+srv://trienzxczx:zzo8loByoENJiaFL@cluster0.qnf3o.mongodb.net/BookStore?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Server Error");
  }
};

module.exports = connect_to_mongo_server;
