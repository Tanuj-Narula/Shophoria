import express from 'express';
import mongoose from 'mongoose';
import menClothing from './routes/men_clothing.js';
import womenClothing from './routes/women_clothing.js';
import kidsClothing from './routes/kids_clothing.js';
import footwear from './routes/footwear.js';
import beauty from './routes/beauty.js';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(cors({
  origin : process.env.frontend_uri
}));

app.use(express.json());
app.use('/api/men_clothing' , menClothing)
app.use('/api/women_clothing' , womenClothing)
app.use('/api/kids_clothing' , kidsClothing)
app.use('/api/footwear' , footwear)
app.use('/api/beauty' , beauty)


mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Connected to MongoDB') )
.catch((err)=> console.log("couldn't connect to mongodb", err));


app.get("/"  ,(req,res) =>{
    res.send("API For Products");
});

const port = process.env.PORT;

app.listen(port , ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})
