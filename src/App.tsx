import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { CourseDetails, Home, StudentDashboard } from "./pages/index.pages";
import { Layout } from "./components/index.component";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<CourseDetails />} />
          <Route path="/students/:id" element={<StudentDashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
