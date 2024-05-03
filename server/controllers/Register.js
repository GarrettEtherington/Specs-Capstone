module.exports ={
    register: async (req, res) => {
        try {
            let {username, password} = req.body
            let foundUser = await User.findOne({where: {username:username}})
            if (foundUser){
                res.status(400).send('Username be took my man')
            } else {
                let newUser = await User.create({username:username, password:password})
                const data = {
                    username: newUser.dataValues.username,
                    userId: newUser.dataValues.id,
                }
                res.status(200).send(data)
            }
        } catch (error) {
            console.error(error) 
            res.staus(400).send(error)
        }
    }
}