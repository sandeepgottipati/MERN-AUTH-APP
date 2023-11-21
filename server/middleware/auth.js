import jwt from 'jsonwebtoken'
import ENV from '../config.js'
export default async function Auth(req, res, next) {
    try {
        //access authorize header to validate request.
        const token = req.headers.authorization.split(" ")[1];
        //retrive the user Details for the logged in user.
        const decodedToken = await jwt.verify(token, ENV.JWT_SECRET)
        req.user = decodedToken;
        console.log(req.user);
        next();
    } catch (error) {
        res.status(401).send({ error: "authentication Failed!" })
    }
}