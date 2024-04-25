const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { type } = require('os');
const { error } = require('console');


const port = 4000;

const app = express();

app.use(express.json());
app.use(cors());

// Database
mongoose.connect('mongodb+srv://vishwkant0693:edeal_store@cluster0.w3jzjgj.mongodb.net/')

// API

app.get("/",(req,res)=>{
    res.send("Express")
})


const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage : storage})


// upload api
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})


// Schemas for creating prod 

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new:{
        type:Number,
        required:true,
    },
    old:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avail:{
        type:Boolean,
        default:true,
    },
})

// Adding Products

app.post("/addproduct", async (req,res)=> {
    const products = await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product = products.slice(-1);
        let last_prod = last_product[0];
        id = last_prod.id+1;
    }
    else {
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new:req.body.new,
        old:req.body.old,
    });
    console.log(product);
    await product.save();
    console.log("Product saved successfully !!");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Removing Products

app.post("/removeproduct",async (req,res)=> {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Product removed successfully  !!");
    res.json({
        success:true,
        name:req.body.name
    })
})

// Creating API for all products

app.get("/allproducts", async (req,res)=> {
    let products = await Product.find({});
    console.log("All products fetch")
    res.send(products);
})


// Schema for Users 

const Users = mongoose.model('Users',{
    username:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})


app.post('/signup', async (req, res)=> {
    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({
            success:false,
            errors:"User already existed !!"
        })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'salt_kz')
    res.json({success:true,token})
})


app.post('/login', async (req,res)=>{
    let user = await Users.findOne({email:req.body.email})
    if(user) {
        const passcomp = req.body.password === user.password;
        if (passcomp) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'salt_kz');
            res.json({success:true,token})
        }
        else {
            res.json({
                success:false,
                errors:"Wrong Creds !!"
            })
        }
    }
    else {
        res.json({
            success:false,
            errors:"Wrong Credentials !!"
        })
    }
})



app.listen(port,(err)=>{
    if(!err) {
        console.log("Running : "+port);
    }
    else {
        console.log("Error : ",+err);
    }
})