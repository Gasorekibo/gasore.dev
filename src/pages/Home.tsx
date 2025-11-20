import { Link } from "react-router-dom";
export default function Home() {
  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-[#0a0a0a] text-center">
      <img
        src="./projects/project4.png" 
        alt="M.Gasore"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mb-16 border-4 border-[#2F4538]/20 shadow-2xl"
      />
      <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-white leading-none">
         <span className="text-primary">M.G</span>asore
      </h1>
      <p className="text-2xl md:text-4xl text-gray-400 mt-8 tracking-wide">
        Software Engineer & Web Developer
      </p>
      <p className="text-lg md:text-xl text-gray-500 mt-10 max-w-2xl leading-relaxed">
        Building elegant, high-performance web applications with modern technologies.
      </p>
      <Link
  to="/work"
  className="group mt-20 inline-flex items-center gap-4 text-primary text-xl font-light tracking-wider hover:text-white transition-all duration-500"
>
  <span className="border-b-4 border-primary pb-2 group-hover:border-primary/70 transition-all duration-500">
    View selected work
  </span>

  {/* Right Arrow - Smooth animated on hover */}
  <span className="transform transition-all duration-500 group-hover:translate-x-4">
    →
  </span>
</Link>
    </div>
    
  );
}