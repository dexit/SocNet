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
router.delete('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndDelete({ _id: req.params.id })
    await User.updateOne(
      { username: thoughtData.username },
      { $pull: { thoughts: thoughtData._id } },
      { runValidators: true, new: true }
    );
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});
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
  // add reaction to thought by id
  router.post('/:thoughtId/reactions', async (req, res) => {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  // delete reaction  by id from a thought by ID
  router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
      const thoughtData = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;