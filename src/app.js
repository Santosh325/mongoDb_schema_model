const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/firstDb")
.then(() => console.log('connection successfully '))
.then((err) => console.log(err))


const playListSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  address: String,
  isActive: Boolean
});

const PlayList = new mongoose.model("PlayList", playListSchema);