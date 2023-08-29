import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="sm:mt-[110px] mt-[100px]">
      <Image
        alt="NEW"
        className="w-full h-full sm:aspect-[18/7] object-cover aspect-[4/5]"
        src="https://dashboard.leanow.vn/upload/7-2023/1689928421231.webp"
        layout="responsive" // Set layout to "responsive"
        width={1200} // Set the width for aspect ratio calculation
        height={800}
      />
    </div>
  );
};

export default Banner;
