import { CiSearch } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import Image from "next/image";
import testArtwork from "/public/img_0955.webp";

export default function Library() {
  const artistDetails = [
    {
      id: "1",
      album: "Happiness",
      artist: "Beauty School",
      image: testArtwork,
    },
    {
      id: "2",
      album: "No Hope",
      artist: "Your Misery",
      image: testArtwork,
    },
    {
      id: "4",
      album: "When I Am Not",
      artist: "Your Misery",
      image: testArtwork,
    },
  ];

  return (
    <section>
      <div className="mt-4 flex justify-between text-gray-400">
        <CiSearch className="text-xl hover:text-white duration-200" />
        <span className="hover:text-white duration-200 flex items-center">
          <p>Recents</p>
          <FaList className="ml-2" />
        </span>
      </div>

      {artistDetails.map(({ id, album, artist, image }) => (
        <div key={id} className="flex justify-start items-center my-4">
          <Image src={image} alt="Test artwork" className="w-1/4 h-auto" />
          <span className="mx-2">
            <p className="text-xl">{album}</p>
            <p className="text-gray-500 text-sm">{artist}</p>
          </span>
        </div>
      ))}
    </section>
  );
}
