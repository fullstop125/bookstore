import { Route, Routes } from 'react-router-dom';
import BookPage from './pages/BookPage';
import CategoryPage from './pages/CategoryPage';
import Navbar from './components/Navbar';
import './assets/styles/App.css';

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/categories" element={<CategoryPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
