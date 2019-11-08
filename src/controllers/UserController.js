const User = require('../models/User');

class UserController {
  async show(req, res){
    const { id } = req.params;

    const user = await User.findById(id)

    if(!user){
      return res.status(400).json({ error: 'User not found'})
    }

    return res.json(user)
  }

  async index(req, res){
    const users = await User.find().select('-__v')

    return res.json(users)
  }

  async store(req, res) {
    const { name, age, email, profession } = req.body

    const userExists = await User.findOne({ email })

    if(userExists){
      return res.status(400).json({ error: 'User already exists'})
    }

    const user = await User.create({
      name,
      age,
      email,
      profession
    })

    return res.json(user)
  }

  async update(req, res) {
    const { id } = req.params;

    const findUser = await User.findById(id);

    if(!findUser){
      return res.status(400).json({ error: 'User does not exist'})
    }

    await findUser.updateOne(req.body)
    const userUpdated = await User.findById(id).select('-__v')
    
    return res.json(userUpdated);
  }

  async delete(req, res){
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    return res.send();
  }
}

module.exports = new UserController();