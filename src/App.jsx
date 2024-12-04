import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { mockData } from "./assets/mockData";
import { setProducts } from "./redux/slice/productSlice";
import { useEffect, useState } from "react";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Checkout from "./pages/Checkout.jsx";
import OrderConfirmation from "./pages/OrderConfirmation";
import FilterData from "./pages/FilterData";
import ProductDetail from "./pages/ProductDetail";
import ProductCategory from "./pages/ProductCategory.jsx";

function App() {
	const dispatch = useDispatch();
	const [order, setOrder] = useState(null)

	useEffect(() => {
		dispatch(setProducts(mockData));
	}, []);

	return (
		<BrowserRouter>
			<div className="min-h-screen flex flex-col">
				<Navbar />
				<main className="flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/shop" element={<Shop />} >
							<Route path="category" element={<ProductCategory />} />
						</Route>
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout setOrder={setOrder}/>} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/order-confirmation" element={<OrderConfirmation order={order}/>} />
						<Route path="/filter-data" element={<FilterData />} />
						<Route path="/product/:productId" element={<ProductDetail />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
