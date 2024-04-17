const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
  const { fullName, email, phone, prayerRequest } = req.body;
  const recipientEmail = email;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: recipientEmail,
    to: 'dani.roomu@gmail.com',
    subject: 'Nueva solicitud de oración',
    text: `Nombre: ${fullName}\nEmail: ${email}\nTeléfono: ${phone}\nPetición de Oración: ${prayerRequest}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.status(200).send('Correo electrónico enviado con éxito');
    }
  });
};
