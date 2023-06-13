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
      const userData = await User.updateOne(
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
//create signle
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  };
});
module.exports = router;