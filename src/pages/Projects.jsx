import { Link, useNavigate } from "react-router-dom";
import { projects } from "../constants";
import { useEffect } from "react";
const Projects = () => {
    const navigate = useNavigate();
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="min-h-screen bg-primary p-10">
        <div className="fixed top-6 left-6 z-50">
<button
  onClick={() => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }}
  className="border border-[#4b3b8f] px-5 py-2 rounded-xl text-white hover:bg-[#4b3b8f] transition"
>
  ← Back
</button>
</div>
      <h1 className="text-white text-5xl font-bold text-center">
        My Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {projects.map((project) => (
          <Link
  key={project.id}
  to={`/project/${project.id}`}
>
            <div className="bg-tertiary p-4 rounded-2xl cursor-pointer h-[380px]">
<div className="h-[280px] rounded-xl overflow-hidden">
  <img
    src={project.thumbnail || "/works/default.jpeg"}
    alt={project.name}
    className="w-full h-full object-cover"
  />
</div>

              <div className="h-[60px] flex items-center justify-center">
  <h2 className="text-white text-center text-xl">
    {project.name}
  </h2>
</div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;