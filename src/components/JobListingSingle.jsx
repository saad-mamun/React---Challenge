import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const JobListingSingle = ({ job }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description

  if(!showFullDescription){
    description = description.substring(0, 90) + "..."
  }

  return (
    <div >
      <div className="p-6 shadow-xl rounded-2xl">
        <div className="text-[13px]">{job.type}</div>
        <h1 className="font-bold py-2">{job.title}</h1>
        <p className="text-[15px] text-gray-600 py-1">{description}</p>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5"
        >
          {showFullDescription ? "Less" : "More..."}
        </button>
        <p className="text-indigo-500 font-semibold py-2">{job.salary}</p>
        <hr className="text-gray-200" />
        <div className="flex items-start justify-between pt-5">
          <div className="text-orange-600 text-[14px]">
            <FaLocationDot className="inline text-lg"/>
            {job.location}
            </div>
          <div className="py-2">
            <Link
              to={`/job/${job.id}`}
              className="bg-indigo-500 hover:bg-indigo-500 text-white px-6 py-2 rounded-md text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingSingle;
