import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='bg-blue-300'>
      <div className='container mx-auto py-3 flex items-center justify-between'>
        <Link className='text-2xl font-semibold tracking-wide' to="/">React-Challenge</Link>
        <div>
            <ul className='flex gap-6'>
                <Link className='font-semibold text-lg' to="/">Home</Link>
                <Link className='font-semibold text-lg' to="/jobs">Jobs</Link>
                <Link className='font-semibold text-lg' to="/add-job">Add Job</Link>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
