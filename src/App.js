import logo from "./logo.svg";
// import "./App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddData from "./pages/AddData";
import EditData from "./pages/EditData";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/:id" element={<DetailPage />} /> */}
      <Route path="/create" element={<AddData />} />
      <Route path="/update" element={<EditData />} />
    </Routes>
  );
}

export default App;
