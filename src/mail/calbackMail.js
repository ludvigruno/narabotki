import nodemailer from 'nodemailer';
export default (type,name, phone, hours ,minuts)=>{
  let data = new Date();
  let year = data.getFullYear();
  let month = data.getMonth();
  let day = data.getDate();
  let hour = data.getHours();
  let minutes = data.getMinutes();
  let seconds = data.getSeconds();
const output = `
<html> 
<head> 
</head> 
<body> 
<h3>${type} с сайта <a href='https://utta.ru' style='color:blue;margin: 0 auto;display: contents;text-decoration: none;'>remont-otdelka.ru</a></h3>
<p>Cегодня ${day}.${month}.${year}, в ${hour}:${minutes}:${seconds}.</p>
<p>Имя: ${name}.</p>
<p>Телефон: ${phone}.</p>
<p>Время: в ${hours} часов ${minuts} минут.</p>
<p>Вид обратной связи: Подарок.</p>
</body> 
</html>
`;
let smtpTransport;
try {
smtpTransport = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true, // true for 465, false for other ports 587
  auth: {
    user: "kochurova@utta.ru",
    pass: "1234567Utta!"
  }
});
} catch (e) {
return console.log('Error: ' + e.name + ":" + e.message);
}

let mailOptions = {
from: 'kochurova@utta.ru', // sender address
to: 'kochurova@utta.ru', // list of receivers
subject: 'Обращение с сайта remont-otdelka.ru', // Subject line
text: 'Обращение с сайта remont-otdelka.ru', // plain text body
html: output // html body
};

smtpTransport.sendMail(mailOptions, (error, info) => {
if (error) {
  // return console.log(error);
  return console.log(new Error('Ошибка отправки почты, с окна подарка'));
} else {
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
res.render('feed-ok', {msg: 'В ближайшее время мы с Вами свяжемся и ответим на все вопросы'});
res.redirect('https://remont-otdelka.ru')

});

}