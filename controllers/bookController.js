
const getAllBooks =  (req, res) => {

    
  const { genre, author, page = 1, limit = 10 } = req.query;
  let filteredBooks = books;

  if (genre) filteredBooks = filteredBooks.filter(book => book.genre === genre);
  if (author) filteredBooks = filteredBooks.filter(book => book.author === author);

  const totalBooks = filteredBooks.length;
  const totalPages = Math.ceil(totalBooks / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  res.json({
    current_page: parseInt(page),
    total_books: totalBooks,
    total_pages: totalPages,
    next_page: page < totalPages ? `/books?page=${parseInt(page) + 1}&limit=${limit} : null`,
    previous_page: page > 1 ? `/books?page=${page - 1}&limit=${limit} : null`,
    books: paginatedBooks,
  });
}


const getBookById = (req, res) => {

  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);}


const createBook = (req,res)=>
{
  const { title, author, genre, publication_date, price } = req.body;
  const book = { id: currentId++, title, author, genre, publication_date, price };
  books.push(book);
  res.json({ message: 'Book added successfully', book });
}


const updateBook = (req,res)=>
{
  
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author, genre, publication_date, price } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;
  if (genre) book.genre = genre;
  if (publication_date) book.publication_date = publication_date;
  if (price) book.price = price;

  res.json({ message: 'Book updated successfully', book });
}

const deleteBook = (req,res)=>
{
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  books = books.filter(b => b.id !== parseInt(req.params.id));
  res.json({ message: 'Book deleted successfully' });
}
module.exports = {getAllBooks, getBookById ,createBook ,updateBook, deleteBook};


