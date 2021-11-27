const express = require('express')
const app = express()
const mongoose = require('mongoose');

const cors = require("cors")
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3020;

mongoose
  .connect("mongodb+srv://anshukumar-729:anshu729@cluster0.3gbbg.mongodb.net/anshu2?retryWrites=true&w=majority")

  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  massage: { type: String },
});

const List2 = new mongoose.model("List2", listSchema);

const getList = async (req,res) => {
  try {
    result = await User
      // .find({name:{$in:["anshu","ankit"]},number:{$gt:21}})
      // .find({$or:[{name:"anshu"},{number:{$gt:21}}]})
      .find({  })
      res.json({ result: result })
  }catch(err){
      res.json({ status: 'error' })
  }
}
    
app.post('/api/register', async (req, res) => {
    console.log(req.body)
  
    try {
        const user = await List2.create({
            name: req.body.name,
            massage: req.body.massage

        })
        result = await List2
          // .find({name:{$in:["anshu","ankit"]},number:{$gt:21}})
          // .find({$or:[{name:"anshu"},{number:{$gt:21}}]})
          .find({});
        console.log(user)
        res.json({ status: "ok" ,result:result});
    } catch(err) {
        res.json({ status: 'error' })
    }
    
})



app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
  console.log(`connection is setup at http://localhost:${port}`);
});