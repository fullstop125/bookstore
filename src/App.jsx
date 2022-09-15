import { Route, Routes } from 'react-router-dom';
import BookPage from './pages/BookPage';
import CategoryPage from './pages/CategoryPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
