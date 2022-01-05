import Link from "next/link";

const Fmodal = () => {
  return (
    <div className="bg-black/50 absolute inset-0 flex justify-center items-center">
      <div className="bg-slate-100 w-11/12 sm:w-80 rounded-md">
        <div className="flex flex-col justify-center items-center p-4">
          <h2 className="capitalize text-green-500 font-bold">
            message sent successfully
          </h2>
          <p className="capitalize font-semibold pb-8">
            will contact you shortly
          </p>
          <Link href="/">
            <a className="btn px-8 py-2 bg-slate-200 rounded-md text-black font-semibold">
              OK
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fmodal;
