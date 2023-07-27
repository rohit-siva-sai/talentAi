import Link from "next/link";


const Navbar = () => {
 
  return (
    <div className="sticky top-0 border left-0 bg-white z-50">
      <div className="flex md:flex-row flex-col items-center space-y-2 md:space-y-0 md:justify-between md:items-center md:px-48 md:py-4 py-2 shadow-md justify-center  ">
        <Link href={"/"}>
          <div className="uppercase font-semibold text-gray-700 text-2xl tracking-wider">
            turing
          </div>
        </Link>

        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          <Link href={"/employers"}>
            <div className="font-light  text-[11px] md:text-base cursor-pointer hover:underline  underline-offset-8 transition-all duration-300 decoration-blue-500 decoration-2">
              Employers
            </div>
          </Link>
          <Link href={"/training"}>
            <div className="font-light  text-[11px] md:text-base cursor-pointer hover:underline  underline-offset-8 transition-all duration-300 decoration-blue-500 decoration-2">
              Apply for Jobs
            </div>
          </Link>
          <Link href={"/hire_developers"}>
            <div className="font-light text-[11px] md:text-base cursor-pointer hover:underline  underline-offset-8 transition-all duration-300 decoration-blue-500 decoration-2">
              Hire developers
            </div>
          </Link>
          <Link href={"/advisory"}>
            <div className="font-light text-[11px] md:text-base cursor-pointer hover:underline  underline-offset-8 transition-all duration-300 decoration-blue-500 decoration-2">
              Explore services
            </div>
          </Link>
          <Link href={"/blog?category=all"}>
            <div className="font-light text-[11px] md:text-base cursor-pointer hover:underline  underline-offset-8 transition-all duration-300 decoration-blue-500 decoration-2">
              Blog
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
