const http=require("http");
const server = http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.write("Home page 🏠");
    }
    else if(req.url==="/about")
    {
        res.write("About page📃");
    }
    else if(req.url==="/contact")
    {
        res.write("Contact page📞");
    }
    else
    {
        res.write("Page not Found❌");
    }
    res.end();
});
server.listen(3000,()=>{
    console.log("Server Running on port 3000 successfully");
});