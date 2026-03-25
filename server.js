import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import authRouter from "./src/routes/auth.routes.js";




app.listen(3000,() => {
    console.log("Server is running on port 3000");
})
