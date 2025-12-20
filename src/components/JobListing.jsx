import { useEffect, useState } from "react";
import JobListingSingle from "./JobListingSingle";

const JobListing = ({
  aline = "text-center",
  fs = "font-bold",
  textsize = "text-[30px]",
  py = "py-3",
  isHome = false,
}) => {
  // const recentJobs = jobs.slice(0, 3);
  // const jobListing = isHome ? jobs.slice(0, 3) : jobs

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? // ?_limit=3 dile json 3 ta products show korbe
          "http://localhost:8000/jobs?_limit=3"
        : // sobgulo show korbe
          "http://localhost:8000/jobs";

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("eror datating ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  return (
    <div className="px-5">
      <h2 className={` ${aline} ${fs} ${textsize} ${py}`}>
        {isHome ? "Recent Jobs" : "Browse Jobs"}
      </h2>
      <div className="container mx-auto py-2">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListingSingle key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListing;
