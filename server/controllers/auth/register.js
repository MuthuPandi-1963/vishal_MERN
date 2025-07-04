import authModel from "../../models/auth.js"
import bcryptjs from 'bcryptjs'
import { genOTP } from "../../utilities/genOTP.js"

const register = async(req,res)=>{
    try {
        const {username,email,password,role} = req.body

        if(!username || !email || !password){
            return res.status(404).json({
                data : {},
                success : false,
                message : "data fields are missing"
            })
        }
       const checkUser =  await authModel.findOne({email : email})
       if(checkUser && checkUser.isVerified ){
            return res.status(404).json({
                data : {},
                success : false,
                message : "email address already exists please login"
            })
       }
       const hashedPassword = await bcryptjs.hash(password,10)
       const otp = genOTP()

       if(checkUser && !checkUser.isVerified ){
        checkUser.username = username || checkUser.username;
        checkUser.password = hashedPassword || checkUser.password;
        checkUser.verificationToken = otp
        checkUser.verificationTokenExpiresAt = Date.now() + 15 * 60 *1000
        checkUser.role = role || checkUser.role

        await checkUser.save();
        const { _id, email:email_id, username:name, role : roles ,...others } = checkUser;
            return res.status(200).json({
                data : {_id,email_id,name,roles,otp},
                success : true,
                message : "otp send successfully"
            })
       }

       const newUser = await authModel.create({
        username,
        email,
        password : hashedPassword,
        verificationToken : otp,
        verificationTokenExpiresAt : Date.now() + 15 * 60 *1000,
        role : role || "user"
       })
       const hours = newUser.verificationTokenExpiresAt.getHours()
       const min = newUser.verificationTokenExpiresAt.getMinutes()
       const {password:pass,...data} = newUser
       res.status(201).json({
        data : {...data,date : hours + " : " +min} ,
        success : true,
        message : "user created successfully"
       })

    } catch (error) {
        res.status(500).json({
        data : {} ,
        success : false,
        message : error.message
       })
    }
}

export default register;