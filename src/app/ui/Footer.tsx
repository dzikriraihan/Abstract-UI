export default function Footer() {
  return (
    <div className="bg-black text-white px-20 py-10">
      <div className="grid grid-cols-5 font-medium">
        {/* col 1 */}
        <div className="flex flex-col">
          <h5 className="text-xl font-bold mb-5">Abstract</h5>
          <a href="#" className="hover:text-primary transition-colors">Start Trial</a>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="hover:text-primary transition-colors">Download</a>
        </div>
        {/* col 2 */}
        <div className="flex flex-col">
          <h5 className="text-xl font-bold mb-5">Resources</h5>
          <a href="#" className="hover:text-primary transition-colors">Blog</a>
          <a href="#" className="hover:text-primary transition-colors">Help Center</a>
          <a href="#" className="hover:text-primary transition-colors">Release Notes</a>
          <a href="#" className="hover:text-primary transition-colors">Status</a>
        </div>
        {/* col 3 */}
        <div className="flex flex-col">
          <h5 className="text-xl font-bold mb-5">Community</h5>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          <a href="#" className="hover:text-primary transition-colors">Dribble</a>
          <a href="#" className="hover:text-primary transition-colors">Podcast</a>
        </div>
        <div className="grid grid-rows-2">
          {/* col 4 */}
          <div className="flex flex-col">
            <h5 className="text-xl font-bold mb-5">Company</h5>
            <a href="#" className="hover:text-primary transition-colors">About Us</a>
            <a href="#" className="hover:text-primary transition-colors">Careers</a>
            <a href="#" className="hover:text-primary transition-colors">Legal</a>
          </div>
          <div className="mt-5">
            <h6 className="font-bold">Contact Us</h6>
            <a href="#" className="hover:text-primary transition-colors">info@abstract.com</a>
          </div>
        </div>
        <div className="my-auto text-xl">
          <i className="bx bxl-graphql text-2xl bg-white text-black py-1 px-1 rounded-md mb-4"></i>
          <p><span>&copy;</span> Copyright 2025</p>
          <p>Abstarct Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
