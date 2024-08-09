import Image from "next/image";

import globalmap from "../public/icons/map-d.svg.svg";

const GlobalMap = ({ pop1 }) => {
  return (
    <section>
      <div
        className="w-[192px] relative lg:-mt-[129%] lg:-ml-[45%] h-[225px] bg-[white]  
        before:content-[''] before:w-3 before:h-3 before:bg-bgPrimaryRed  border-bgPrimaryRed rounded-[20px] 
        border-2 border-b-[8px]  hover:visible "
      >
        {pop1.img}
        <p className="font-[500] text-[14px] text-center">{pop1.name}</p>
        <Image
          src={globalmap}
          alt="globalmap"
          className="absolute top-[101.7%] left-[41%]"
        />
      </div>
    </section>
  );
};

export default GlobalMap;
