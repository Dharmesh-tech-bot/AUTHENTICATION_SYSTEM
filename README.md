## AUTHENTICATION

## HOW IT WORKS?

### Basic SERVER SETUP
```cpp
npm init -y
```
```cpp
npm i express moongoose morgan dotenv
```
### package.json/scripts
```cpp
"dev":"npx nodemon server.js" //npm run dev for start server 
```

### server.js
```cpp
import app from "./src/app.js";


app.listen(3000,() => {
    console.log("Server is running on port 3000");
})
```


### src/app.js
```cpp
import express from 'express'
import morgan from 'morgan'

const app = express();

app.use(express.json()); //middleware
app.use(morgan("dev")); //dev mode for methods,status code,api hit etc.
```

### src/config/config.js
.env file is use to hide crediential data(like password,url,keys)
```cpp
//src/config/config.js
import dotenv from "dotenv";

dotenv.config(); //important to access .env file variables
```

### src/config/database.js
```cpp
import mongoose from "mongoose";
import config from "./config.js";

async function connectDB(){

    await mongoose.connect(config.MONGO_URI)

    console.log("CONNECTED to DB")
}

export default connectDB;
```
### src/models/user.model.js
```cpp
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true,"username is required"],
        unique: [ true, "username must be unique" ]
    },
    email: {
        type: String,
        required: [ true, "Email is required" ],
        unique: [ true, "Email must be unique" ]
    },
    password: {
        type: String,
        required: [ true, "Password is required"]
    }
})

const userModel = mongoose.model("users",userSchema);

export default userModel;
```

### src/routes/auth.routes.js
```cpp
import {Router} from "express";

const authRouter = Router();

export default authRouter;
```








