import { verifyAccessToken } from "../util/jwtAuthentication.js";
import { sendEmail } from "../util/sendMail.js";
import { userModel, userProfileModel } from "./userModel.js";

// creating a user account service
export const createUserAccountService = async (email, password) => {
  const userAccount = new userModel({
    email,
    password,
    refreshToken:""
  });
  return await userAccount.save();
};
// checking if a user account exit using uer email
export const isAccountExist = async (email) => {
  const existingAccount = await userModel.findOne({ email })
  if (existingAccount) {
    return true;
  } else return false;
};
// Fetching all users using their email address
export const getUserAccountByEmailService=async(email)=>{
return await userModel.findOne({email})
}
// Fetching all user account services
export const getAllAccountService = async () => {
  return await userModel.find().select(["-password","-refreshToken"]);
};
// Fetching a user account using user id service
export const getUserAccountByIdService=async(userId)=>{
  return await userModel.findById(userId)
}
// Deleting a user account using the user id service
export const deleteUserAccountService=async(userId)=>{
  return await userModel.findByIdAndDelete(userId)
}

// Changing user password service
export const changUserPasswordService=async(uerId,newPassword)=>{
return	await userModel.findOneAndUpdate({_id:uerId},{password:newPassword},{new:true})
	
}

// create user profile  service
export const createUserProfileService=async(userId)=>{
  const userProfile=new userProfileModel({
    userId,
    firstName:"",
    lastName:"",
    profession:"",
    imageURL:""
  })
  return await userProfile.save().select(["-password"])
}
// getting user profile together with the user account using user id
export const getUserProfileExtendedByUserIdService=async(pipeline)=>{
  return await userProfileModel.aggregate(pipeline).exec()
}
// getting user profile using the user id
export const getUserProfileByUserId=async(userId)=>{
  return await userProfileModel.findOne({userId}).select(["-password"])
}
//updating user profile using the user account id
export const updateUserProfileService=async(userId,update)=>{
  return await userProfileModel.findOneAndUpdate({userId},update,{new:true}).select(["-password"])
}
// getting user profile using user id
export const getUserProfileByUserIdService=async(userId)=>{
return await userProfileModel.findOne({userId}).select(["-password"])
}

// deleting user profile using the user id

export const deleteUserProfileByUserIdService= async(userId)=>{
  return await userProfileModel.findOneAndDelete({userId})
}
// sending email notification to user
export const sendEmailService=async(userEmail)=>{
  return  sendEmail(userEmail)
}
// uploading user profile service
export const uploadUserProfileImageService=async(userId,imageURL)=>{
  return await userProfileModel.findOneAndUpdate({userId},{imageURL},{new:true})
}
