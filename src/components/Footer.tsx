import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between border-t border-gray-600 py-5 max-w-screen-xl mx-auto">
      <p className="text-[16px]">Copyright©️2024-2025 Easy Simple Earn | All Right Reserved</p>
      <div className="flex items-center gap-5">
        <Link to={'/'} className="text-[16px]">Privacy Policy</Link>
        <Link to={'/'} className="text-[16px]">Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Footer;