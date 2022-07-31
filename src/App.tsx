import { Route, Routes } from 'react-router-dom';
import Projects from './pages/projects/projects';

function App() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
