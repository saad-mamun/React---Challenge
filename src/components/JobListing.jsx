import jobs from "../jobs.json";
import JobListingSingle from "./JobListingSingle";

const JobListing = ({
  bg = "bg-indigo-100",
  aline = "text-center",
  fs = "font-bold",
  textsize = "text-[30px]",
  py = "py-3",
}) => {
  const recentJobs = jobs.slice(0, 3);

  return (
    <div>
      <h2 className={` ${bg} ${aline} ${fs} ${textsize} ${py}`}>Browse Jobs</h2>
      <div className="container mx-auto py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
            <JobListingSingle key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
