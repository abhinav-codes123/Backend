import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";

const registerUser= asyncHandler( async (req,res)=>{
    // res.status(200).json({
    //     message: "ok"
    // })

    const {fullName, email, username, password}= req.body

    console.log("email : ", email)
    // console.log("password : ",password)

    // if(fulllName===""){
    //     throw new ApiError(400,"fullname is required");
    // }

    if(
        [fullName,email,username,password].some((field)=>
        field?.trim()==="")){
            throw new ApiError(400,"all fields are required");
        }
})

export {registerUser}