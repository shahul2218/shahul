import { useForm, ValidationError } from "@formspree/react";
import Fmodal from "./Fmodal";

const ContComp = () => {
  var btn = document.getElementById("mybtn");
  var loader = new ldLoader({ root: btn });
  btn.addEventListener("click", function () {
    loader.toggle();
  });

  const [state, handleSubmit] = useForm("mqknagyv");
  if (state.succeeded) {
    return (
      <>
        <ContComp />
        <Fmodal />
      </>
    );
  }
  return (
    <div className="w-full md:h-[768px] h-screen min-h-[700px] grid place-items-center">
      <div className="w-11/12 sm:w-9/12 md:w-3/4 lg:w-3/5 xl:w-2/4 mx-auto">
        <h2 className="Page-Title">contact form</h2>
        <p className="Page-Subitle">feel free to contact me &#128578;</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-between -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="Form-label" htmlFor="full_name">
                Full Name
              </label>
              <input
                id="full_name"
                type="text"
                name="full Name"
                className="Form-input"
              />
              <ValidationError
                prefix="Full_Name"
                field="full_name"
                errors={state.errors}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="Form-label" htmlFor="email">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="Form-input"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="Form-label" htmlFor="phone_number">
                Phone Number
              </label>
              <input
                id="phone_number"
                type="tel"
                name="Phone Number"
                className="Form-input"
              />
              <ValidationError
                prefix="Phone_Number"
                field="phone_number"
                errors={state.errors}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="Form-label" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="Subject"
                className="Form-input"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="w-full px-3">
              <label className="Form-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#283C63]"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div
              id="mybtn"
              className="w-full px-3 flex items-center justify-center my-2">
              <button
                type="submit"
                className="btn bg-purple-600 px-4 py-2 rounded-md w-full uppercase text-lg sm:text-xl text-white"
                disabled={state.submitting}>
                Submit
              </button>
              <div class="ld ld-spin ld-ring"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContComp;
