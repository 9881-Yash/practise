import { useState } from "react";
import "./UserStyle.css";

export default function UserForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    remarks: "",
  });

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      department: "",
      phone: "",
      city: "",
      state: "",
      country: "",
      remarks: "",
    });

    alert("Form submitted successfully!");
  };

  return (
    <div className="form">
      <div className="border">
        <form onSubmit={handleSubmit}>
          <div className="text-name">
            <div className="form-label">Name :</div>
            <input
              id="name"
              value={formData.name}
              placeholder="Enter your name here"
            />
          </div>

          <div className="text-department">
            <div className="form-label">Department :</div>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter your department"
              required
            />
          </div>

          <div className="text-phone">
            <div className="form-label">Phone Number :</div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="text-city">
            <div className="form-label">City :</div>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              required
            />
          </div>

          <div className="text-state">
            <div className="form-label">State :</div>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your state"
              required
            />
          </div>

          <div className="text-country">
            <div className="form-label">Country :</div>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your country"
              required
            />
          </div>

          <div className="text-remarks">
            <div className="form-label">Remarks :</div>
            <textarea
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Enter any remarks"
            ></textarea>
          </div>

          <button className="button-submit" style={{}}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
