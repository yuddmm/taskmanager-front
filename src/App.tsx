import { Route, Routes } from 'react-router-dom';
import Projects from './pages/projects/projects';
import Tasks from './pages/tasks/tasks';
import Login from './pages/login/login';

function App() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
