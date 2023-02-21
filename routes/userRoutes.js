
const router = require('express').Router()
const {
    register,
    registerPost,
    login,
    fetchRef,
    directTeam,
    activeTeam,
    purchaseHistory
} = require('../controllers/userController')


router
    .post('/skyhigh/register', register)
    .post('/skyhigh/registerPost', registerPost)
    .post('/skyhigh/login', login)
    .post('/skyhigh/fetchRef', fetchRef)
    .post('/skyhigh/directTeam', directTeam)
    .post('/skyhigh/activeTeam', activeTeam)
    .post('/skyhigh/purchaseHistory', purchaseHistory)




module.exports = router