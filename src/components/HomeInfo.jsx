import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Dhruv</span>👋
      <br />A software developer from New Delhi
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked in many Projects and gained many skils along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple Projects to success over the years, Curious about the impact?"
      link="/projects"
      btnText="Visit Projects"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for dev? I'm just a few keystrokes away"
      link="/contacts"
      btnText="Let's Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
