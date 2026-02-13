import { useState } from "react";
import "./Library.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "S. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (!title || !author) return;

    setBooks([
      ...books,
      { id: Date.now(), title, author }
    ]);

    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <div className="card">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="form">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button onClick={addBook}>Add Book</button>
        </div>
      </div>

      {filteredBooks.map((book) => (
        <div className="book-card" key={book.id}>
          <div>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>
          <button className="remove" onClick={() => removeBook(book.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
