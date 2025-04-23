import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Investments from "./pages/Investments";

export default function MyApp(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investments" element={<Investments />} />
        </Routes>
    );
}