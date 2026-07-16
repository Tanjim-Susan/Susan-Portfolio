import { useParams, useNavigate } from "react-router-dom";
import {
  solidworks_c,
  matlab_c,
  kaggle_c,
  panda_c,
} from "../assets";

const certificates = {
  solidworks: solidworks_c,
  matlab: matlab_c,
  kaggle: kaggle_c,
  panda: panda_c,
};

const CertificateViewer = () => {
  const { id } = useParams();
const navigate = useNavigate();
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

  <div className="flex justify-center items-center"></div>
      <img
        src={certificates[id]}
        className="max-w-full max-h-[90vh]"
      />
    </div>
  );
};

export default CertificateViewer;