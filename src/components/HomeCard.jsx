import { Link } from "react-router-dom";
import Card from "./Card";
const HomeCard = () => {
  return (
    <div>
      <div className="container mx-auto
      py-5 grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-3/5">
     
          <div className="bg-lime-200 rounded-xl p-4 space-y-3">
            <h1 className="font-semibold text-2xl">For Developer</h1>
            <p className="font-semibold ">
              Browser our React Jobs and start your career today
            </p>
            <div className="py-2">
              <Link
                className="bg-black px-3 py-2 rounded-lg text-white cursor-pointer"
                to="/jobs"
              >
                Browser Jobs
              </Link>
            </div>
          </div>
        
       
          <div className="bg-indigo-100 rounded-xl p-4 space-y-3">
            <h1 className="font-semibold text-2xl">For Employers</h1>
            <p className="font-semibold ">
              List your job to find the perfect developer for the role
            </p>
            <div className="py-2">
              <Link
                className="bg-indigo-500 px-3 py-2 rounded-lg text-white cursor-pointer"
                to="/add-job"
              >
                Add Job
              </Link>
            </div>
          </div>
       {/* <Card>
        
       </Card> */}
      </div>
    </div>
  );
};

export default HomeCard;
