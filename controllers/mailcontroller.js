const nodeMailer = require ('nodemailer');


exports.mailAFriend = async(req,res)=>{
    const {email} = req.body;
    
    
  // create reusable transporter object using the default SMTP transport
  const transporter = nodeMailer.createTransport({
    service : "gmail",
    auth: {
      user:'aswinp910@gmail.com', 
      pass: 'slppkbeccmiqkqhp', // generated ethereal password
    },
  });

 const message = {
    from : 'aswinp910@gmail.com',
    to : `${email}`,
    subject : 'nodemailer Assignment',
    html: '<h3>Mail a friend assignment is completed successfully</h3>'
 }

const info = await transporter.sendMail(message)

console.log("Message sent: %s", info.messageId);

res.send(`email send successfully to :${email}`)


} 