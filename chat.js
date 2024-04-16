const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
app.use(bodyParser.urlencoded({extended:false}));
app.get('/login',(req,res,next)=>{
res.send('<html><body><form action = "/" method = "POST" id ="myForm" > Username: <input type = "text" name = "username" id = "username"><button type = "submit" id = "button"> submit </button></form> <script> const form = document.getElementById("myForm");  form.addEventListener("submit", (event) => {   event.preventDefault();const username = document.getElementById("username").value;  localStorage.setItem("Username", username); window.location.href = "/"; });  </script> </body> </html>  ')

})

app.get('/',(req,res,next)=>{

    res.send('<html><body><form action="/" method="POST" id="f">Enter message: <input type="text" id="message" name = "message"><input type="hidden" name="username" id="hiddenUsername"><button type="submit">Send</button></form><script>const form = document.getElementById("f");form.addEventListener("submit", function(event) {event.preventDefault();const username = localStorage.getItem("Username");document.getElementById("hiddenUsername").value = username;form.submit();});</script></body></html>');
 
})
app.post('/',(req,res,next)=>{
    const message = req.body.message;
    const username = req.body.username;
    const data = `"${username}": "${message}"\n`;

    fs.appendFileSync('messages.txt', data);
   
    fs.readFile('messages.txt', 'utf-8', (err, fileData) => {
        if (err) {
           
            return next(err);
        }

        
        res.send(`<html><body><h2>Messages:</h2><pre>${fileData}</pre></body></html>`);

      

})
});



app.listen(9000)

