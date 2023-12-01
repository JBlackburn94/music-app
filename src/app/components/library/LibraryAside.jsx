import LibraryButtons from "./components/LibraryButtons";
import LibraryNav from "./components/LibraryNav";
import Library from "./components/Library";

export default function LibraryAside() {
  return (
    <aside className="m-4 p-4 w-1/4 rounded-md bg-gray-900">
      <LibraryNav />
      <LibraryButtons />
      <Library />
    </aside>
  );
}
