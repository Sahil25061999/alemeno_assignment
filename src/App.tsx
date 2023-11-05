import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/index.pages";
import { Layout } from "./components/index.component";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
