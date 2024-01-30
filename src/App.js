import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import BookRoutes from "./BookRoutes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        {/*<Route  path="/books" element={<BookList/>} />
        <Route  path="/books/:id" element={<Book />} />
        <Route  path="/books/new" element={<NewBook />} />*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
