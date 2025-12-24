import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
const EditPage = ({ UpdateJobSubmit }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = useLoaderData();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  const submitForm = (e) => {
    e.preventDefault();
    const UpdatedJob = {
      id,
      type,
      title,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    UpdateJobSubmit(UpdatedJob);
    toast.success("Job Updated Successfully");
    return navigate(`/jobs/${id}`);
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form action="" onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Update Job Information</h2>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                name="type"
                id="type"
                className="border rounded w-full px-3 py-2"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full px-3 py-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="border rounded w-full px-3 py-2"
                placeholder="Add any job duties,..."
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                name="salary"
                id="salary"
                className="border rounded w-full px-3 py-2"
                value={salary}
                required
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under $50k">Under $50k</option>
                <option value="$50k $60k">$50k $60k</option>
                <option value="$60k $70k">$60k $70k</option>
                <option value="$70k $80k">$70k $80k</option>
                <option value="$80k $100k">$80k $100k</option>
                <option value="$100k $120k">$100k $120k</option>
                <option value="$120k $150k">$120k $150k</option>
                <option value="$150k $190k">$150k $190k</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full px-3 py-2"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="my-4">
              <h1 className="font-semibold text-3xl">Company Info</h1>
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_name"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full px-3 py-2"
                placeholder="Company Name..."
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Company Description
              </label>
              <textarea
                rows="4"
                id="company_description"
                name="company_description"
                className="border rounded w-full px-3 py-2"
                placeholder="Company Description..."
                required
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full px-3 py-2"
                placeholder="Email Address for application"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact-phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full px-3 py-2"
                placeholder="Optional Phone for application"
                required
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <div>
              <button className="text-white font-semibold text-lg bg-indigo-600 rounded w-full px-3 py-2">
               Save Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
