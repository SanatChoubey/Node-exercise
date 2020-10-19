const mongoose =  require('mongoose')

exports.dbConnect=  ()=>{mongoose
.connect("mongodb+srv://sanat:12345@flightdb.0vuxm.mongodb.net/<dbname>?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
  console.log('connected')
}).catch((e)=>{
  console.log('error',e)
})}