
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express();


app.use(cookieParser())



// app.use("/", (req, res) => {
//     const cookie = req.cookies.cookieName;
//     if (cookie === undefined) {
//         // no: set a new cookie
//         var randomNumber = Math.random().toString();
//         randomNumber = randomNumber.substring(2, randomNumber.length);
//         res.cookie('cookieName', randomNumber, { maxAge: 900000, httpOnly: true });
//         console.log('cookie created successfully');
//     } else {
//         // yes, cookie was already present 
//         console.log('cookie exists', cookie);
//     }

//     res.sendFile(__dirname + "/public/index.html")
// })

app.use(express.static(path.resolve(__dirname,'public')))


app.listen(8080, () => {
    console.log("server up");
})