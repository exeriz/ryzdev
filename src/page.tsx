import { Routes, Route } from "react-router";
import Home from "@/pages/Home/page";
import About from "@/pages/introduction/page";
import NotFound from "@/not-found";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/introduction" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
