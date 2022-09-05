import { Route, Routes } from "react-router-dom";
import AllTransactions from "./pages/AllTransactions";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/all-transactions" element={<AllTransactions />}></Route>
    </Routes>
  );
}

export default App;
