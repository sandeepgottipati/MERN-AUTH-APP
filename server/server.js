import express from "express";
import cors from 'cors';
import morgan from "morgan";
/*internal Imports */
import connect from "./database/conn.js";
import router from "./router/route.js";
const app = express();

/*middleware */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hackers know about our stack.


// 
const port = 5174;
/*HTTP GET Request*/
app.get('/', (req, res) => {
    res.status(201).json("Home Get Request");
})

/**api routes */
app.use('/api', router)

/** Start server only when we have a valid connection*/

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`server started on http://localhost:${port}`)
        });
    } catch (error) {
        console.log("cannot connect to the server")
    }
}).catch(error => {
    console.log("Invalid database connection")
})


