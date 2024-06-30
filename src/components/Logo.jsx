import { useState } from "react";
import { Link } from "react-router-dom";



const Logo = ({size}) => {
    const [ fill, setFill] = useState('#e48b70')

    return (
    <Link to="/" className="flex gap-1 items-center justify-center transition duration-300">
      <span onMouseMove={() => setFill('#584294')} onMouseLeave={() => setFill('#e48b70')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={fill}
          viewBox="0 0 256 256"
        >
          <path d="M216,160l-56,56V160Z" opacity="0.2"></path>
          <path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z"></path>
        </svg>
      </span>
      <h2 className="text-2xl font-bold" >MiniBlog</h2>
    </Link>
  );
};

export default Logo;
