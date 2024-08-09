import React, { useState } from "react";
import Image from "next/image";
import contactinformation from "../public/logos/contact-information.svg";
import Success from "../public/icons/check.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function Form() {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Phoneno: "",
    Textarea: "",
  });
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    emailError: "",
    phoneno: "",
    phoneNumberError: "",
    textarea: "",
    selectedSubject: "",
    showErrorPopup: false,
  };

  const handleInputChange = (e, fieldName) => {
    const { name, value } = e.target;

    // Your first setState logic
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Your second setState logic
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const [formState, setFormState] = useState(initialState);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formState.email)) {
      setFormState((prevState) => ({
        ...prevState,
        emailError: "Please enter a valid email address",
      }));
      return false;
    }
    setFormState((prevState) => ({
      ...prevState,
      emailError: "",
    }));
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const phoneNumber = `+${phone}`;
    const data = {
      Firstname: formState.firstname,
      Lastname: formState.lastname,
      Emailid: formState.email,
      PhoneNumber: phoneNumber,
      TextArea: formState.textarea,
      Subject: formState.selectedSubject,
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/xs00ahlc39acb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setPhone("+91");
        console.log("Form submitted successfully!");
        setFormState(initialState); // Reset form state to initial values
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      } else {
        console.error("Error submitting form");
        setFormState((prevState) => ({
          ...prevState,
          showErrorPopup: true,
        }));
        setTimeout(() => {
          setFormState((prevState) => ({
            ...prevState,
            showErrorPopup: false,
          }));
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setFormState((prevState) => ({
        ...prevState,
        showErrorPopup: true,
      }));
      setTimeout(() => {
        setFormState((prevState) => ({
          ...prevState,
          showErrorPopup: false,
        }));
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };


  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="mt-16 lg:mt-[120px]" id="form">
      <div className="container m-auto w-[90%]">
        <div className="lg:bg-textprimarywhite lg:rounded-[12px] lg:shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] lg:justify-between lg:flex lg:w-[100%]">
          <div className=" bg-textDarkBlue lg:rounded-[12px] rounded-t-xl lg:my-[10px] lg:ml-2 text-center lg:w-[35%] ">
            <h3 className="text-base sm:text-lg lg:text-[28px]  xl:leading-[40px] font-semibold text-textprimarywhite pt-12">
              Accelerate Your Success <br />
              <span className="text-bgPrimaryRed">With Us</span>
            </h3>
            <div className="flex justify-center py-10 lg:pb-32 xl:pb-10 lg:h-[620px] ">
              <Image src={contactinformation} alt="contact" className="" />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-[60%]">
            <div className="rounded-b-[10px] border-textWhite lg:border-textDarkBlue border-2 p-10 sm:pl-36 lg:p-0 lg:m-0 lg:border-none lg:rounded-none">
              <div className="lg:flex lg:mt-20 lg:ml-4 ">
                <div className="lg:w-[50%] relative">
                  {/* <label className="block font-medium text-xs text-[#000000]">
                    First name
                  </label> */}
                  <input
                    type="text"
                    id="Firstname"
                    name="Firstname"
                    autoComplete="off"
                    className="w-[100%] border-b text-sm lg:text-lg focus:outline-none border-[#8D8D8D] mt-2 peer duration-200 sm:w-[80%] transition-colors"
                    // placeholder="First name"
                    required
                    // onClick={handleInputChange}
                    onChange={(e) => handleInputChange(e, "firstname")}
                    value={formState.firstname}
                  />
                  {/* <label for="firstname" className="absolute block top-1 left-0 cursor-text peer-focus:text-xs peer-focus:font-semibold peer-focus:-top-2 transition-all duration-200">First Name</label> */}
                  <label
                    htmlFor="Firstname"
                    className={`absolute top-1 lg:top-2.5 left-0.5 cursor-text transition-all duration-200 text-textBlack font-normal ${formData.Firstname
                      ? "text-xs -mt-4 text-textBlack font-semibold"
                      : ""
                      }`}
                  >
                    First Name
                  </label>
                </div>
                {/* <div className="relative mb-4">
          <input
            type="text"
            id="username"
            name="username"
            className="border-b py-1 focus:outline-none focus:border-textDarkBlue focus:border-b-2 transition-colors peer duration-500"
            onChange={handleInputChange}
          />
          <label
            htmlFor="username"
            className={`absolute top-1 left-0 cursor-text transition-all duration-500 text-textBlack font-light ${
              formData.username ? 'text-xs -top-2 text-textBlack font-semibold' : ''
            }`}
          >
            Username
          </label>
        </div> */}
                <div className="lg:ml-10 lg:w-[50%] relative mt-5 lg:mt-0">
                  {/* <label className="block font-medium text-xs text-[#000000] mt-5 lg:mt-0">
                    Last name
                  </label> */}
                  <input
                    type="text"
                    id="Lastname"
                    name="Lastname"
                    className="w-[100%] border-b text-sm lg:text-lg focus:outline-none border-[#8D8D8D] mt-2 peer duration-200 sm:w-[80%] transition-colors"
                    // placeholder="Last name"
                    // onChange={(e) =>
                    //   setFormState((prevState) => ({
                    //     ...prevState,
                    //     lastname: e.target.value,
                    //   }))
                    // }
                    onChange={(e) => handleInputChange(e, "lastname")}
                    value={formState.lastname}
                    autoComplete="off"
                    required
                  />
                  {/* <label for="lastname" className="absolute block top-1 left-0 cursor-text peer-focus:text-xs peer-focus:font-semibold peer-focus:-top-2 transition-all duration-200">Last Name</label> */}
                  <label
                    htmlFor="Lastname"
                    className={`absolute top-1 lg:top-2.5 left-0.5 cursor-text transition-all duration-200 text-textBlack font-normal ${formData.Lastname
                      ? "text-xs -mt-4 text-textBlack font-semibold"
                      : ""
                      }`}
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="lg:flex lg:mt-20 lg:ml-4">
                <div className="lg:w-[50%] relative mt-5 lg:mt-0">
                  {/* <label className="block font-medium text-xs text-[#000000] mt-5 lg:mt-0">
                    Email
                  </label> */}
                  <input
                    type="Email"
                    id="Email"
                    name="Email"
                    autoComplete="off"
                    className={`w-[100%] peer text-sm lg:text-lg duration-200 border-b transition-colors focus:outline-none border- ${formState.emailError ? "red-500" : "#8D8D8D"
                      } border-[#8D8D8D] mt-2 sm:w-[80%]`}
                    // placeholder="example@gmail.com"
                    required
                    // onChange={(e) =>
                    //   setFormState((prevState) => ({
                    //     ...prevState,
                    //     email: e.target.value,
                    //   }))
                    // }
                    onChange={(e) => handleInputChange(e, "email")}
                    value={formState.email}
                  />
                  {/* <label for="email" className="absolute block top-1 left-0 cursor-text peer-focus:text-xs peer-focus:font-semibold peer-focus:-top-2 transition-all duration-200">Email</label> */}
                  <label
                    htmlFor="Email"
                    className={`absolute top-1 lg:top-2.5 left-0.5 cursor-text transition-all duration-200 text-textBlack font-normal ${formData.Email
                      ? "text-xs -mt-4 text-textBlack font-semibold"
                      : ""
                      }`}
                  >
                    Email
                  </label>
                  {formState.emailError && (
                    <p className="text-red-500 text-xs mt-1">
                      {formState.emailError}
                    </p>
                  )}
                </div>
                <div className="lg:ml-10 lg:w-[50%] relative mt-5 lg:mt-0 country">
                  {/* <label
                    className={`block font-medium text-xs text-[#000000] ${formState.phoneNumberError ? "red-500" : "#8D8D8D"
                      }  mt-5 lg:mt-0`}
                  >
                    Phone Number
                  </label> */}
                  <PhoneInput
                    country={"in"}
                    preferredCountries={["in"]}
                    enableSearch={true}
                    countryCodeEditable={false}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                  {/* <input
                    type="Phoneno"
                    id="Phoneno"
                    name="Phoneno"
                    className={`w-[100%] peer text-sm lg:text-lg duration-200 border-b transition-colors focus:outline-none border-[#8D8D8D] ${formState.phoneNumberError ? "red-500" : "#8D8D8D"
                      } mt-2 sm:w-[80%]`}
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    // placeholder="+0 123 456 789"
                    required
                    // onChange={(e) =>
                    //   setFormState((prevState) => ({
                    //     ...prevState,
                    //     phoneno: e.target.value,
                    //   }))
                    // }
                    onChange={(e) => handleInputChange(e, 'phoneno')}
                    value={formState.phoneno}
                  /> */}
                  {/* <label for="number" className="absolute block top-1 left-0 cursor-text peer-focus:text-xs peer-focus:font-semibold peer-focus:-top-2 transition-all duration-200">Phone number</label> */}
                  {/* <label
                    htmlFor="Phoneno"
                    className={`absolute top-1 left-0 cursor-text transition-all duration-500 text-textBlack font-normal ${formData.Phoneno ? 'text-xs -mt-4 text-textBlack font-semibold' : ''
                      }`}
                  >
                    Phone Number
                  </label> */}
                </div>
              </div>
              {/* <PhoneInput
                country={"eg"}
                enableSearch={true}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              /> */}
              <h3 className="text-sm lg:text-base font-semibold text-[#011C2A] mt-[30px] lg:mt-20 lg:ml-4">
                Subject
              </h3>
              <div className="flex-wrap md:flex mt-4 lg:ml-4">
                <div className="flex items-center mb-4">
                  <input
                    name="toclick"
                    type="radio"
                    className="sm:w-4 sm:h-4 text-[#011C2A]"
                    value="generalInquiry"
                    checked={formState.selectedSubject === "generalInquiry"}
                    onChange={() =>
                      setFormState((prevState) => ({
                        ...prevState,
                        selectedSubject: "generalInquiry",
                      }))
                    }
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-[8px] text-[12px] lg:text-[16px] font-medium lg:font-normal"
                  >
                    General Inquiry
                  </label>
                </div>

                <div className="flex items-center mb-4 lg:ml-2 sm:ml-5">
                  <input
                    name="toclick"
                    type="radio"
                    className="sm:w-4 sm:h-4 text-[#011C2A]"
                    value="SalesInquiry"
                    checked={formState.selectedSubject === "SalesInquiry"}
                    onChange={() =>
                      setFormState((prevState) => ({
                        ...prevState,
                        selectedSubject: "SalesInquiry",
                      }))
                    }
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="focus:ring-blue-500 ml-[8px] text-[12px] lg:text-[16px] font-medium lg:font-normal"
                  >
                    Sales Inquiry
                  </label>
                </div>

                {/* <div className="flex items-center mb-4 lg:ml-2 sm:ml-5">
                  <input
                    name="toclick"
                    type="radio"
                    className="sm:w-4 sm:h-4 text-[#011C2A]"
                    value="careerInquiry"
                    checked={formState.selectedSubject === "careerInquiry"}
                    onChange={() =>
                      setFormState((prevState) => ({
                        ...prevState,
                        selectedSubject: "careerInquiry",
                      }))
                    }
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="focus:ring-blue-500 ml-[8px] text-[12px] lg:text-[16px] font-medium lg:font-normal"
                  >
                    Career Inquiry
                  </label>
                </div> */}
              </div>

              <div className="mt-5 lg:mt-14 lg:ml-4 relative">
                {/* <label
                  htmlFor="message"
                  className="text-xs font-medium text-[#000000]"
                >
                  Message
                </label>{" "} */}
                <textarea
                  name="Textarea"
                  autoComplete="off"
                  id="Textarea"
                  className="w-[95%] h-8 text-sm lg:text-lg border-b border-[#8D8D8D] peer duration-200 outline-none mt-2"
                  // placeholder="Enter your message"
                  // onChange={(e) =>
                  //   setFormState((prevState) => ({
                  //     ...prevState,
                  //     textarea: e.target.value,
                  //   }))
                  // }
                  onChange={(e) => handleInputChange(e, "textarea")}
                  value={formState.textarea}
                ></textarea>
                {/* <label for="message" className="absolute block top-1 left-0 cursor-text peer-focus:text-xs peer-focus:font-semibold peer-focus:-top-2 transition-all duration-200">Enter your message</label> */}
                <label
                  htmlFor="Textarea"
                  className={`absolute top-2.5 left-0.5 cursor-text transition-all duration-200 text-textBlack font-normal ${formData.Textarea
                    ? "text-xs -mt-4 text-textBlack font-semibold"
                    : ""
                    }`}
                >
                  Enter your message
                </label>
              </div>
              {isLoading && (
                // Loader
                <div className="loader"></div>
              )}
              <div className="flex justify-center  lg:float-right">
                <button
                  type="submit"
  disabled={isLoading}
                  className="text-textprimarywhite bg-textDarkBlue font-medium rounded-md lg:text-[18px] text-[12px] lg:px-20 lg:py-6 mt-[45px] lg:mr-20 px-[20px] py-[10px]"
                >
                  Send Message
                </button>
                {showPopup && (
                  <div className="w-full h-screen bg-[rgba(0,0,0,.3)] fixed left-0 top-0 z-50 flex justify-center items-center">
                    <div className=" bg-[#fff] p-8 rounded-md text-[15px] flex justify-center items-center w-[40%]">
                      <Image
                        src={Success}
                        alt="Success Image"
                        className="w-[30px] h-[30px] mr-5 "
                      ></Image>
                      <p>Form submitted successfully!</p>
                    </div>
                  </div>
                )}

                {formState.showErrorPopup && (
                  <div className="w-full h-screen bg-[rgba(0,0,0,.3)] fixed left-0 top-0 z-50 flex justify-center items-center">
                    <div className=" bg-[#fff] p-8 rounded-md text-[15px] flex justify-center items-center w-[40%]">
                      {/* <Image src={Success} alt="Success Image" className="w-[30px] h-[30px] mr-5 "></Image> */}
                      <p>Something went wrong. Try again.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
