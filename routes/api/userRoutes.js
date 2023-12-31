const router = require('express').Router();
const { User } = require('../../models');

//All users
router.get('/', async (req, res) => {
    try {
        const userData = await User.find();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
});
//get single user 
 router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findOne({ _id: req.params.id });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
});
  
//Update Single 
router.put('/:id', async (req, res) => {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true },
      );
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    };
  });
  
//delete single
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  };
});
//create signle
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  };
});
// adding friends
router.put('/:userId/friends/:friendId', async (req, res) => {
  try {
    const userData = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    );
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// removing friends
router.delete('/:userId/friends/:friendId', async (req, res) => {
  try {
    const userData = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    );
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;