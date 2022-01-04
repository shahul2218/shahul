const Contact = () => {
  return (
    <div className="w-full h-full py-8 ">
      <div className="w-11/12 sm:w-9/12 md:w-3/4 lg:w-3/5 xl:w-2/4 mx-auto">
        <h2 className="Page-Title">contact form</h2>
        <form className="w-full">
          <div className="flex flex-wrap justify-between -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="Form-label" htmlFor="grid-full-name">
                full name
              </label>
              <input
                className="Form-input"
                id="grid-full-name"
                type="text"
                placeholder="Shahul Hameed"
                title="Name Field"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="Form-label" htmlFor="grid-email-id">
                email id
              </label>
              <input
                className="Form-input"
                id="grid-email-id"
                type="email"
                placeholder="shahul*****@gmail.com"
                title="Email ID Field"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="Form-label" htmlFor="grid-phn-no">
                phone number
              </label>
              <input
                className="Form-input"
                id="grid-phn-no"
                type="tel"
                pattern="[0-9]{10}"
                placeholder="77804****1"
                title="Mobile Number Field"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="Form-label" htmlFor="grid-subject">
                Subject
              </label>
              <input
                className="Form-input"
                id="grid-subject"
                type="text"
                placeholder="I have a project"
                title="Subject Field"
              />
            </div>
            <div className="w-full px-3">
              <label className="Form-label" htmlFor="grid-password">
                Your Message
              </label>
              <textarea
                rows="5"
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#283C63]"
                placeholder="Enter Your Message"
                title="Message Field"></textarea>
            </div>
            <div className="w-full px-3 flex items-center justify-center my-2">
              <button
                type="submit"
                className="btn bg-purple-600 px-4 py-2 rounded-md w-full uppercase text-lg sm:text-xl text-white"
                title="Submit Button">
                submit form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
