console.log('Inside userController.js');
const { User, Thought } = require('../models');

const userController = {
  getAllUsers(req, res) {
    console.log('Inside getAllUsers');
    User.find({})
      .then(dbUserData => {
        console.log('Successfully fetched all users:', dbUserData);
        res.json(dbUserData);
      })
      .catch(err => {
        console.log('Error fetching all users:', err);
        res.status(500).json(err);
      });
  },

  getUserById({ params }, res) {
    console.log('Inside getUserById');
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .then(dbUserData => {
        if (!dbUserData) {
          console.log(`No user found with id: ${params.id}`);
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        console.log('Successfully fetched user by ID:', dbUserData);
        res.json(dbUserData);
      })
      .catch(err => {
        console.log('Error fetching user by ID:', err);
        res.status(400).json(err);
      });
  },

  createUser({ body }, res) {
    console.log('Inside createUser');
    console.log("Received request body:", body); 
    User.create(body)
      .then(dbUserData => {
        console.log("Successfully created user:", dbUserData); 
      })
      .catch(err => {
        console.log("Error while creating user:", err); 
        res.status(400).json(err);
      });
  },

  updateUser({ params, body }, res) {
    console.log('Inside updateUser');
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          console.log(`No user found with id: ${params.id}`);
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        console.log("Successfully updated user:", dbUserData);
        res.json(dbUserData);
      })
      .catch(err => {
        console.log("Error updating user:", err);
        res.status(400).json(err);
      });
  },

  deleteUser({ params }, res) {
    console.log('Inside deleteUser');
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          console.log(`No user found with id: ${params.id}`);
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        console.log("Successfully deleted user:", dbUserData);
        res.json(dbUserData);
      })
      .catch(err => {
        console.log("Error deleting user:", err);
        res.status(400).json(err);
      });
  },

  addFriend({ params }, res) {
    console.log('Inside addFriend');
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
    .then(dbUserData => {
      if (!dbUserData) {
        console.log(`No user found with id: ${params.userId}`);
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      console.log("Successfully added friend:", dbUserData);
      res.json(dbUserData);
    })
    .catch(err => {
      console.log("Error adding friend:", err);
      res.json(err);
    });
  },

  removeFriend({ params }, res) {
    console.log('Inside removeFriend');
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
    .then(dbUserData => {
      if (!dbUserData) {
        console.log(`No user found with id: ${params.userId}`);
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      console.log("Successfully removed friend:", dbUserData);
      res.json(dbUserData);
    })
    .catch(err => {
      console.log("Error removing friend:", err);
      res.json(err);
    });
  }
};

module.exports = userController;
