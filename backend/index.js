//step 1
var express = require("express"); //import 
var mongoose = require("mongoose");
const userRoute=require("./route/userRoutes");
const Productroute=require("./route/productRoutes");
var cors = require("cors");

//step 2
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// step 4 api creation
app.get('/',(request,response)=>{
    response.send({data:"Hello",url:"image.png"});  
});

//step 6 mention api path here
app.use("/appuser",userRoute); 
app.use("/product",Productroute);

var uri = "mongodb+srv://praveen17mails:Praveen17@cluster0.3upltpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var connectionParams = {useNewUrlParser:true,useUnifiedTopology:true};
//step 5 DB Connection
mongoose.connect(uri,connectionParams)
.then(()=>{console.log("DB connected Successfully")})
.catch((err)=>{console.log("Error connecting to mongoDB",err)});


//step 3
app.listen(4000,()=>{
    console.log("server running on port http://localhost:4000"); 
});