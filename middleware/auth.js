import jwt from 'jsonwebtoken'
const auth = (req,res,next) => { 
    /*through all of this controller js files will be executed*/
    try {
        const token = req.headers.authorization.split(' ')[1]
        let decodeData = jwt.verify(token,process.env.JWT_SECRET)
        req.userId = decodeData?.id 
        next() 
        /*see routes/Questions after auth satisfies next() calls the AskQuestion for instance */
    } catch (error) {
       console.log(error)
    }
}
export default auth;