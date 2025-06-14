let express=require("express");

let app=express();
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("navbar.ejs");
});

app.listen(3000,()=>{
    console.log("Server started on 3000 port")

});

                            