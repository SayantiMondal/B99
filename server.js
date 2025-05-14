const server=require("express")
const app=server()
app.get("/home",(req,res)=>{
    res.send("<h1>This is home page</h1>")

})
app.get("/about",(req,res)=>{
    res.send("<h1>This is about Page</h1>")
})
app.listen(9002)