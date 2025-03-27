import express from "express";
import mongoModel from "../models/todolist.js";

// export const getdata = async (req, res) => {
//   return res.status(200).json({ result: "data not found" });
// };

export const getdata = async (req, res) => {
  try {
    const todos = await mongoModel.find();
    if (todos) {
      return res.status(200).json(todos);
    } else {
      return res.status(200).json({ result: "data not found" });
    }
  } catch (error) {
    return res.json(error);
  }
};

export const postdata = async (req, res) => {
  const todo = req.body;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  
  const date = Date.parse(todo.date);
  
  const finddata = await mongoModel.find();
  // console.log(finddata);
  
  if (finddata.length > 0) {
    let id = finddata[finddata.length - 1].id;
    id = id + 1;
    const todos = await mongoModel.create({ ...todo, id: id, date: day });
    console.log(todos);
    console.log(day);
    return res.status(200).json({ msg: "data created successfully" });
  } else {
    const todos = await mongoModel.create({ ...todo, id: 1, id, date: day });
    return res.json({ msg: "first data insert" });
  }
};

export const deletedata = async (req, res) => {
  let param = Number(req.params.id);

  const del = await mongoModel.deleteOne({ id: param });
  if (del) {
    console.log("User deleted successfully");
    return res.json({ message: "User deleted successfully" });
  } else {
    console.log("No user found with this id");
    return res.json({ message: "No user found with this id" });
  }
};

export const updatedata = async (req, res) => {
  let param = req.params.id;
  let bod = req.body;
  // param = Number(param);

  const user = await mongoModel.findOne({ id: param });
  console.log(user);

  const updata = await mongoModel.updateOne({ id: param }, { $set: bod });
  console.log(updata);

  if (updata) {
    return res.status(201).json(updata);
  } else {
    return res.status(404).json({ msg: "Not Found" });
  }
};
