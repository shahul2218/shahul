import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-[14px] flex justify-center items-center py-4 bg-[#222831] text-[#FBE8D3]/60 hover:underline capitalize">
      Copyright
      <span className="px-1">
        <FaRegCopyright size="14" />
      </span>
      {new Date().getFullYear()} all rights reserved.
    </div>
  );
};

export default Footer;
