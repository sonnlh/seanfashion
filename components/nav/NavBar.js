// components/Navbar.js (or .tsx)
import Image from "next/image";
import Cart from "../../assets/img/cart.png";
const Navbar = () => {
  return (
    <div className="w-full bg-white group box-content fixed top-0 left-0 z-50  drop-shadow-sm sm:drop-shadow-none bg-secondary border-b">
      <div>
        <div className="bg-black text-white text-center">
          <div className="slick-list">
            <div className="slick-track">
              <div className="slick-slide slick-active slick-current">
                <div className="sm:flex-row flex-col flex justify-center items-center gap-1 sm:gap-4 w-full p-2 text-[10px] sm:text-sm text-center ">
                  <p>
                    <strong>MIỄN PHÍ VẬN CHUYỂN</strong> CHO ĐƠN HÀNG TỪ
                    499.000Đ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 h-[70px] sm:h-[80px] sm:p-0 py-2 px-4  ">
        <div className="sm:pl-10 flex flex-row justify-start items-center gap-4 col-span-1 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
          </svg>
        </div>
        <div className="grid place-content-center px-2 col-span-1">
          <a href="#">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold ">
              SSSTUTTER
            </h1>
          </a>
        </div>
        <div className=" hidden lg:flex col-span-2 px-2 flex-row justify-start sm:justify-center items-center gap-16 sm:gap-8 uppercase">
          <a href="#" className="truncate  text-lg  relative  text-black ">
            ABOUT SSS
          </a>
          <a href="#" className="truncate  text-lg  relative  text-black ">
            SẢN PHẨM
          </a>
          <a href="#" className="truncate  text-lg  relative  text-black ">
            BST
          </a>
          <a href="#" className="truncate  text-lg  relative text-red-500 ">
            ƯU ĐÃI
          </a>
          <a href="#" className="truncate  text-lg  relative  text-black ">
            VOUCHER
          </a>
          <a href="#" className="truncate  text-lg  relative  text-black ">
            TUYỂN DỤNG
          </a>
        </div>
        <div className="col-span-1 px-1 sm:pr-10 flex flex-row justify-end items-center gap-4 sm:gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
          <div className="relative">
            <Image
              src={Cart}
              alt="Logo"
              className="h-8"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
