const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const bookRouter = require('./routers/bookRouter.js');
app.use('/books', bookRouter);

app.get('/', (req, res) => {
    res.send("hello")
});





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


=======
const express=require('express');
const app=express()



app.get('/',(req,res)=>{
    res.send('Hello');
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`)
})
