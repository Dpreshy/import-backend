const express = require("express");
const cors = require("cors");

require("./utils/db");

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "This is best place to be" });
});

app.use("/api/user", require("./router/userRouter"));

app.listen(port, () => {
  console.log("server is now running...!");
});
