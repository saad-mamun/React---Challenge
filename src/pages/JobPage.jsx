import { useParams, useLoaderData, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();
  return (
    <div className="py-5 md:py-10 px-4 md:px-20 ">
      <div className="p-20">
        <Link
          to="/jobs"
          className="bg-blue-500 hover:bg-blue-700 rounded-t-lg hover:rounded-t-none transition duration-300 delay-200 hover:rounded-b-lg px-5 py-2 text-white font-bold"
        >
          <FaArrowLeft className="inline mr-3" /> Back To Job
        </Link>
      </div>
      <div className="text-start space-y-5">
        <h1 className="font-bold text-3xl ">{job.title}</h1>
        <h3 className="font-semibold text-lg text-gray-900">{job.type}</h3>
        <p className="font-semibold text-sm text-gray-600">{job.description}</p>
        <p className="text-green-600 font-semibold text-2xl">{job.salary}</p>
        <p className="text-yellow-700 font-semibold">{job.location}</p>
      </div>

      <div className="py-5">
        <hr />
        <h1 className="text-lg font-semibold text-lime-600">About Company</h1>
      </div>

      <div className="text-end space-y-3">
        <h1 className="text-blue-600 font-semibold text-2xl">
          {job.company.name}
        </h1>
        <p className="font-semibold text-sm text-gray-600">
          {job.company.description}
        </p>
        <p className="font-semibold tracking-wide">
          {job.company.contactEmail}
        </p>
        <p className="underline font-medium">{job.company.contactPhone}</p>
      </div>
      <div className="py-5">
        <hr />
      </div>
      <div className="text-start space-y-5">
        <h1 className="font-bold text-2xl">Manage Job</h1>
        <div className= " flex flex-col gap-3 items-start">
          <button>
            <Link
              className="bg-blue-600 px-10 py-2 text-xl font-semibold text-white rounded-full"
              to={`/jobs/edit/${id}`}
            >
              Edit Job
            </Link>
          </button>
          <button className="bg-red-600 px-10 py-2 text-xl font-semibold text-white rounded-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};


// individual data show korbe id er madhome
const jobLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
