import { Router } from "express";
import * as controller from '../controller/appController.js'
import Auth, { localVariables } from "../middleware/auth.js";
const router = Router();

/**POST Methods */
//register user
router.route('/register').post(controller.register);
// send mail 
//router.post('/registerMail',)
//authenticate user
router.post('/authenticate', (req, res) => res.end())
//login in app 
router.post('/login', controller.verifyUser, controller.login)



/**GET Methods */
//user with user name
router.get('/user/:username', controller.getUser)
//generate random OTP
router.get('/generateOTP', controller.verifyUser, localVariables, controller.generateOTP)
//verify generated OTP
router.get('/verifyOTP', controller.verifyUser, controller.verifyOTP)
//reset all the variables
router.get('/createResetSession', controller.createResetSession)



/*PUT Methods */
//is use to update the user profile
router.put("/updateuser", Auth, controller.updateUser);
//use to reset password
router.put('/resetPassword', controller.verifyUser, controller.resetPassword)
export default router;