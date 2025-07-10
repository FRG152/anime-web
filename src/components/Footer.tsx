import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-5">
      <hr className="mt-15" />
      <div className="flex items-center justify-between h-[150px]">
        <ul className="flex items-center gap-5">
          <li className="text-white">
            <Link href={"/"} className="navbar__logo">
              AMIVERS
            </Link>
          </li>
          <li className="text-white">Terms & Privacy</li>
          <li className="text-white">Contacts</li>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
