const nodemailer=require('nodemailer');

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

    let  transport= nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{user:"jahidurrahmanjm@gmail.com",pass:"fofjqlcumvzcqwpa"},

    })


    let mailOption={
        from:'MERN Ecommerce Solution <info@jahidurrahman.com>',
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }

    return await transport.sendMail(mailOption)
}

module.exports=EmailSend;