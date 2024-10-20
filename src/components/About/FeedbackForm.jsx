import { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here (e.g., API call or validation)
  };

  return (
    <div className=" flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feedback Form */}
        <form
          className="w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              required
            />
          </div>

          <div className="mb-4 flex space-x-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight"
              required
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              id="message"
              placeholder="Questions/Comments"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-32"
              required
            />
          </div>

          {/* Centered Submit Button */}
          <div className="text-center">
          <button
            type="submit"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          </div>
        </form>

        {/* Company Info */}
        <div className="text-gray-700">
          <h2 className="font-bold text-2xl mb-4">BidWheels Auto Trading (PVT) LTD - Head Office</h2>
          <p>No.58, Makola South, Makola, Sri Lanka.</p>
          <p>📞 0112 906717, 0777 273858</p>
          <p>📧 info@biddwheels.com</p>

          <h2 className="font-bold text-2xl mt-6 mb-4">BidWheels Auto Trading (PVT) LTD - Branch</h2>
          <p>314, A&B, Havelock Road, Colombo 05</p>
          <p>📞 0777 273850, 0112 503026</p>
        </div>
      </div>
    
    </div>
  );
};

export default FeedbackForm;
