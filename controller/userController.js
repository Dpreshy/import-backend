const userModel = require("../model/userModel");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "preciousonuegbu46@gmail.com",
    pass: " Top12345 ",
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
      from: "preciousonuegbu23@hotmail.com",
      to: email,
      subject: "Account Verification",
      html: `<h2>request for quote </h2>
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

module.exports = {
  createUser,
};
