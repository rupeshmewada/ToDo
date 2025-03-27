import mongoose from "mongoose";
const db = "mongodb://localhost:27017/todo";

mongoose
  .connect(db)
  .then((res) => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const todoSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  title: String,
  description: String,
  date: String,
});
const mongoModel = mongoose.model("todolist", todoSchema);

export default mongoModel;
