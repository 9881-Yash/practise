import { useState } from "react";
import "./UserStyle.css";

interface SignUpPageProps {
  setSignIn: (event: boolean) => void;
}

const SignUpPage = ({ setSignIn }: SignUpPageProps) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    remarks: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignInClick = () => {
    setSignIn(true);
  };

  return (
    <div className="signup-page">
      <div className="row">
        <div className="section-container">
          <div className="col-6 card-shadow form">
            <div className="signup-heading"> Sign up </div>
            <div className="text-name">
              <div className="form-label">Name :</div>
              <input
                className="form-label-value"
                id="name"
                value={formData.name}
                placeholder="Enter your name here"
              />
            </div>
            <div className="text-department">
              <div className="form-label">Department :</div>
              <input
                className="form-label-value"
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
                className="form-label-value"
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
                className="form-label-value"
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
                className="form-label-value"
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
                className="form-label-value"
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
                className="form-label-value"
                id="remarks"
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Enter any remarks"
              ></textarea>
            </div>
            <div className="">
              <button className="button-submit">Submit</button>
              <a href="#" onClick={handleSignInClick}>
                {" "}
                Sign In{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
