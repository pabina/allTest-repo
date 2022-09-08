import  Jwt  from "jsonwebtoken";



export const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token;
    if(authHeader){
        const token=authHeader.split(" ")[1];
     Jwt.verify(token,process.env.Jwt_SEC,(err,user)=>{
        if(err) res.status(403).json("Token is not valid!");
        req.user=user;
        next();
     });
    }else{
        return res.status(401).json("you are not authenticated");
    }
}


export const verifyTokenAndAuthentication = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
       next()
        } else{
          res.status(403).json("you are not allowed") 
        }
    })
}
// export default verifyToken;