import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const authController = {
    async signUp(req, res) {
        const { fullName, userName, email, passWord } = req.body;
        console.log(req.body);
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(passWord, salt);
            const newUser = new User({
                fullName: fullName,
                userName: userName,
                email: email,
                passWord: hashed
            })
            const user = await newUser.save();
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json('Something wrong!')
        }
    },

    //GENERATE_ACCSESS_TOKEN
    genarateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_ACCSESS_KEY,
            { expiresIn: "2h" }
        );
    },
    //GENERATE_REFRESH_TOKEN
    genarateRegreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "365d" }
        );
    },

    async signIn(req, res) {
        const { userName, passWord } = req.body;
        try {
            const user = await User.findOne({ userName })
            if (!user) {
                return res.status(400).json("Wrong username!");
            }
            const vaidPassword = await bcrypt.compare(

                passWord,
                user.passWord
            )
            if (!vaidPassword) {
                return res.status(400).json("Wrong Password!");
            }
            if (user && vaidPassword) {
                const accessToken = authController.genarateAccessToken(user);
                const refreshToken = authController.genarateRegreshToken(user);
                res.cookie("refreshToken", refreshToken,{
                    httpOnly:true,
                    secure:false,
                    path:"/",
                    sameSite: "strict",
                })
                const { passWord, ...other } = user._doc;
                return res.status(200).json({ ...other, accessToken});
            }
        }
        catch (err) {
            return res.status(500).json(err);
        }
    },

    requestRefreshToken: async(req,res) => {
        //Take refresh Token from user
        const refreshToken = req.cookies.refreshToken;
        res.status(200).json(refreshToken);
    }
};

export default authController;