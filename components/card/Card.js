/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Mark from "../../assets/img/mark.png"
import Image from "next/image";

const Card = ({imgsrc}) => {
  return (
    <Link href={"/"}>
      <div class=" relative">
        <img
          src={imgsrc}
          alt='"SUMMER ESCAPISM" LEMON SHORT'
          class="w-full h-full aspect-[4/5] object-cover"
        />
        <span class="absolute top-8 left-0 p-1 bg-red-700 text-xs text-white  ">
          30%
        </span>
        <Image
          class="absolute top-0 right-0  w-14 sm:w-16 drop-shadow-md"
          src={Mark}
        />
        <p class="absolute bottom-0 w-full text-center py-1 bg-red-600 text-white bg-opacity-70 left-0 drop-shadow-md">
          Voucher giảm 15% khi mua theo set
        </p>
      </div>
    </Link>
  );
};

export default Card;
