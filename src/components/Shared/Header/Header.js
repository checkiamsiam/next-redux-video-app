import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/lws.svg";
import search from "../../../assets/search.svg";

function Header() {
  return (
    <>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link href="/">
            <Image className="w-24 "  src={logo} alt="logo image" />
          </Link>

          <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            <form>
              <input className="outline-none border-none mr-2" type="search" name="search" placeholder="Search" />
            </form>
            <Image className="inline h-4 cursor-pointer" src={search} alt="Search" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
