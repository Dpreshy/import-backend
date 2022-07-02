const userModel = require("../model/userModel");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Gideonekeke64@gmail.com",
    pass: "sgczftichnkcqksx",
  },
});

const createUser = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const user = await userModel.create({
      name,
      email,
      message,
    });

    const mailOptions = {
      from: "",
      to: "officialpresh20@gmail.com",
      subject: "Account Verification",
      html: `<h2>request for quote </h2>Y7
  <p>name:${name} </p>
  <p>email:${email} </p>
  <p>message:${message} </p>


  `,
    };

    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Mail sent: ", info.response);
      }
    });

    res.status(201).json({ message: "created", data: user });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  deleteUser,
};
