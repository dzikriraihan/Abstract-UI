export default function Navbar() {
  return (
    <div className="flex justify-between bg-black py-6 px-20">
      <div className="flex items-center">
        <a href="#" className="flex items-center gap-2">
          <i className="bx bxl-graphql text-2xl bg-white py-1 px-1 rounded-md"></i>
          <p className="text-white font-semibold text-xl">Abstract | </p>
        </a>
        <a href="#" className="flex items-center text-white text-xl ml-2">
          Help Center
        </a>
      </div>
      <div className="flex text-white font-medium">
        <button className="py-2 px-2 border-2 border-white bg-slate-900 rounded-md mr-2">Submit a Request</button>
        <button className="py-2 px-4 bg-primary rounded-md hover:bg-white hover:text-black transition-colors">Sign In</button>
      </div>
    </div>
  );
}
