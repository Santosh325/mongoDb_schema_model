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


const createDocument = async() => {

  try {
    const santosh = new PlayList({
      name:'Santosh',
      address: 'Butwal',
      isActive: true,
    
    })
    const messi = PlayList({
      name: 'messi',
      address: 'Argentina',
      isActive: true,
    })
    const mandip = PlayList({
      name: "mandip",
      address:"pokhara",
      isActive: false,
    })
    const ronaldo = PlayList({
      name: "ronaldo",
      address:"portugal",
      isActive: true,
    })

    const result = await PlayList.insertMany([santosh,messi,mandip,ronaldo])
    console.log(result);
  }catch(e) {
    console.log(e);
  }
 
}

createDocument();
