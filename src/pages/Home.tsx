import { useNavigate } from "react-router-dom";
import heroImage from "../assets/heroImage.jpg";
const Home = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };
  return (
    <header className="min-h-[calc(100vh-200px)] min-w-[320px] h-auto p-6 gap-14 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-8 items-center justify-center ">
        <h2 className="text-3xl text-center font-extrabold mt-8 max-h-40">
          A few words about this blog platform, Ghost, and how this site was made
        </h2>
        <p className="min-w-[288px] w-[80%] text-center">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
        <div className="h-[400px] max-w-[400px]">
          <img src={heroImage} alt="" className="w-[100%] rounded-md shadow-md" />
        </div>
        <div>
          <button className=" bg-white text-black font-bold text-lg p-2.5 border-2 border-black rounded-md shadow-lg transform transition-transform duration-200 ease-in-out hover:translate-y-1  active:translate-y-0.5  hover:shadow-lg" onClick={handleSignIn}>
            começe agora
          </button>
          <hr className="w-[60%] border border-black mx-auto mt-8" />
        </div>
      </div>
    </header>
  );
};

export default Home;
