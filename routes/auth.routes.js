const {Router} = require('express')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
  '/register',async (req, res) => {
  try {
    const {email, password} = req.body
    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({
           message: 'Такой пользователь уже существует'
        })
    }
    const user = new User({
        email: email,
        password: password, 
        status: "user"
    })
    await user.save()

    res.status(201).json({ message: 'OK' })
  } catch (e) {
      console.log(e)
    res.status(500).json({ 
        message: 'Что-то пошло не так, попробуйте снова' 
    })
  }
})



// /api/auth/login
router.post(
  '/login', async (req, res) => {
  try {

    const {email, password} = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' })
    }

    res.json({ 
        token: user.password,
        userId: user._id,
        role: user.role,
        email: user.email
     })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})




module.exports = router