import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "munkhbat20241715@gmail.com",
      pass: "fdhybrrxoebqrdsc",
    },
  });

export const sendMail = async (req, res) => {
    try {
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <munkhbat20241715@gmail.com>', // sender address
        to: "faksurene@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
console.log(info);

      if (info.messageId) {
        res.status(200).json({success: true, id: info.messageId });
      } else {
        res.status(404).json({error: "error"});
      }
} catch (error) {
    res.status(404).json({ error: error});
    console.log(error)
}
}