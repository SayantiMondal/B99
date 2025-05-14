const server=require("express")
const app=server()
app.get("/home",(req,res)=>{
    res.send("<h1>This is home page</h1>")

})
app.get("/about",(req,res)=>{
    res.send("<h1>This is about Page</h1>")
})
app.get("/sayanti",(req,res)=>{
    res.send("<h2>Myself Sayanti Mondal</h2>")
})
app.listen(9002)