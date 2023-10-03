const  {Router} = require('express'); 
const user = require('../models/user.schems');
const router =  Router();


router.get('/', (req, res) => {
    res.send("welcome")
})

router.post('/', async (req, res) => {
    let data = await user.create(req.body)
    res.send(data);
                                                                         
})

module.exports =router;

