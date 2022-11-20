import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../../assets/lws.svg";
import search from "../../../assets/search.svg";
import { searchVideo } from "../../../features/videos/videoSlice";

function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (router.asPath !== "/") {
      router.push("/");
    }
    dispatch(searchVideo(text));
  };
  return (
    <>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link href="/">
            <Image className="w-24 " src={logo} alt="logo image" />
          </Link>

          <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            <form onSubmit={handleSearch}>
              <input
                onChange={(e) => setText(e.target.value)}
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
              />
            </form>
            <Image className="inline h-4 cursor-pointer" src={search} alt="Search" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
