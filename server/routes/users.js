// populate admin dashboard
// backend/routes/users.js
const router = express.Router();
const User = require('../model/User'); // Adjust the path to your user model

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
