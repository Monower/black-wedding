
import { useState } from "react";
import Menu from "./Menu";

const Mobilemenu = () => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <button onClick={() => setVisible(!visible)} className="border border-white p-1 rounded-md">
          <svg
            className="w-6 h-6 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
          >
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
        </button>
        <div
          className={`fixed left-0 z-10 bg-white rounded-md w-full p-4 transition-all duration-700 shadow-2xl shadow-brandBlack ${
            visible ? "top-12 " : "-top-96 "
          }`}
        >
          <Menu />
        </div>
      </>
    );
};

export default Mobilemenu;