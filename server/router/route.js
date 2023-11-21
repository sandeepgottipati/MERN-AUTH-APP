import { Router } from "express";
const router = Router();

/**POST Methods */
router.route('/register').post((req, res) => {
    res.json('Register route')
})
router.post('/registerMail', (req, res) => {

})
router.post('/authenticate', (req, res) => { })
router.post('/login', (req, res) => { })
/**GET Methods */

/*PUT Methods */

export default router;