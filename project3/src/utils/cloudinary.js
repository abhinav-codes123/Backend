import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary= async (localFilePath)=>{
    try{
        // if local file not found
        if(!localFilePath) return null;

        // if local file found, then upload it on cloudiary
        const response= await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // now file uploaded successfully on cloudinary,  (should we have to remove it from local storage )
        console.log("file uploaded successdully on cloudinary ",response.url);
        return response;
    }
    catch(error){
        // if error occuring then we have to remove file from local server
        fs.unlink(localFilePath);
        return null;
    }
}

export {uploadOnCloudinary}