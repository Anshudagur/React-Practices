import useEffect from "react";

function Button({ btnId, text, colr }) {
  const colorMap = {
    mutaedGray: "text-neutral-400",
    orange: "bg-orange-500",
    darkGray: "bg-neutral-800",
    gray: "bg-neutral-500",
  };

  return (
    <>
      <div
        className={`flex justify-center items-center w-[65px] h-[45px] m-2 text-lg text-white font-['Helvetica'] border-2 border-solid border-gray-300 rounded-[50%] ${colorMap[colr] || "bg-gray-400"}`}
        id={btnId}
        onClick={() => {}}
      >
        {text}
      </div>
    </>
  );
}

export default Button;
