const router = require('express').Router();
const { Thought, User } = require('../../models');


//All thoguhts

router.get('/', async (req, res) => {
    try {
        const thoughtData = await Thought.find()
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
});
//get single thought 
 router.get('/:id', async (req, res) => {
    try {
        const thoughtData = await Thought.findOne({ _id: req.params.id })
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
});
//Update Single 
//delete single
//create signle

module.exports = router;