import {
  mobile,
  backend,
  creator,
  web,
  blender,
  ansys,
  c,
  cad,
  exel,
  powerpoint,
  word,
  solidworks,
  matlab,
  kaggle,
  solidworks_c,
  matlab_c,
  kaggle_c,
  panda_c,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mechanical Designer",
    icon: web,
  },
  {
    title: "Simulation Engineer",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "Concept Designer",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "ansys",
    icon: ansys,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cad",
    icon: cad,
  },
  {
    name: "solidworks",
    icon: solidworks,
  },
   {
    name: "matlab",
    icon: matlab,
  },
  {
    name: "exel",
    icon: exel,
  },
   {
    name: "powerpoint",
    icon: powerpoint,
  },
   {
    name: "word",
    icon: word,
  },
   
];

const experiences = [
  {
    id: "solidworks",
    title: "SolidWorks",
    icon: solidworks,
    certificate: solidworks_c,
    iconBg: "#383E56",
  },

  {
    id: "matlab",
    title: "MATLAB",
    icon: matlab,
    certificate: matlab_c,
    iconBg: "#383E56",
  },

  {
    id: "kaggle",
    title: "Kaggle",
    icon: kaggle,
    certificate: kaggle_c,
    iconBg: "#383E56",
  },

  {
    id: "panda",
    title: "Pandas",
    icon: kaggle,
    certificate: panda_c,
    iconBg: "#383E56",
  },
];



const projects = [
  {
    id: "drift",
    name: "Velocity",
    description: "Blender animation project",
    type: "video",
    file: "/works/drift.mp4",
    thumbnail: "/works/velocity.jpeg",
  },

  {
    id: "jungle",
    name: "Live a little",
    description: "Blender animation projec",
    type: "video",
    file: "/works/jungle.mp4",
    thumbnail: "/works/live.jpg",
  },

  {
    id: "wait",
    name: "A place called home",
    description: "3D animation showcase",
    type: "video",
    file: "/works/wait.mp4",
    thumbnail: "/works/home.jpg",
  },
  {
    id: "car",
    type: "video",
    file: "/works/car.mp4",
    thumbnail: "/works/car.jpg",
  },
   {
    id: "gear",
    type: "video",
    file: "/works/gear.mp4",
    thumbnail: "/works/gear.jpg",
  },
  {
    id: "crank",
    type: "video",
    file: "/works/crank.mp4",
    thumbnail: "/works/crank.jpg",
  },
  {
    id: "donut",
    type: "video",
    file: "/works/donut.mp4",
    thumbnail: "/works/donut.jpg",
  },
  {
    id: "gate",
    type: "video",
    file: "/works/gate.mp4",
    thumbnail: "/works/gate.jpg",
  },
  {
    id: "river",
    type: "video",
    file: "/works/river.mp4",
    thumbnail: "/works/river.jpg",
  },
  {
    id: "ruet",
    type: "video",
    file: "/works/ruet.mp4",
    thumbnail: "/works/ruet.jpg",
  },
  {
    id: "solder",
    type: "video",
    file: "/works/solder.mp4",
    thumbnail: "/works/solder.jpg",
  },
];

export { services, technologies, experiences, projects };
