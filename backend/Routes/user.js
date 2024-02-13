const express = require("express")
const zod=require("zod")
const mongoose=require("mongoose")
const {User}=require('../db')
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const JWT_SECRET=require("../config")


//zod validation
const signupBody = zod.object({
  firstName: zod.string().min(1),
  lastName: zod.string().min(1),
  email: zod.string().email(),
  password: zod.string().min(6), // You might want to customize password validation
});

router.post('/signup',async(req,res)=>{
    const {success}=signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    
    const {firstName,lastName,email,password}=req.body;

    try{
        const existingUser = await User.findOne({ email });

        if (existingUser) 
        {
            return res.status(411).json({
                message: "User already exists"
            });
        }

        const hashedPassword= await bcrypt.hash(password,10);

        const user=User.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashedPassword,
        })

        const userId = user._id;
        
        const token = jwt.sign({ userId }, JWT_SECRET,);

            res.status(200).json({
            message: 'User created successfully',
            token: token,
            });
    }
    catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }

    
})

//signin root
        const signinBody = zod.object({
            email: zod.string().email(),
            password: zod.string()
        })

        router.post("/signin",async(req,res)=>{
            const{success}=signinBody.safeParse(req.body)

            if (!success) {
                return res.status(411).json({
                    message: "Incorrect inputs"
                })
            }

            const{email,password}=req.body;

            try{
                const user = await User.findOne({ email });
                if(!user){
                    return res.status(400).json({
                        message:"user not exists"
                    })
                }

                const passwordMatch = await bcrypt.compare(password, user.password);

                if (!passwordMatch) {
                    return res.status(401).json({
                        message: "Invalid Credentials"
                    })
                }

                const userId = user._id;

                const token = jwt.sign({
                    userId
                }, JWT_SECRET);

                res.status(200).json({
                    message: "Login successfull",
                    token: token
                })
            }

            catch(error){
                console.log("Error during signin",error)
                return res.status(500).json({
                    message:"Internal server error"
                })

            }
            
        })

        


module.exports = router;


