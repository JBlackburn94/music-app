import { BiLibrary } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

export default function LibraryNav() {
  return (
    <div className="font-semibold flex flex-row text-gray-400 justify-between text-xl">
      <span className="flex justify-start items-center hover:text-white duration-200 active:text-white">
        <BiLibrary className="mx-2" />
        <p>Your Library</p>
      </span>
      <span className="flex items-center">
        <IoIosAdd className="text-3xl hover:text-white duration-200" />
        <FaArrowRight className="hover:text-white duration-200" />
      </span>
    </div>
  );
}
