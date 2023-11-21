
import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt'
/**POST: http://localhost:5174/api/register
 * 
 * @param {
 * "username":"example123",
 * "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
 * } 
 * 
 */
export const register = async (req, res) => {

    // try {
    //     const { userName, password, profile, email } = req.body;

    //     //check the existing user.
    //     const existUserName = new Promise((resolve, reject) => {
    //         UserModel.findOne({ userName }, function (error, user) {
    //             console.log(error)
    //             if (error) reject(new Error(error));
    //             if (user) reject({ error: "username exists" });
    //             resolve();
    //         })
    //     })
    //     //check the existing email
    //     const existEmail = new Promise((resolve, reject) => {
    //         UserModel.findOne({ email }, (error, email) => {
    //             console.log(error)
    //             if (error) reject(new Error(error));

    //             if (email) reject({ error: "Email exists already" });
    //             resolve();
    //         })
    //     })
    //     Promise.all([existEmail, existUserName]).then(() => {

    //         if (password) {
    //             bcrypt.hash(password, 10).then(hashedPassword => {
    //                 const user = new UserModel({
    //                     userName,
    //                     password: hashedPassword,
    //                     profile: profile || '',
    //                     email
    //                 })
    //                 user.save()
    //                     .then(result => res.status(201).send({ msg: "user registered successfully" }))
    //                     .catch(err => res.status(500).send({ error }));
    //             }).catch(error => {
    //                 return res.status(500).send({
    //                     error: "unable to hash the password"
    //                 })
    //             })
    //         }
    //     }).catch(error => {
    //         return res.status(500).send({ error })
    //     })
    // }
    // catch (error) {
    //     res.status(500).send(error);
    // }
    try {
        const { userName, password, profile, email } = req.body;

        // Check the existing user.
        const existUserName = UserModel.findOne({ userName }).exec();

        // Check the existing email.
        const existEmail = UserModel.findOne({ email }).exec();

        Promise.all([existEmail, existUserName])
            .then(([existingEmail, existingUserName]) => {
                if (existingUserName) {
                    throw { error: "Username already exists" };
                }
                if (existingEmail) {
                    throw { error: "Email already exists" };
                }

                if (password) {
                    return bcrypt.hash(password, 10);
                } else {
                    throw { error: "Password is required" };
                }
            })
            .then((hashedPassword) => {
                const user = new UserModel({
                    userName,
                    password: hashedPassword,
                    profile: profile || '',
                    email
                });

                return user.save();
            })
            .then((result) => {
                res.status(201).send({ msg: "User registered successfully" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send({ error: "Internal Server Error" });
            });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}
/**POST: http://localhost:5174/api/login
 * @param:{
 * "username":"example123",
 * "password":"admin123"}
 */
export const login = async (req, res) => {
    res.json('login router')
}

/** GET: http://localhost:8080/api/user/example123 */
export const getUser = async (req, res) => {
    res.json("get user route")
}

/**PUT: http://localhost:8080/api/updateuser 
 * 
 * @param:{
 * "header:"<token"
 * }
 * body:{
 * firstName:'',
 * address:'',
 * profile:''}
*/
export const updateUser = async (req, res) => {
    res.json("update user route")

}
/** GET: http://localhost:8080/api/generateOTP */
export const generateOTP = async (req, res) => {
    res.json("generate OTP route")

}

/** GET: http://localhost:8080/api/verifyOTP */
export const verifyOTP = async (req, res) => {
    res.json('verify otp route')
}

// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export const createResetSession = (req, res) => {
    res.json('create Reset Session')


}

/*PUT: http://localhost:8080/api/resetPassword */
export const resetPassword = async (req, res) => {
    res.json('reset password')
}
