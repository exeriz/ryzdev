import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import { LoadingSpinner } from "@/components/ui/Spinner";

const Home = lazy(() => import("@/pages/home/page"));
const About = lazy(() => import("@/pages/introduction/page"));
const NotFound = lazy(() => import("@/not-found"));

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/introduction",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner size={32} />}>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
}
