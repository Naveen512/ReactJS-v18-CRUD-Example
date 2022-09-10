import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
import AddFruit from "./pages/AddFruit";
import AllFruits from "./pages/AllFruits";
import UpdateFruit from "./pages/UpdateFruit";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllFruits />}></Route>
        <Route path="/add-fruit" element={<AddFruit />}></Route>
        <Route path="/update-fruit/:id" element={<UpdateFruit />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
