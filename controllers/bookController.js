
const getAllBooks =  (req, res) => {

    if(req.query.genre){
        res.send(`All books in the genre of ${req.query.genre}`);
    }
    if(req.query.author){
        res.send(`All books by ${req.query.author}`);
    }
    if(req.query.page)
    {
        res.send(`All books on page ${req.query.page}`);
    }
    if( req.query.limit)
    {
        res.send(`All books with limit ${req.query.limit}`);
    }
    res.send("All books");
}


const getBookById = (req, res) => {
    res.send(`Book with id ${req.params.id}`);
}


const createBook = (req,res)=>
{
    res.send("Create a new book");
}


const updateBook = (req,res)=>
{
    res.send("Update the book");
}

const deleteBook = (req,res)=>
{
    res.send("Delete the book");
}
module.exports = {getAllBooks, getBookById ,createBook ,updateBook, deleteBook};


