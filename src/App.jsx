import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Products from "./screens/Products";
import NotFound from "./screens/NotFound";
import SingleProduct1 from "./screens/SingleProduct1";
import SingleProduct2 from "./screens/SingleProduct2";
import SingleProduct3 from "./screens/SingleProduct3";
import Address from "./screens/Address";
import Payment from "./screens/Payment";
import Order from "./screens/Order";
import VideoViewer from "./components/VideoViewer";
import ReloadPrompt from "./ReloadPrompt";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/single-product-1" element={<SingleProduct1 />} />
          <Route path="/single-product-2" element={<SingleProduct2 />} />
          <Route path="/single-product-3" element={<SingleProduct3 />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order />} />
          <Route path="/app" element={<VideoViewer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ReloadPrompt />
    </div>
  );
}

export default App;
