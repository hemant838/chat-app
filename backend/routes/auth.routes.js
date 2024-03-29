import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

//  this routes are coming from the controller which is responsible for routing the users
router.post("/signup", signup);

router.post("/logout", logout);

router.post("/login", login);

export default router;
