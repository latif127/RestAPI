const express=require('express');
const PORT=process.env.PORT || 3300;
const mongoose=require('mongoose');
const cors=require('cors');


require('dotenv/config');

const app=express();
app.use(cors());

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Import the Routes
const postRoute=require('./routes/posts');
const employeeRoute=require('./routes/api/employee');

app.use('/posts', postRoute);
app.use('/api/employee', employeeRoute);


app.get('/', (req, res)=>{
    res.send("Home Page of RestAPI");
});

/*app.get('/posts', (req, res)=>{
    res.send("Home page of posts");
});*/

//Database connection
mongoose.connect(
    process.env.DbCon,{ useUnifiedTopology: true, useNewUrlParser: true  },()=>{
    console.log('Database is connected');
});


app.listen(PORT, ()=>console.log(`Server is running on port: ${PORT}`));