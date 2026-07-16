import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../constants";

const ProjectViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  return (
    <div className="min-h-screen bg-primary p-10">

  <div className="mb-6">
    <button
      onClick={() => navigate(-1)}
      className="border border-[#4b3b8f] px-5 py-2 rounded-xl text-white hover:bg-[#4b3b8f] transition"
    >
      ← Back
    </button>
  </div>
      <h1 className="text-white text-4xl mb-8">
        {project.name}
      </h1>

     <video
  src={project.file}
  controls
  autoPlay
  className="w-full rounded-2xl"
/>
    </div>
  );
};

export default ProjectViewer;