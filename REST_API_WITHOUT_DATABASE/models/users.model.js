const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Sajib Bhattacharjee",
    email: "sajibbhattacharjee2000@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Zahan",
    email: "zahan@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Diganto Mondal",
    email: "digantomondal@gmail.com",
  },

  {
    id: uuidv4(),
    username: "Rahul Bairaggi",
    email: "rahulbairaggi@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Turash Kumar",
    email: "turaskumar2000@gmail.com",
  },
];

module.exports = users;
