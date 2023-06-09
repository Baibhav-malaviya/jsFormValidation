const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const notifier = require('node-notifier');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs')
mongoose.connect('mongodb://127.0.0.1:27017/signUpValidation');


const formSchema = new mongoose.Schema({
    name:String,
    email:String,
    telephone:String,
    password:String,
    confirmPassword:String
});
const Form = mongoose.model('Form',formSchema);


app.post('/register',(req,res)=>{
    const name = req.body.name;
    const email = req.body.mail;
    const telephone = req.body.tel;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    let userInfo = new Form({
        name: name,
        email: email,
        telephone: telephone,
        password: password,
        confirmPassword: confirmPassword

    });
    
    Form.find({}).then((data)=>{
        if(!data.some(d=> d.email===email || d.telephone===telephone)){
            Form.insertMany([userInfo]).then((data)=>{
                notifier.notify('Registered successfully.');
                
            });
        }else{
            notifier.notify(`This email or phone is already in use. Go to log in .`);
        }
    });
    
    
    
})

app.post('/login',(req,res)=>{
    const mail = req.body.mail;
    const password = req.body.password;
    Form.find().then((data)=>{
        if(data.some((d)=>d.email===mail)){
            Form.findOne({email:mail}).then((d)=>{
                if(d.password == password){
                    // notifier.notify("Loged in successfully");
                    res.render('login');
                }else{
                    notifier.notify("Wrong password. Please try again.");
                } 
            })
        }else{
            // notifier.notify("Email is not found. Please register first.");
            res.send("Hello guys!");
        }
    })
})



app.get('/',(req,res)=>{
    res.render('index');
});
app.listen(3000,()=>{
    console.log("listening on local port 3000");
})