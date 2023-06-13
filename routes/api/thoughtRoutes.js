const router = require('express').Router();
const { Thought, User } = require('../../models');


//All thoguhts

router.get('/', async (req, res) => {
    try {
        const thoughtData = await Thought.find();
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    };
});
//get single thought 
 router.get('/:id', async (req, res) => {
    try {
        const thoughtData = await Thought.findOne({ _id: req.params.id });
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    };
});
//Update Single 
router.put('/:id', async (req, res) => {
    try {
      const thoughtData = await Thought.updateOne(
        { _id: req.params.id },
        { $set: req.body, updatedAt: new Date() },
        { runValidators: true, new: true },
      );
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    };
  });
//delete single
//create signle
router.post('/', async (req, res) => {
    try {
      const thoughtData = await Thought.create(
        {
          thoughtText: req.body.thoughtText,
          username: req.body.username,
        }
      );
      await User.updateOne(
        { _id: req.body.userId },
        { $push: { thoughts: thoughtData._id } },
        { runValidators: true, new: true },
      )
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    };
  });
module.exports = router;