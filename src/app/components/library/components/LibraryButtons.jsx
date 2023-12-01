export default function LibraryButtons() {
  const buttonLinks = [
    {
      id: "1",
      title: "Playlists",
      link: "",
    },
    {
      id: "2",
      title: "Podcasts & Shows",
      link: "",
    },
  ];

  return (
    <div className="mt-4">
      <button>
        {buttonLinks.map(({ id, title, link }) => (
          <a
            href={link}
            key={id}
            className="mr-2 bg-gray-700 rounded-lg w-auto p-1 hover:bg-gray-600 duration-200"
          >
            {title}
          </a>
        ))}
      </button>
    </div>
  );
}
