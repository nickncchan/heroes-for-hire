import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/heroes" element={<Heroes />} />
    </Routes>
  );
};

export default Router;
