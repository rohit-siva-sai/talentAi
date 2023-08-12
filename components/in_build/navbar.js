import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 border left-0 bg-white z-50">
      <div className="flex md:flex-row flex-row items-center justify-between px-4 space-y-0 md:space-y-0 md:justify-between md:items-center md:px-48 md:py-4 py-2 shadow-md   ">
        <Link href={"/"}>
          <div className=" font-semibold text-blue-500 text-2xl tracking-wider">
            in.build
          </div>
        </Link>

        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          <Link href={"/blog?category=all"}>
            <div className="font-light  text-[13px] md:text-base cursor-pointer hover:underline  underline-offset-8 transition-all duration-300 decoration-blue-500 decoration-2">
              Blog
            </div>
          </Link>

          <Link href={"/"}>
            <div
              className="px-8 font-semibold cursor-pointer w-fit text-white  hover:opacity-90 bg-blue-500 rounded-md
             py-2 text-sm"
            >
              Get Started
            </div>
          </Link>
          {/* <Link href={"/login"}>
                <div className='font-light text-[11px] md:text-base cursor-pointer hover:underline  underline-offset-8 transition-all duration-300 decoration-blue-500 decoration-2' >Login</div>
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
