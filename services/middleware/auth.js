require('dotenv').config();

module.exports = (req, res, next) => {
	try{		
		const token = req.headers["authorization"].split(" ")[0];		
		if (token !== process.env.API_TOKEN)
			throw new Exception();
		next();
	}
	catch(error)
	{
		res.status(401).json({
			message: "You are unauthorized"
		});
	}
}
