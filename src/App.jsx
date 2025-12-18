import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListing from "./components/JobListing";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";
import HomePage from "./pages/HomePage";
import MainLayouts from "./layouts/MainLayouts";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />

}

export default App;
