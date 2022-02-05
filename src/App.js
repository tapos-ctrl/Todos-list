import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import Chart from './components/Chart/Chart';
import ShowDetail from './components/ShowDetail/ShowDetail';


function App() {
  return (
    <div className="App bg-zinc-300  mx-auto">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="showDetail:id" element={<ShowDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
