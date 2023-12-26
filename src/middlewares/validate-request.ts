import { Request,Response,NextFunction } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";

//Note-> we are not catching but producing errors if the request isn't valid
export const validateRequest=(req:Request,res:Response,next:NextFunction)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
        
    }
    next();

}
