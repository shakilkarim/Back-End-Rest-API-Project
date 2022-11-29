const express =require('express');
const {CreateProfile,UserLogin,SelectProfile,UpdateProfile}=require("../controllers/ProfileController")
const {CreateToDo,SelectToDo,UpdateToDo,UpdateStatusToDo,RemoveToDo,SelectToDoByStatus,SelectToDoByDate}=require("../controllers/ToDoListController")
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");


const router =express.Router();


router.post("/CreateProfile",CreateProfile)
router.post("/UserLogin",UserLogin)



router.get("/SelectProfile",AuthVerifyMiddleware,SelectProfile);
router.post("/UpdateProfile",AuthVerifyMiddleware,UpdateProfile);


router.post("/CreateToDo",AuthVerifyMiddleware,CreateToDo);
router.get("/SelectToDo",AuthVerifyMiddleware,SelectToDo);
router.post("/UpdateToDo",AuthVerifyMiddleware,UpdateToDo);
router.post("/UpdateStatusToDo",AuthVerifyMiddleware,UpdateStatusToDo);
router.post("/RemoveToDo",AuthVerifyMiddleware,RemoveToDo);
router.post("/SelectToDoByStatus",AuthVerifyMiddleware,SelectToDoByStatus);
router.post("/SelectToDoByDate",AuthVerifyMiddleware,SelectToDoByDate);


module.exports=router;