export default function Search() {
  return (
    <div className="flex flex-col items-center bg-secondary py-24">
      <h1 className="font-medium text-7xl">How can we help?</h1>

      <div className="flex items-center w-1/3 mt-8 border border-black rounded-md bg-white transition-colors hover:border-primary">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="w-full py-4 px-4 outline-none rounded-md font-medium appearance-none"
        />
        <button className="flex items-center px-4 py-2 text-black hover:text-primary transition-colors">
          <i className="bx bx-right-arrow-alt text-4xl"></i>
        </button>
      </div>
    </div>
  );
}
