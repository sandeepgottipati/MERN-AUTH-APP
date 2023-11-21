import { Router } from "express";
const router = Router();

/**POST Methods */
//register user
router.route('/register').post((req, res) => {
    res.json('Register route')
})
// send mail 
router.post('/registerMail', (req, res) => {

})
//authenticate user
router.post('/authenticate', (req, res) => { })
//login in app 
router.post('/login', (req, res) => { })
/**GET Methods */
//user with user name
router.get('/user/:username', (req, res) => {

})
//generate random OTP
router.get('/generateOTP', (req, res) => {

})
//verify generated OTP
router.get('/verifyOTP', (req, res) => {

})
//reset all the variables
router.get('/createResetSession', (req, res) => {

})



/*PUT Methods */
//is use to update the user profile
router.put("/updateuser", (req, res) => { });
//use to reset password
router.put('/resetPassword', (req, res) => { })
export default router;