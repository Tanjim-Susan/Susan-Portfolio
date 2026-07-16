import {
  solidworks_c,
  matlab_c,
  kaggle_c,
  panda_c,
} from "../assets";
import { useNavigate } from "react-router-dom";

const certificates = [
  {
    id: "solidworks",
    image: solidworks_c,
  },
  {
    id: "matlab",
    image: matlab_c,
  },
  {
    id: "kaggle",
    image: kaggle_c,
  },
  {
    id: "panda",
    image: panda_c,
  },
];

const Certificates = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black p-10">
      <div className="fixed top-6 left-6 z-50">
  <button
    onClick={() => navigate(-1)}
    className="border border-[#4b3b8f] px-5 py-2 rounded-xl text-white hover:bg-[#4b3b8f] transition"
  >
    ← Back
  </button>
</div>
      <h1 className="text-white text-5xl text-center">
        My Certificates
      </h1>
      

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {certificates.map((certificate, index) => (
<div
  key={index}
  onClick={() => navigate(`/certificate/${certificate.id}`)}
  className="border border-[#4b3b8f] px-2 pb-2 pt-2 rounded-xl cursor-pointer"
>
  <img
    src={certificate.image}
    className="w-full"
  />
</div>
))}
      </div>
    </div>
  );
};

export default Certificates;