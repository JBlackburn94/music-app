import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className="font-semibold bg-gray-900 m-4 p-4 flex flex-col w-1/4 rounded-md text-gray-400">
      <button className="flex flex-row my-2 justify-start items-center text-xl active:text-white hover:text-white duration-200">
        <Link href="" className="flex items-center">
          <GoHomeFill className="mx-2" />
          <p>Home</p>
        </Link>
      </button>
      <button className="flex flex-row my-2 justify-start items-center text-xl active:text-white hover:text-white duration-200">
        <Link href="" className="flex items-center">
          <CiSearch className="mx-2" />
          <p>Search</p>
        </Link>
      </button>
    </div>
  );
}
