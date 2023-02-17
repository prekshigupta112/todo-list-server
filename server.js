const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

let todolist = [];

app.get("/api", (req, res) => {
  res.json(todolist);
});

/*
{
  index : 6,
  data : {
    status : true,
    text : "Prekshi"
  }
}

{
  status : true,
  text : "Prekshi"
}
*/

app.post("/save", (req, res) => {
  if (req.body.index == -1) {
    todolist.push(req.body.data);
  } else {
    todolist[req.body.index] = req.body.data;
  }
  res.json(req.body.data);
});

app.delete("/delete/:curIndex", (req, res) => {
  todolist.splice(req.params.curIndex, 1);
  res.send("TODO_SUCCESSFULLY_DELETED");
});

app.listen(PORT, () => {
  console.log("Server started on port 3001");
});
