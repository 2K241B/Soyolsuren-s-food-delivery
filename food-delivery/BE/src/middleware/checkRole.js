export const checkRole = (req, res, next) => {
    const { user } = req.body
    console.log(user)
    if(user.role != "admin"){
        return res.status(403).send({error : "permission denied"})
    } 
    next()
    return 
}