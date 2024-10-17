const userSchemaModel = require('../models/authModel')
const { encryptPassword , comparePassword } = require('../helpers/authHelper') 

const registerController  = async(req, res, next) => {
    try {
        const {username, email, password } = req.body
        // console.log(username, email, password)
        const emailExit = await userSchemaModel.findOne({email})
        const encryptedPassword = await encryptPassword(password)

        if(emailExit){ 
            return res.status(400).json({message:'Email already exists'})
        }

        const newUser = new userSchemaModel({
            username,
            email,
            password : encryptedPassword,
        })

        await newUser.save()

        res.status(201).json({message:'User registered successfully'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const userLogin = async(req, res, next) => {
    try {
        const { username, password } = req.body;

        const loginCheck = await userSchemaModel.findOne({username})
        if(!loginCheck){
            return res.status(400).json({message:'User not found'})
        }

        const passwordMatch = comparePassword(password, loginCheck.password)
        if(!passwordMatch){
            return res.status(400).json({message:'Password incorrect'})
        }

        res.status(200).json({message:'User logged in successfully'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:error,message})
    }
}

module.exports={ registerController,userLogin }