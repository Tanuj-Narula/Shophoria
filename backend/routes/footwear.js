import { Router } from "express";
import { footwearModel } from "../models/footwearModel.js";

const router = Router();

router.get("/", async (req,res)=>{
    try {
        const items = await footwearModel.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error });
    }
})

export default router;