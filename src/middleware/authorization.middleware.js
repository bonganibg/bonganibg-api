require('dotenv').config();

module.exports = (req, res, next) => {
    try{
        const token = req.headers["authorization"].split(" ")[0];
        if (token !== process.env.API_KEY)
            throw new Exception();
        next();
    }
    catch(error){
        console.warn("Unauthorized attempt");
        res.status(401).json({
            message: "You are not authorized to perform this action"
        });
    }
}