import { projects } from "../data/projects";
import ImageSlideshow from "../components/ImageSlideshow";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-44 pb-32 px-6 md:px-12 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl md:text-8xl font-light text-white mb-4">Latest Projects</h1>
        <p className="text-gray-600 text-lg mb-20 md:mb-32">Code / Design / Fullstack</p>

        <div className="space-y-32 md:space-y-64">
          {projects.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-widest text-gray-500 mb-6">
                  <span>2025</span>
                  {project.live && <span className="text-primary animate-pulse font-extrabold">Live</span>}
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none mb-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E8563A] transition-colors duration-500 inline-block"
                  >
                    {project.title}
                  </a>
                </h2>

                <div className="space-y-10 text-gray-400">
                  <div>
                    <h3 className="text-2xl text-white mb-3">About</h3>
                    <p className="text-lg leading-relaxed max-w-lg">{project.desc}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl text-white mb-3">Stack</h3>
                    <p className="text-lg">{project.stack}</p>
                  </div>

                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 duration-300 text-sm tracking-wider px-8 py-3 border border-primary text-white hover:bg-primary hover:text-white font-bold transition-all rounded-md"
                  >
                    View Website
                  </Link>
                </div>
              </div>

              {/* Image Slideshow — Full width on mobile, side-by-side on large screens */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  {/* Main slideshow */}
                  <div className="rounded-lg overflow-hidden shadow-2xl">
                    <ImageSlideshow images={project.images} title={project.title} />
                  </div>

                  {/* Optional small floating mockups — hidden on mobile */}
                  {project.images.length > 2 && (
                    <div className="hidden lg:block">
                      <img
                        src={project.images[1]}
                        alt=""
                        className="absolute -top-12 -left-20 w-56 rounded-lg shadow-2xl rotate-[-8deg] opacity-90"
                      />
                      <img
                        src={project.images[2]}
                        alt=""
                        className="absolute -bottom-16 -right-16 w-48 rounded-lg shadow-2xl rotate-[12deg] opacity-80"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}