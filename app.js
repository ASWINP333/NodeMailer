const express = require ('express');
const bodyParser = require ('body-parser');
const nodeMailer = require ('nodemailer');
const PORT = 3000;
const app = new express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//route import
const mail = require("./routes/mailRoute")
app.use("/api/v1",mail)


app.listen(PORT,()=>{
    console.log(`server is working on PORT :${PORT}`);

});