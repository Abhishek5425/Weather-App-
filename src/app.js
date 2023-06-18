// nodemon src/app.js -e js,hbs  ---->>>>> THIS IS IMP........
// Above line automatically runs code whenever there is change in any file we made
// nodemon src/app.js this runs code only when there is some change in app.js file
// cd.. is used to go back in directory in terminal
// mkdir is used to make directory by using terminal or filesystem module
// cd directory name is used to go to that directory
// firstly write npm init

const express = require("express");
const path=require("path");
const hbs=require("hbs");
const app = express();
// by using app we can now access all properties and methods of express

//const port=process.env.PORT || 8000;
const port=8000;

// public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');   // just 1 line code for using hbs
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path)); 

app.get("",(req,res)=>
{
    // request,response
    res.render('index');
});

app.get("/about",(req,res)=>
{
    // request,response
    res.render('about');
});

app.get("/weather",(req,res)=>
{
    // request,response
    res.render('weather');
});

app.get("*",(req,res)=>
{
    // if nothing above matches then this
    res.render('404error',{
        errorMSg : 'Opps! Page Not Found'
    })
});

app.listen(port,()=>
{
    console.log(`listening at port ${port}`);
});