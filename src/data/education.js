import collegeLogo from "../assets/clg.png";
import JrcollegeLogo from "../assets/jrclg.png";
import schoolLogo from "../assets/schl.png";

const educationData = [
  {
    id: 1,
    logo: collegeLogo,
    degree: "B.E. in Computer Engineering",
    institution: "D.R D.Y Patil Institute Of Technology, Pune",
    duration: "2023 – 2027",
    level: "Bachelor's",
    gradient: "from-purple-500 to-pink-500",
    website: "https://engg.dypvp.edu.in/"
  },
  {
    id: 2,
    logo: JrcollegeLogo,
    degree: "Higher Secondary Education",
    institution: "Marathwada Mitramandal Jr. College Of Science, Pune",
    duration: "2021 – 2023",
    level: "12th Grade",
    gradient: "from-blue-500 to-cyan-500",
    website: "https://mminstitutes.in/page/154/junior-college-of-science"
  },
  {
    id: 3,
    logo: schoolLogo,
    degree: "Secondary Education",
    institution: "Saint Tukaram English Medium School, Katraj, Pune",
    duration: "2010 – 2021",
    level: "10th Grade",
    gradient: "from-green-500 to-emerald-500",
    website: "https://chateschools.org/index.php"
  }
];

export default educationData;