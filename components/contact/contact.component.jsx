
import { countries } from "../../store/countries";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-[url('/images/contact.webp')] bg-cover bg-center bg-no-repeat h-[120vh] flex items-center justify-center ">
      <div className="items-center  bg-blue-800 rounded-xl">
        <h1 className="text-3xl text-white text-center mt-6">Contact Us</h1>
        <h1 className="text-white text-center mt-3 text-sm">
          Our team has reached out to you. We look forward to connecting as soon
          as possible!
        </h1>
        <div className="flex justify-center items-center px-8 ">
          <div className=" h-[85vh] items-center flex justify-center">
            <img
              src="/images/contact2.jpg"
              alt=""
              className="object-cover object-right  w-[25vw] h-[79vh]"
            />
          </div>

          <form className="bg-blue-700 text-white p-6 max-w-sm w-full">
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 mb-4 border border-gray-300 rounded-xl bg-blue-700 text-white placeholder-gray-400"
            />

            <label htmlFor="email" className="block mb-2 text-sm">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email ID"
              className="w-full p-3 mb-4 border border-gray-300 rounded-xl bg-blue-700 text-white placeholder-gray-400"
            />

            <label htmlFor="mobile" className="block mb-2 text-sm">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="Enter your mobile number"
              className="w-full p-3 mb-4 border border-gray-300 rounded-xl bg-blue-700 text-white placeholder-gray-400"
            />

            <label htmlFor="destination" className="block mb-2 text-sm">
              Your preferred study destination
            </label>
            <select
              id="destination"
              className="w-full p-3 mb-4 border border-gray-300 rounded-xl bg-blue-700 text-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select Destination
              </option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>

            <label htmlFor="course" className="block mb-2 text-sm">
              Course
            </label>
            <input
              type="text"
              id="course"
              placeholder="Enter your course"
              className="w-full p-3 mb-4 border border-gray-300 rounded-xl bg-blue-700 text-white placeholder-gray-400"
            />
            <div className="flex items-center justify-center mt-1">
              <button
                type="button"
                className="flex mt-2 gap-3 items-center rounded-xl text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                <FaWhatsapp size={20} />
                Whatsapp
              </button>
              <button
                type="submit"
                className=" bg-orange-500 text-white rounded-xl h-10 px-3 font-semibold hover:bg-orange-400"
              >
                Enquire Now For Free
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
