import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListing />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
