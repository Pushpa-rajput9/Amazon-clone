import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, color } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  carouselRow,
  row3,
  row4,
  cardRow2,
  card_images,
  row5,
  row6,
  Row7,
  row8,
} from "./image-data";
import { Scrollbars } from "react-custom-scrollbars";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  FreeMode,
  Scrollbar,
} from "swiper/modules";
import "./home.css";

import "swiper/css/bundle";

import sponsLogo from "./assets/3669161_info_outline_ic_icon.svg";

function HomePage() {
  const [width, setwidth] = useState(0);
  const rowCarousel = useRef();
  useEffect(() => {
    console.log(rowCarousel.current.scrollWidth);
    setwidth(rowCarousel.current.scrollWidth - rowCarousel.current.offsetWidth);
  }, []);
  const rateImg = [
    "https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg",
    "https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg",
    "https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg",
    "https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg",
    "https://m.media-amazon.com/images/G/31/perc/star-empty.svg",
  ];

  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/Associates/GW_PC_3000_1200._CB579438052_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/June/HMD/5299-HI---Holi-Under-499-Pc._CB579744895_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Mar/Hero/Holi/Slide6-GW_PC_Hero_3000-1200._CB579540968_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/Holi24_GW_PC_Hero_1500X600_Smartwatch._CB579571920_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/Associates/GW_skin_3000_1200._CB579438052_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/sharooq1/Gw2/5300-Kitchen---Holi-with-citi-bank-strip-Pc._CB579351157_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Mar/Hero/Holi/Slide-1-PC_3000-1200._CB579561909_.jpg",
  ];

  const [count, setCount] = useState(0);
  const [row8count, setrow8Count] = useState(0);

  const [carouselCard, setcarouselCard] = useState(0);
  function updateCard() {
    setcarouselCard((prevCount) => (prevCount + 5) % carouselRow.length);
  }
  function prevCard() {
    setcarouselCard(
      (prevCount) => (prevCount - 5 + carouselRow.length) % carouselRow.length
    );
  }

  function updateCount() {
    setCount((prevCount) => (prevCount + 1) % images.length);
  }
  function updaterow8Count() {
    setrow8Count(() => {
      row8.map((card) => {
        if (card.id == 0 && card.id < 2) {
          card.id++;
        }
      });
    });
  }

  function decCount() {
    setCount((prevCount) => (prevCount - 1 + images.length) % images.length); // Handling negative counts
  }
  function decCountrow8() {
    setrow8Count(() => {
      row8.map((card) => (card.id = 0));
    });
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [count, images.length]);

  return (
    //******************************************************************************** */

    // <div className="container  ">
    //   <Swiper
    //     className="w-full"
    //     effect={"coverflow"}
    //     grabCursor={true}
    //     centeredSlides={true}
    //     loop={true}
    //     slidesPerView={"auto"}
    //     coverflowEffect={{
    //       rotate: 0,
    //       stretch: 0,
    //       depth: 100,
    //       modifier: 2.5,
    //     }}
    //     freeMode={true}
    //     autoplay={true}
    //     pagination={{
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     }}
    //     navigation={{
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //       clickable: true,
    //     }}
    //     modules={[EffectCoverflow, Pagination, Navigation, FreeMode]}
    //     style={{
    //       width: "",
    //       paddingLeft: "200px",
    //       backgroundImage: `url(${images[0]})`,
    //     }}
    //   >
    //     {images.map((imag) => {
    //       return (
    //         <SwiperSlide
    //           key={imag}
    //           className="w-screen  "
    //           style={{
    //             height: "100%",
    //             width: "100vw",
    //             backgroundImage: `url(${imag})`,
    //           }}
    //         >
    //           <NavLink>
    //             <img
    //               src={images[count]}
    //               style={{ height: "100%", width: "1500px" }}
    //             />
    //           </NavLink>
    //         </SwiperSlide>
    //       );
    //     })}
    //     <div className="slider-controller   ">
    //       <div className="swiper-button-prev slider-arrow hover:border-2 hover:border-black hover:rounded hover:p-7 items-start "></div>
    //       <div className="swiper-button-next slider-arrow hover:border-2 hover:border-black hover:rounded hover:p-7"></div>
    //       <div className="swiper-pagination"></div>
    //     </div>
    //   </Swiper>
    // </div>

    <div className="mainn flex  flex-col gap-7">
      <div
        id="carouselExampleControls"
        className="carousel slide relative z-10"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((imag) => {
            return (
              <div key={imag} className="carousel-item active">
                <NavLink>
                  <img
                    src={images[count]}
                    className="d-block w-100"
                    alt="..."
                  />
                </NavLink>
              </div>
            );
          })}
        </div>

        <button
          className="carousel-control-prev  flex items-start pt-44 "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          onClick={decCount}
        >
          <span className="visually-hidden ">Previous</span>
          <span
            className="carousel-control-prev-icon   drop-shadow-2xl  "
            aria-hidden="true "
            style={{
              backgroundImage: `URL("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")`,
            }}
          ></span>
        </button>
        <button
          className="carousel-control-next flex items-start  pt-44 hue-rotate-15"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          onClick={updateCount}
        >
          <span
            className="carousel-control-next-icon  rounded-full drop-shadow-2xl"
            aria-hidden="true"
            style={{
              backgroundImage: `URL(
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
            )`,
            }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="cards1-row flex flex-wrap  items-start relative bottom-72 z-10 ml-5 gap-3 w-ful h h-fit">
        <div className="card1 drop-shadow-2xl  text-xs border-2 border-white bg-white h-[400px] w-1/4  p-4">
          <div className="header-card1 text-xl mb-3 font-semibold">
            <h2>
              Applications for your home | Up <br /> to 55% off
            </h2>
          </div>
          <div className="r1-card1 drop-shadow flex gap-4 mb-4">
            <div>
              <NavLink>
                <img className="mb-1" src={card_images[0]} />
                Air Conditioners
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Refrigerators"
                  src={card_images[1]}
                />
                Refrigerators
              </NavLink>
            </div>
          </div>
          <div className="r2-card1 drop-shadow flex gap-4 mb-4">
            <div>
              <NavLink>
                <img className="mb-1" src={card_images[2]} />
                Microwaves
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Refrigerators"
                  src={card_images[3]}
                />
                Washing Machines
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See more
            </a>
          </div>
        </div>
        <div className="card2 drop-shadow-2xl  text-xs border-2 border-white bg-white h-[400px] w-1/4 p-4">
          <div className="header-card2 text-xl  font-semibold   mb-6">
            <h2>Up to 60% off | Style for men</h2>
          </div>
          <div className="r1-card2 drop-shadow flex gap-4 mb-4">
            <div>
              <NavLink>
                <img className="mb-1" src={card_images[4]} />
                Clothing
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Refrigerators"
                  src={card_images[5]}
                />
                Footwear
              </NavLink>
            </div>
          </div>
          <div className="r2-card2 drop-shadow flex gap-4 mb-4 ">
            <div>
              <NavLink>
                <img className="mb-1" src={card_images[6]} />
                Watches
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Refrigerators"
                  src={card_images[7]}
                />
                Bags & Wallets
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500 mt-9">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              End of season sale
            </a>
          </div>
        </div>
        <div className="card3 drop-shadow-2xl  text-xs border-2 border-white bg-white h-[400px] w-1/4 p-4">
          <div className="header-card3 text-xl mb-4 font-semibold">
            <h2>Up to 75% off | Headphones</h2>
          </div>
          <div className="r1-card3 drop-shadow flex gap-4 mb-4">
            <div>
              <NavLink>
                <img className="mb-1" src={card_images[8]} />
                Up to 75% off | boat
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img className="mb-1" alt="" src={card_images[9]} />
                Up to 75% off | boult
              </NavLink>
            </div>
          </div>
          <div className="r2-card3 drop-shadow flex gap-4 mb-2 ">
            <div>
              <NavLink>
                <img className="mb-1" src={card_images[10]} />
                Up to 75% off | Noise
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img className="mb-1" alt="" src={card_images[11]} />
                Up to 75% off | Zebronics
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500 mt-8">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See all offers
            </a>
          </div>
        </div>
        <div className="card4 drop-shadow-2xl  text-xs w-1/5 h-[400px]  ">
          <div className="signInRequestCard pl-2 h-2/6 bg-white drop-shadow-2xl w-full  flex flex-col flex-wrap-reverse items-center justify-center   ">
            <h1 className="text-xl mb-2 font-semibold w-full">
              Sign in for your best experience
            </h1>
            <button
              type=""
              className=" h-6 w-5/6 rounded-lg  mb-3 text-[#0F1111]  bg-[#FFD814] hover:bg-yellow-500 border-[#FCD200]"
            >
              {" "}
              Sign in Securely
            </button>
          </div>
          <NavLink>
            <div className="sponsoredItemcard p-3 bg-white drop-shadow-xl w-full mt-4 hover:text-black">
              <div className="top flex w-full h-32 ">
                <div className="left flex items-center justify-center w-2/4">
                  <img src={card_images[12]} width={"35px"} />
                </div>
                <div className="right flex flex-col items-center justify-center w-2/4 gap-4">
                  <div className="flex items-start">
                    <img src={card_images[13]}></img>
                  </div>
                  <div>Sumeet stainless steel water bottle</div>
                </div>
              </div>
              <div className="bottm gap-0">
                <div className="   truncate overflow-hidden w-3/4">
                  Sumeet Stainless Steel Double Walled Vaccum Flask/Water
                  Bottle, 24 Hours Hot and Cold, 800 ml, Silver
                </div>
                <div className="rate flex gap-2 mb-0">
                  <div className="flex ">
                    {rateImg.map((rate) => {
                      return (
                        <img
                          key={rate}
                          src={rate}
                          width={"13px"}
                          height={"13px"}
                        />
                      );
                    })}
                  </div>
                  <div>4,093</div>
                </div>
                <div className="flex gap-2">
                  <div className=" bg-red-600 text-white font-bold pt-1 pr-3 pl-3">
                    61% off
                  </div>
                  <div className="text-red-600 font-semibold flex items-center">
                    Limited time deal
                  </div>
                </div>
                <div className="price flex gap-2">
                  <div className="offeredprice flex  text-red-600">
                    <div className="text-sm flex items-start">₹</div>
                    <div className="flex text-lg items-center  font-medium">
                      549
                    </div>
                    <div className="text-sm flex items-start ">00</div>
                  </div>
                  <div className="previouseprice flex gap-2 text-decoration-line-through text-lg font-medium">
                    ₹ 1,410.00
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/G/31/perc/prime-logo.svg"
                      width={"60px"}
                      height={"14px"}
                      alt="Prime"
                      className="inline-block "
                    />
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="card5 drop-shadow-2xl  text-xs border-2 border-white bg-white h-[400px] w-1/4 p-4">
          <div className="header-card2 text-xl  font-semibold   mb-2">
            <h2>Starting ₹99 | All your home improvement needs</h2>
          </div>
          <div className="r1-card2 drop-shadow flex gap-4 mb-4 hover:text-black">
            <div>
              <NavLink className=" ">
                <img src={card_images[14]} height={"150px"} width={"200px"} />
                <div> Spin mops, wipes & more</div>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img alt="Refrigerators" src={card_images[15]} />
                Bathroom hardware & accessories
              </NavLink>
            </div>
          </div>
          <div className="r2-card2 drop-shadow flex gap-4 mb-4  hover:text-black">
            <div>
              <NavLink>
                <img src={card_images[16]} />
                Hammers, screwdrivers & more
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img alt="Refrigerators" src={card_images[17]} />
                Extension boards, plugs & more
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              Explore all
            </a>
          </div>
        </div>
        <div className="card6 drop-shadow-2xl  text-xs border-2 border-white bg-white h-[400px] w-1/4 p-4">
          <div className="header-card2 text-xl  font-semibold   mb-3">
            <h2>Up to 60% off | Styles for women</h2>
          </div>
          <div className="r1-card2 drop-shadow flex gap-4 mb-4 hover:text-black">
            <div>
              <NavLink className=" ">
                <img
                  className="mb-1"
                  src={card_images[18]}
                  height={"150px"}
                  width={"200px"}
                />
                <div> Women's Clothing</div>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Refrigerators"
                  src={card_images[19]}
                />
                Footwear+Handbags
              </NavLink>
            </div>
          </div>
          <div className="r2-card2 drop-shadow flex gap-4 mb-4  hover:text-black">
            <div>
              <NavLink>
                <img className="mb-1" src={card_images[20]} />
                Watches
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Refrigerators"
                  src={card_images[21]}
                />
                Fashion jewellery
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              End of season sale
            </a>
          </div>
        </div>
        <div className="card7 drop-shadow-2xl  text-xs border-2 border-white bg-white w-1/4 h-[400px] p-4">
          <div className="header-card7 text-xl  font-semibold   mb-4">
            <h2>Revamp your home in style</h2>
          </div>
          <div className="r1-card7 drop-shadow flex gap-4 mb-4 hover:text-black">
            <div>
              <NavLink className=" ">
                <img
                  className="mb-1"
                  src={card_images[22]}
                  height={"150px"}
                  width={"200px"}
                />
                <div>Cushion covers, bedsheets & more</div>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Refrigerators"
                  src={card_images[23]}
                />
                Figurines, vases and more
              </NavLink>
            </div>
          </div>
          <div className="r2-card7 drop-shadow flex gap-4 mb-4  hover:text-black">
            <div>
              <NavLink>
                <img className="mb-1" src={card_images[24]} />
                Home storage
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Refrigerators"
                  src={card_images[25]}
                />
                Lighting solutions
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              End of season sale
            </a>
          </div>
        </div>
        <div className="card8 drop-shadow-2xl  text-xs border-2 border-white bg-white w-1/5  h-[400px] p-4">
          <div className="header-card7 text-xl  font-semibold   mb-3">
            <h2>Automotive essentials | Up to 60% off</h2>
          </div>
          <div className="r1-card7 drop-shadow flex gap-4 mb-4 h-2/6 hover:text-black">
            <div>
              <NavLink className=" ">
                <img
                  className="mb-1"
                  src={card_images[26]}
                  height={"150px"}
                  width={"200px"}
                />
                <div>Cleaning accessories</div>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Refrigerators"
                  src={card_images[27]}
                />
                Tyre &amp; rim care
              </NavLink>
            </div>
          </div>
          <div className="r2-card7 drop-shadow flex gap-4 mb-4  2/6 hover:text-black">
            <div>
              <NavLink>
                <img className="mb-1" src={card_images[28]} />
                Helmets
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Refrigerators"
                  src={card_images[29]}
                />
                Vacuum cleaner
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500 mt-10">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              End of season sale
            </a>
          </div>
        </div>
      </div>

      <div className="carouselRow-section(a) flex  flex-col justify-center overflow-hidden ml-6 mr-6   drop-shadow-2xl   border-2 border-white bg-white relative bottom-72 z-10  px-6 ">
        <div className="headline flex justify-start items-center gap-x-4 p-3">
          <h1 className="text-2xl font-bold   ">Today’s Deals</h1>
          <div className=" text-blue-500 text-sm   ">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See all deals
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className=" w-14 h-32  hover:border-gray-800 hover:border-2  bg-white  absolute z-10 left-5 bottom-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e" />
          </button>
          <motion.div
            className="carousel overflow-hidden w-full "
            ref={rowCarousel}
            whileTap={{ cursor: "grabbing" }}
          >
            <Scrollbars
              className="p-1 m-1"
              style={{ width: "100%", height: "310px", color: "black" }}
              autoHide
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              renderView={(props) => (
                <div {...props} className={carouselRow.id} />
              )}
              // onUpdate={() => {
              //   if (updateCard) {
              //     return updateCard;
              //   } else {
              //     return prevCard;
              //   }
              // }}
            >
              <motion.div
                className="inner-carousel flex  overflow-hidden gap-x-2  w-fit snap-x  "
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {carouselRow.map((card) => {
                  return (
                    <motion.div key={carouselCard} className={card.id}>
                      <div className="text-sm w-[268px] pointer-events-none ">
                        <div className="imag flex items-center justify-center bg-gray-100 p-2 relative rounded-md pointer-events-none ">
                          <img
                            alt={card.pro_details}
                            src={card.imageID}
                            className=" bg-gray-900"
                          ></img>
                        </div>
                        <div className="offer flex gap-2">
                          <div className=" bg-red-600 text-white font-bold pt-1 pr-3 pl-3 ">
                            {card.offer}
                          </div>
                          <div className="text-red-600 font-semibold flex items-center">
                            {card.limited}
                          </div>
                        </div>
                        <div className="price flex gap-2">
                          <div className="offeredprice flex  text-red-600">
                            <div className="text-sm flex items-start">
                              {card.rupeeSymbol}
                            </div>
                            <div className="flex text-sm items-center  font-medium">
                              {card.offeredPrice}
                            </div>
                          </div>
                          <div className="previouseprice text-gray-600 flex gap-2 text-decoration-line-through text-sm font-medium">
                            {card.originalPrice}
                          </div>
                        </div>
                        <div className="description mt-1 text-sm hover:text-black">
                          {card.pro_details}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Scrollbars>
          </motion.div>
          <button
            className=" w-14 h-32  hover:border-gray-800 hover:border-2  bg-white absolute z-10 right-5 top-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" />
          </button>
        </div>
      </div>
      <div className="carouselRow-section(b)-row3 flex  flex-col justify-center overflow-hidden ml-6 mr-6   drop-shadow-2xl   border-2 border-white bg-white relative bottom-72 z-10  px-6 ">
        <div className="headline flex justify-start items-center gap-x-4 p-3">
          <h1 className="text-2xl font-bold   ">
            Related to items you&apos;ve viewed
          </h1>
          <div className=" text-blue-500 text-sm   ">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See more
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className=" w-14 h-32  bg-white  hover:border-gray-800 hover:border-2  absolute z-10 left-5 bottom-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e" />
          </button>
          <motion.div
            className="carousel overflow-hidden w-full "
            ref={rowCarousel}
            whileTap={{ cursor: "grabbing" }}
          >
            <Scrollbars
              className="p-1 mb-3 touch-pan-x"
              style={{ width: "100%", height: "250px", color: "black" }}
              autoHide
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              renderView={(props) => <div {...props} className={row3.id} />}
            >
              <motion.div
                className="inner-carousel flex  overflow-hidden gap-x-2  w-fit snap-x  "
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {row3.map((card) => {
                  return (
                    <motion.NavLink key={card.id} className={card.id}>
                      <div className="text-sm w-[300px] pointer-events-none ">
                        <div className="imag flex items-center h-[200px] justify-center p-2 relative rounded-md pointer-events-none ">
                          <img
                            alt={card.alt}
                            src={card.imageID}
                            height={"200px"}
                            className=" h-[200px] w-[300px] "
                          ></img>
                        </div>
                      </div>
                    </motion.NavLink>
                  );
                })}
              </motion.div>
            </Scrollbars>
          </motion.div>
          <button
            className=" w-14 h-32  bg-white hover:border-gray-800 hover:border-2  hover:visible absolute z-10 right-5 top-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" />
          </button>
        </div>
      </div>
      <div className="carouselRow-section(c)-row4 flex  flex-col justify-center overflow-hidden ml-6 mr-6   drop-shadow-2xl   border-2 border-white bg-white relative bottom-72 z-10  px-6 ">
        <div className="headline flex justify-start items-center gap-x-4 p-3">
          <h1 className="text-2xl font-bold   ">
            Best Sellers in Home & Kitchen
          </h1>
          <div className=" text-blue-500 text-sm   ">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See more
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className=" w-14 h-32  bg-white  hover:border-gray-800 hover:border-2  absolute z-10 left-5 bottom-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e" />
          </button>
          <motion.div
            className="carousel overflow-hidden w-full "
            ref={rowCarousel}
            whileTap={{ cursor: "grabbing" }}
          >
            <Scrollbars
              className="p-1 mb-3 touch-pan-x"
              style={{ width: "100%", height: "250px", color: "black" }}
              autoHide
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              renderView={(props) => <div {...props} className={row3.id} />}
            >
              <motion.div
                className="inner-carousel flex  overflow-hidden gap-x-2  w-fit snap-x  "
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {row4.map((card) => {
                  return (
                    <motion.NavLink key={card.id} className={card.id}>
                      <div className="text-sm w-[254px] pointer-events-none ">
                        <div className="imag flex items-center h-[200px] justify-center p-2 relative rounded-md pointer-events-none ">
                          <img
                            alt={card.alt}
                            src={card.imageID}
                            height={"200px"}
                            className=" h-[200px]  "
                          ></img>
                        </div>
                      </div>
                    </motion.NavLink>
                  );
                })}
              </motion.div>
            </Scrollbars>
          </motion.div>
          <button
            className=" w-14 h-32  bg-white hover:border-gray-800 hover:border-2  hover:visible absolute z-10 right-5 top-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" />
          </button>
        </div>
      </div>
      <div className="cards2-row flex flex-wrap  items-start relative bottom-72 z-10 ml-5 gap-3 w-ful h h-fit">
        {cardRow2.map((card) => {
          return (
            <div
              key={card.id}
              className="card1 drop-shadow-2xl  text-xs border-2 border-white bg-white  w-1/4   h-[450px] p-4"
            >
              <div className="header-card1 text-xl mb-3 font-semibold">
                <h2>{card.title}</h2>
              </div>
              <div className="r1-card1 drop-shadow flex gap-4 mb-4">
                <div>
                  <NavLink>
                    <img className="mb-1" src={card.img1} />
                    <div className="truncate overflow-hidden w-[100px]">
                      {card.description1}
                    </div>
                    <div className="flex">
                      <div className="flex items-start">{card.symbol}</div>
                      <div className=" flex items-center text-lg">
                        {card.price1}
                      </div>
                      <div className="flex items-start">{card.zero}</div>
                    </div>
                  </NavLink>
                </div>
                <div>
                  <NavLink>
                    <img className="mb-1" src={card.img2} />
                    <div className="truncate overflow-hidden w-[100px]">
                      {card.description2}
                    </div>
                    <div className="flex">
                      <div className="flex items-start">{card.symbol}</div>
                      <div className=" flex items-center text-lg">
                        {card.price2}
                      </div>
                      <div className="flex items-start">{card.zero}</div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="r2-card1 drop-shadow flex gap-4 mb-4">
                <div>
                  <NavLink>
                    <img className="mb-1" src={card.img3} />
                    <div className="truncate overflow-hidden w-[100px]">
                      {card.description3}
                    </div>
                    <div className="flex">
                      <div className="flex items-start">{card.symbol}</div>
                      <div className=" flex items-center text-lg">
                        {card.price3}
                      </div>
                      <div className="flex items-start">{card.zero}</div>
                    </div>
                  </NavLink>
                </div>
                <div>
                  <NavLink>
                    <img className="mb-1" src={card.img4} />
                    <div className="truncate overflow-hidden w-[100px]">
                      {card.description4}
                    </div>
                    <div className="flex">
                      <div className="flex items-start">{card.symbol}</div>
                      <div className=" flex items-center text-lg">
                        {card.price4}
                      </div>
                      <div className="flex items-start">{card.zero}</div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="footer-card1 text-blue-500">
                <a
                  href="#"
                  className=" hover:text-red-500 hover:underline hover:decoration-solid "
                >
                  {card.footer}
                </a>
              </div>
            </div>
          );
        })}
        <div className="card2 drop-shadow-2xl  text-xs border-2 border-white bg-white  w-1/4   h-[450px] p-4 ">
          <div className="header-card1 text-xl mb-3 font-semibold">
            <h2>Under ₹499 | Pocket-friendly fashion</h2>
          </div>
          <div className="r1-card1  flex gap-x-24 mb-4 pl-5 ">
            <div>
              <NavLink>
                <img
                  className="mb-1 h-[150px] w-[70px]"
                  src="https://m.media-amazon.com/images/I/71BLkd39VKL._AC_SY170_.jpg"
                />
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1 h-[150px] w-[70px]"
                  src="https://m.media-amazon.com/images/I/611FYDb95iL._AC_SY170_.jpg"
                />
              </NavLink>
            </div>
          </div>
          <div className="r2-card1  flex gap-x-24  pl-5">
            <div>
              <NavLink>
                <img
                  className="mb-1 h-[150px] w-[70px]"
                  src="https://m.media-amazon.com/images/I/61nCJ7mqXFL._AC_SY170_.jpg"
                />
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1 h-[150px] w-[70px]"
                  src="https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY170_.jpg"
                />
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See more
            </a>
          </div>
        </div>
        <div className="card3 drop-shadow-2xl  text-xs border-2 border-white bg-white  w-1/4   h-[450px] p-4 ">
          <NavLink className="text-decoration-none text-black hover:text-black  ">
            <div className="header-card1 text-xl mb-3 font-semibold">
              <h2>Continue shopping for</h2>
            </div>
            <div className="flex justify-center items-center mb-2">
              <img src="https://m.media-amazon.com/images/I/71zFvtVuP1L._AC_SY175_.jpg" />
            </div>
            <div className=" text-truncate text-[13px] mb-1 ">
              Boldfit Water Bottles Stainless Steel Water Bottle <br />1 Litre
              Steel Water Bottles for School, Office, Home, Gym 1 Litre...
            </div>
            <div className="flex gap-2  items-center mb-2">
              <div className="flex">
                <div className="flex items-start">₹</div>
                <div className="flex items-center text-lg">349</div>
                <div className="flex items-start">00</div>
              </div>
              <div className=" text-gray-600 flex  text-sm text-decoration-line-through">
                M.R.P: ₹799.00
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="w-1/4 rounded-lg items-center p-1 flex  justify-center border-4 border-[#007185] ">
                <img
                  className="h-16"
                  src="https://m.media-amazon.com/images/I/71zFvtVuP1L._AC_SY55_.jpg"
                />
              </div>
              <div className="w-1/4 rounded-lg items-center flex justify-center border-1 border-gray-500">
                <img
                  className="h-16"
                  src="https://m.media-amazon.com/images/I/51-NKrTs99L._AC_SY55_.jpg"
                />
              </div>
              <div className="w-1/4 rounded-lg items-center flex justify-center border-1 border-gray-500">
                <img
                  className="h-16"
                  src="https://m.media-amazon.com/images/I/51nb-ZuDyIL._AC_SY55_.jpg"
                />
              </div>
              <div className="w-1/4 flex rounded-lg items-center justify-center border-1 border-gray-500">
                <img
                  className="h-16"
                  src="https://m.media-amazon.com/images/I/71XPs4whHSL._AC_SY55_.jpg"
                />
              </div>
            </div>
            <div className="footer-card1 text-blue-500 mt-4">
              <a
                href="#"
                className=" hover:text-red-500 hover:underline hover:decoration-solid "
              >
                See more
              </a>
            </div>
          </NavLink>
        </div>
        <div className="card4 drop-shadow-2xl  text-xs border-2 border-white bg-white   w-1/5   h-[450px] p-4">
          <div className="header-card1 text-xl mb-3 font-semibold">
            <h2>Min. 60% off | Save with solar lights</h2>
          </div>
          <div className="r1-card3  flex gap-x-24 mb-4">
            <div>
              <NavLink>
                <img
                  className="mb-1 h-[300px] "
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/PCCC/Pc_379_X_304-2-min._SY304_CB582865379_.jpg"
                />
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See more
            </a>
          </div>
        </div>
      </div>
      <div className="carouselRow-section(d)-row5 flex  flex-col justify-center overflow-hidden ml-6 mr-6   drop-shadow-2xl   border-2 border-white bg-white relative bottom-72 z-10  px-6 ">
        <div className="headline flex justify-start items-center gap-x-4 p-3">
          <h1 className="text-2xl font-bold   ">
            Up to 60% off | Bestselling cereals, beverages & snacks from
            emerging brands
          </h1>
          <div className=" text-blue-500 text-sm   ">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See all offers
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className=" w-14 h-32  bg-white  hover:border-gray-800 hover:border-2  absolute z-10 left-5 bottom-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e" />
          </button>
          <motion.div
            className="carousel overflow-hidden w-full "
            ref={rowCarousel}
            whileTap={{ cursor: "grabbing" }}
          >
            <Scrollbars
              className="p-1 mb-3 touch-pan-x"
              style={{ width: "100%", height: "250px", color: "black" }}
              autoHide
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              renderView={(props) => <div {...props} className={row3.id} />}
            >
              <motion.div
                className="inner-carousel flex  overflow-hidden  w-fit snap-x  "
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {row5.map((card) => {
                  return (
                    <motion.NavLink key={card.id} className={card.id}>
                      <div className="text-sm w-[200px] pointer-events-none ">
                        <div className="imag flex items-center h-[200px] justify-center  relative rounded-md pointer-events-none ">
                          <img
                            alt={card.alt}
                            src={card.imageID}
                            height={"200px"}
                            className=" h-[200px]  "
                          ></img>
                        </div>
                      </div>
                    </motion.NavLink>
                  );
                })}
              </motion.div>
            </Scrollbars>
          </motion.div>
          <button
            className=" w-14 h-32  bg-white hover:border-gray-800 hover:border-2  hover:visible absolute z-10 right-5 top-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" />
          </button>
        </div>
      </div>
      <div className="carouselRow-section(e)-row6 flex  flex-col justify-center overflow-hidden ml-6 mr-6   drop-shadow-2xl   border-2 border-white bg-white relative bottom-72 z-10  px-6 ">
        <div className="headline flex justify-start items-center gap-x-4 p-3">
          <h1 className="text-2xl font-bold   ">
            Up to 60% off | Best deals from stores near you
          </h1>
          <div className=" text-blue-500 text-sm   ">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See all offers
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className=" w-14 h-32  bg-white  hover:border-gray-800 hover:border-2  absolute z-10 left-5 bottom-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e" />
          </button>
          <motion.div
            className="carousel overflow-hidden w-full "
            ref={rowCarousel}
            whileTap={{ cursor: "grabbing" }}
          >
            <Scrollbars
              className="p-1 mb-3 touch-pan-x"
              style={{ width: "100%", height: "250px", color: "black" }}
              autoHide
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              renderView={(props) => <div {...props} className={row3.id} />}
            >
              <motion.div
                className="inner-carousel flex  overflow-hidden gap-x-2  w-fit snap-x  "
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {row6.map((card) => {
                  return (
                    <motion.NavLink key={card.id} className={card.id}>
                      <div className="text-sm w-[254px] pointer-events-none ">
                        <div className="imag flex items-center h-[200px] justify-center p-2 relative rounded-md pointer-events-none ">
                          <img
                            alt={card.alt}
                            src={card.imageID}
                            height={"200px"}
                            className=" h-[200px]  "
                          ></img>
                        </div>
                      </div>
                    </motion.NavLink>
                  );
                })}
              </motion.div>
            </Scrollbars>
          </motion.div>
          <button
            className=" w-14 h-32  bg-white hover:border-gray-800 hover:border-2  hover:visible absolute z-10 right-5 top-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center  drop-shadow-2xl">
        <div className="bg-white flex p-2">
          <div className="p-4">
            <img
              src=" https://m.media-amazon.com/images/I/61eEetcCb9L._AC_SX970_SY250_.jpg"
              alt="Vega Crux ISI Certified Flip-Up Helmet for Men and Women with Clear Visor(Black, Size:M)"
              className="min-w-0 min-h-0 w-full h-full max-w-[200px] max-h-[200px] p-1 mrc-btr-creative object-contain"
              style={{ backgroundColor: "transparent" }}
            ></img>
          </div>
          <div className="bottm gap-1 flex flex-col justify-center ">
            <div className="  text-lg  font-medium w-3/4">
              Vega Crux ISI Certified Flip-Up Helmet for Men and Women with
              Clear Visor(Black, Size:M)
            </div>
            <div className="rate flex gap-2 mb-0">
              <div className="flex ">
                {rateImg.map((rate) => {
                  return (
                    <img key={rate} src={rate} width={"13px"} height={"13px"} />
                  );
                })}
              </div>
              <div>2,6570</div>
            </div>
            <div className="flex gap-2">
              <div className=" bg-red-600 text-white font-bold pt-1 pr-3 pl-3">
                -22% off
              </div>
              <div className="text-red-600 font-semibold flex items-center">
                Limited time deal
              </div>
            </div>
            <div className="price flex gap-2">
              <div className="offeredprice flex  text-red-600">
                <div className="text-sm flex items-start">₹</div>
                <div className="flex text-lg items-center  font-medium">
                  1208
                </div>
                <div className="text-sm flex items-start ">00</div>
              </div>
              <div className="previouseprice flex gap-2 text-decoration-line-through text-lg font-medium">
                ₹ 1,550.00
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/G/31/perc/prime-logo.svg"
                  width={"60px"}
                  height={"14px"}
                  alt="Prime"
                  className="inline-block "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end  gap-1 w-3/5">
          <div> Sponsored</div>
          <img src={sponsLogo} />
        </div>
      </div>
      <div className="cards3-row flex flex-wrap  items-start relative  ml-5 gap-3 w-ful h h-fit">
        <div className="card1 drop-shadow-2xl  text-xs border-2 border-white bg-white  w-1/4   h-[450px] p-4">
          <div className="header-card1 text-xl mb-5 font-semibold">
            <h2>Flat ₹50 cashback | Fruits & vegetables | Amazon Fresh</h2>
          </div>
          <div className="r1-card1  flex gap-8 mb-4">
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Fruits"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/Nov23/PC2/1x/AllSubcat_RC_PC_1x_01._SY116_CB573024744_.jpg"
                />

                <div className="truncate overflow-hidden w-[100px]">Fruits</div>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Vegetables"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/Nov23/PC2/1x/AllSubcat_RC_PC_1x_02._SY116_CB573024744_.jpg"
                />

                <div className="truncate overflow-hidden w-[100px]">
                  Vegetables
                </div>
              </NavLink>
            </div>
          </div>
          <div className="r2-card1 flex gap-4 mb-4">
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Season’s special"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/Nov23/PC2/1x/AllSubcat_RC_PC_1x_03._SY116_CB573024744_.jpg"
                />

                <div className="truncate overflow-hidden w-[100px]">
                  Season&apos;s Special
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Visit the store"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/Nov23/PC2/1x/AllSubcat_RC_PC_1x_04._SY116_CB573024744_.jpg"
                />

                <div className="truncate overflow-hidden w-[100px]">
                  Visit the store
                </div>
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See all offers
            </a>
          </div>
        </div>

        <div className="card2 drop-shadow-2xl  text-xs border-2 border-white bg-white  w-1/5   h-[450px] p-4 ">
          <div className="header-card1 text-xl mb-4 font-semibold">
            <h2>Customers’ Most-Loved Fashion for you</h2>
          </div>
          <div className="r1-card1  flex gap-x-16 mb-4 pl-5 ">
            <div>
              <NavLink>
                <img
                  className="mb-1 h-[130px] w-[100px]"
                  alt="FUNDAY FASHION Cotton Half Sleeve Printed Oversized T-Shirt for Womens/Girls (Pack of 2) (Small, Grey &amp; Pink)"
                  src="https://m.media-amazon.com/images/I/616iBhe2roL._AC_SY145_.jpg"
                />
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1 h-[130px] w-[100px]"
                  alt="Allen Solly Men Jet Black Regular Fit Polo(AMKP317G04249_Jet Black_2XL)"
                  src="https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_SY145_.jpg"
                />
              </NavLink>
            </div>
          </div>
          <div className="r2-card1  flex gap-x-14  pl-5">
            <div>
              <NavLink>
                <img
                  className="mb-1 h-[130px] w-[100px]"
                  alt="Campus Women's Raise HNY SKL/HOLIDY Sneakers - 4UK/India 22L-129"
                  src="https://m.media-amazon.com/images/I/710UZpVTAHL._AC_SY145_.jpg"
                />
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1 h-[130px] w-[100px]"
                  alt="Fabricorn Combo of Three Plain Maroon, Black and Airforce Blue Round Neck Up and Down Cotton Tshirt for Women (Maroon, Black, Airforce Blue, XX-Large)"
                  src="https://m.media-amazon.com/images/I/61dtCfEcB+L._AC_SY145_.jpg"
                />
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See more
            </a>
          </div>
        </div>
        <div className="card3 drop-shadow-2xl  text-xs border-2 border-white bg-white  w-1/4   h-[450px] p-4">
          <div className="header-card1 text-xl mb-4 font-semibold">
            <h2>Flat ₹50 cashback | Fruits & vegetables | Amazon Fresh</h2>
          </div>
          <div className="r1-card1  flex gap-4 mb-4">
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Clothing"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-1-186-116._SY116_CB636055991_.jpg"
                />
                <div className="truncate overflow-hidden w-[100px]">
                  Clothing
                </div>

                <div className="truncate overflow-hidden w-[100px]">Fruits</div>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Backpacks"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-186-116._SY116_CB636055991_.jpg"
                />

                <div className="truncate overflow-hidden w-[100px]">
                  Backpacks
                </div>
              </NavLink>
            </div>
          </div>
          <div className="r2-card1 flex gap-4 mb-4">
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Footwear"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-186-116._SY116_CB636055991_.jpg"
                />

                <div className="truncate overflow-hidden w-[100px]">
                  Footwear
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <img
                  className="mb-1"
                  alt="Beauty"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-186-116._SY116_CB636055991_.jpg"
                />

                <div className="truncate overflow-hidden w-[100px]">
                  View all
                </div>
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See all offers
            </a>
          </div>
        </div>

        <div className="card4 drop-shadow-2xl  text-xs border-2 border-white bg-white   w-1/4   h-[450px] p-4">
          <div className="header-card1 text-xl mb-3 font-semibold">
            <h2>Playground season 3 | Watch only on miniTV</h2>
          </div>
          <div className="r1-card3  flex gap-x-24 mb-4">
            <div>
              <NavLink>
                <img
                  className="mb-1 h-[300px] "
                  alt="miniTV"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Playground/PC_CC/DeskCC-374x309_Playground-S3_V2_Without-callout._SY304_CB579798026_.jpg"
                />
              </NavLink>
            </div>
          </div>
          <div className="footer-card1 text-blue-500">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              Watch more FREE content | only on miniTV
            </a>
          </div>
        </div>
      </div>
      <div className="carouselRow-section(a) flex  flex-col justify-center overflow-hidden ml-6 mr-6   drop-shadow-2xl   border-2 border-white bg-white relative   px-6 ">
        <div className="headline flex justify-start items-center gap-x-4 p-3">
          <h1 className="text-2xl font-bold   ">
            Amazon LIVE - Watch, Chat & Shop LIVE
          </h1>
          <div className=" text-blue-500 text-sm   ">
            <a
              href="#"
              className=" hover:text-red-500 hover:underline hover:decoration-solid "
            >
              See more from Amazon Live
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            className=" w-14 h-32  hover:border-gray-800 hover:border-2  bg-white absolute z-10 left-5 bottom-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e" />
          </button>
          <motion.div
            className="carousel overflow-hidden w-full "
            ref={rowCarousel}
            whileTap={{ cursor: "grabbing" }}
          >
            <Scrollbars
              className="p-1 m-1"
              style={{ width: "100%", height: "360px", color: "black" }}
              autoHide
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              renderView={(props) => (
                <div {...props} className={carouselRow.id} />
              )}

              // onUpdate={() => {
              //   if (updateCard) {
              //     return updateCard;
              //   } else {
              //     return prevCard;
              //   }
              // }}
            >
              <motion.div
                className="inner-carousel flex  overflow-hidden gap-x-2  w-fit snap-x  "
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {Row7.map((card) => {
                  return (
                    <motion.div key={card.id} className={card.id}>
                      <div className="text-sm w-[220px] pointer-events-pointer hover:border-1 hover:border-red-400 border-2 rounded-md border-gray-300 h-[330px] p-2 ">
                        <NavLink className="imag flex items-center justify-center bg-gray-100 p-2 relative rounded-md pointer-events-none ">
                          <img
                            alt={card.pro_details}
                            src={card.imageID}
                            className=" bg-gray-900"
                          ></img>
                        </NavLink>
                        <div className="text-sm text-gray-500 font-semibold">
                          Featured Now
                        </div>
                        <div className="offer flex gap-2">
                          <div className=" bg-red-600 text-white font-bold pt-1 pr-3 pl-3 ">
                            {card.offer}
                          </div>
                          <div className="text-red-600 font-semibold flex items-center">
                            {card.limited}
                          </div>
                        </div>
                        <div className="description text-ellipsis h-11  overflow-hidden mt-1 text-sm hover:text-black">
                          {card.pro_details}
                        </div>
                        <div className="price flex items-center gap-2">
                          <div className="offeredprice flex  text-gray-900">
                            <div className="text-sm flex items-start">
                              {card.rupeeSymbol}
                            </div>
                            <div className="flex text-lg items-center   font-medium">
                              {card.offeredPrice}
                            </div>
                          </div>
                          <div className="previouseprice text-gray-400 flex gap-2 text-decoration-line-through text-sm font-medium">
                            {card.originalPrice}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Scrollbars>
          </motion.div>
          <button
            className=" w-14 h-32  hover:border-gray-800 hover:border-2  bg-white absolute z-10 right-5 top-28 rounded"
            onClick={""}
            type="button"
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" />
          </button>
        </div>
      </div>

      <div className="main-container row8 bg-white w-full p-10 border-1 border-gray-300 rounded-md ">
        <div>
          <h1 className="text-2xl mb-4">Inspired by your browsing history</h1>
        </div>
        <div className="flex justify-center items-center  bg-white">
          <button
            className="prev  w-10 h-10 rounded-md border-2 border-gray-500  hover:border-gray-800  "
            onClick={decCountrow8}
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e" />
          </button>

          <motion.div
            className="carousel bg-white overflow-hidden w-full   "
            ref={rowCarousel}
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              className="inner-carousel flex     w-full snap-x  "
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              key={row8.indexOf}
            >
              {row8.map((card) => {
                return (
                  <motion.div key={card.id} className=" w-full   gap-2 flex">
                    <div className=" first w-[250px] p-4 " key={card.obj[0]}>
                      <div className="flex flex-col justify-center items-center">
                        <img src={card.obj[0].image} />
                        <div className="description text-balanc text-[#007185]  overflow-hidden h-24">
                          {card.obj[card.id].detail}
                        </div>
                      </div>
                      <div>
                        <div className="rate flex gap-2 mb-0">
                          <div className="flex ">
                            {rateImg.map((rate) => {
                              return (
                                <img
                                  key={rate}
                                  src={rate}
                                  width={"13px"}
                                  height={"13px"}
                                />
                              );
                            })}
                          </div>
                          <div>81</div>
                        </div>
                        <div className="offer  text-sm flex gap-2">
                          <div className=" bg-red-600 text-white font-bold pt-1 pr-3 pl-3 ">
                            {card.obj[0].offer}
                          </div>
                          <div className="text-red-600 font-semibold flex items-center">
                            {card.obj[0].limited}
                          </div>
                        </div>
                        <div className="price flex items-center gap-2">
                          <div className="offeredprice flex  text-gray-900">
                            <div className="text-sm flex items-start">
                              {card.obj[0].rupeeSymbol}
                            </div>
                            <div className="flex text-lg items-center   font-medium">
                              {card.obj[0].offeredPrice}
                            </div>
                          </div>
                          <div className="previouseprice text-gray-400 flex gap-2 text-decoration-line-through text-sm font-medium">
                            {card.obj[0].originalPrice}
                          </div>
                        </div>
                        <div className="delivery-date flex gap-1 ">
                          <div className="text-xs">Get it by </div>
                          <div className="day font-semibold text-sm">
                            {card.obj[0].delivDate}
                          </div>
                        </div>
                        <div className="delivery-offer text-xs">
                          {card.obj[0].delivOffer}
                        </div>
                        <div className=" text-xs">{card.obj[0].amazon}</div>
                      </div>
                    </div>
                    <div className=" second w-[250px] p-4 " key={card.obj[1]}>
                      <div className="flex flex-col justify-center items-center">
                        <img src={card.obj[1].image} />
                        <div className="description text-balanc text-[#007185]  overflow-hidden h-24">
                          {card.obj[1].detail}
                        </div>
                      </div>
                      <div>
                        <div className="rate flex gap-2 mb-0">
                          <div className="flex ">
                            {rateImg.map((rate) => {
                              return (
                                <img
                                  key={rate}
                                  src={rate}
                                  width={"13px"}
                                  height={"13px"}
                                />
                              );
                            })}
                          </div>
                          <div>189</div>
                        </div>
                        <div className="offer  text-sm flex gap-2">
                          <div className=" bg-red-600 text-white font-bold pt-1 pr-3 pl-3 ">
                            {card.obj[1].offer}
                          </div>
                          <div className="text-red-600 font-semibold flex items-center">
                            {card.obj[1].limited}
                          </div>
                        </div>
                        <div className="price flex items-center gap-2">
                          <div className="offeredprice flex  text-gray-900">
                            <div className="text-sm flex items-start">
                              {card.obj[1].rupeeSymbol}
                            </div>
                            <div className="flex text-lg items-center   font-medium">
                              {card.obj[1].offeredPrice}
                            </div>
                          </div>
                          <div className="previouseprice text-gray-400 flex gap-2 text-decoration-line-through text-sm font-medium">
                            {card.obj[1].originalPrice}
                          </div>
                        </div>
                        <div className="delivery-date flex gap-1 ">
                          <div className="text-xs">Get it by </div>
                          <div className="day font-semibold text-sm">
                            {card.obj[1].delivDate}
                          </div>
                        </div>
                        <div className="delivery-offer text-xs">
                          {card.obj[1].delivOffer}
                        </div>
                        <div className=" text-xs">{card.obj[1].amazon}</div>
                      </div>
                    </div>
                    <div className=" 3rd w-[250px] p-4 " key={card.obj[2]}>
                      <div className="">
                        <img src={card.obj[2].image} />
                        <div className="description text-balanc text-[#007185]  overflow-hidden h-24">
                          {card.obj[2].detail}
                        </div>
                      </div>
                      <div>
                        <div className="rate flex gap-2 mb-0">
                          <div className="flex ">
                            {rateImg.map((rate) => {
                              return (
                                <img
                                  key={rate}
                                  src={rate}
                                  width={"13px"}
                                  height={"13px"}
                                />
                              );
                            })}
                          </div>
                          <div>4,692</div>
                        </div>
                        <div className="offer  text-sm flex gap-2">
                          <div className=" bg-red-600 text-white font-bold pt-1 pr-3 pl-3 ">
                            {card.obj[2].offer}
                          </div>
                          <div className="text-red-600 font-semibold flex items-center">
                            {card.obj[2].limited}
                          </div>
                        </div>
                        <div className="price flex items-center gap-2">
                          <div className="offeredprice flex  text-gray-900">
                            <div className="text-sm flex items-start">
                              {card.obj[2].rupeeSymbol}
                            </div>
                            <div className="flex text-lg items-center   font-medium">
                              {card.obj[2].offeredPrice}
                            </div>
                          </div>
                          <div className="previouseprice text-gray-400 flex gap-2 text-decoration-line-through text-sm font-medium">
                            {card.obj[2].originalPrice}
                          </div>
                        </div>
                        <div className="delivery-date flex gap-1 ">
                          <div className="text-xs">Get it by </div>
                          <div className="day font-semibold text-sm">
                            {card.obj[2].delivDate}
                          </div>
                        </div>
                        <div className="delivery-offer text-xs">
                          {card.obj[2].delivOffer}
                        </div>
                        <div className=" text-xs">{card.obj[2].amazon}</div>
                      </div>
                    </div>
                    <div className=" 4th w-[250px] p-4 " key={card.obj[3]}>
                      <div className="">
                        <img src={card.obj[3].image} />
                        <div className="description text-balanc text-[#007185]  overflow-hidden h-24">
                          {card.obj[3].detail}
                        </div>
                      </div>
                      <div>
                        <div className="rate flex gap-2 mb-0">
                          <div className="flex ">
                            {rateImg.map((rate) => {
                              return (
                                <img
                                  key={rate}
                                  src={rate}
                                  width={"13px"}
                                  height={"13px"}
                                />
                              );
                            })}
                          </div>
                          <div>15,892</div>
                        </div>
                        <div className="offer  text-sm flex gap-2">
                          <div className=" bg-red-600 text-white font-bold pt-1 pr-3 pl-3 ">
                            {card.obj[3].offer}
                          </div>
                          <div className="text-red-600 font-semibold flex items-center">
                            {card.obj[3].limited}
                          </div>
                        </div>
                        <div className="price flex items-center gap-2">
                          <div className="offeredprice flex  text-gray-900">
                            <div className="text-sm flex items-start">
                              {card.obj[3].rupeeSymbol}
                            </div>
                            <div className="flex text-lg items-center   font-medium">
                              {card.obj[3].offeredPrice}
                            </div>
                          </div>
                          <div className="previouseprice text-gray-400 flex gap-2 text-decoration-line-through text-sm font-medium">
                            {card.obj[3].originalPrice}
                          </div>
                        </div>
                        <div className="delivery-date flex gap-1 ">
                          <div className="text-xs">Get it by </div>
                          <div className="day font-semibold text-sm">
                            {card.obj[3].delivDate}
                          </div>
                        </div>
                        <div className="delivery-offer text-xs">
                          {card.obj[3].delivOffer}
                        </div>
                        <div className=" text-xs">{card.obj[3].amazon}</div>
                      </div>
                    </div>
                    <div className=" 5th w-[250px] p-4 " key={card.obj[4]}>
                      <div className="">
                        <img src={card.obj[4].image} />
                        <div className="description text-balanc text-[#007185]  overflow-hidden h-24">
                          {card.obj[4].detail}
                        </div>
                      </div>
                      <div>
                        <div className="rate flex gap-2 mb-0">
                          <div className="flex ">
                            {rateImg.map((rate) => {
                              return (
                                <img
                                  key={rate}
                                  src={rate}
                                  width={"13px"}
                                  height={"13px"}
                                />
                              );
                            })}
                          </div>
                          <div>15,892</div>
                        </div>
                        <div className="offer  text-sm flex gap-2">
                          <div className=" bg-red-600 text-white font-bold pt-1 pr-3 pl-3 ">
                            {card.obj[4].offer}
                          </div>
                          <div className="text-red-600 font-semibold flex items-center">
                            {card.obj[4].limited}
                          </div>
                        </div>
                        <div className="price flex items-center gap-2">
                          <div className="offeredprice flex  text-gray-900">
                            <div className="text-sm flex items-start">
                              {card.obj[4].rupeeSymbol}
                            </div>
                            <div className="flex text-lg items-center   font-medium">
                              {card.obj[4].offeredPrice}
                            </div>
                          </div>
                          <div className="previouseprice text-gray-400 flex gap-2 text-decoration-line-through text-sm font-medium">
                            {card.obj[4].originalPrice}
                          </div>
                        </div>
                        <div className="delivery-date flex gap-1 ">
                          <div className="text-xs">Get it by </div>
                          <div className="day font-semibold text-sm">
                            {card.obj[4].delivDate}
                          </div>
                        </div>
                        <div className="delivery-offer text-xs">
                          {card.obj[4].delivOffer}
                        </div>
                        <div className=" text-xs">{card.obj[4].amazon}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          <button
            className="next w-10 h-10 rounded-md border-2 border-gray-500 hover:border-gray-800  "
            onClick={updaterow8Count}
          >
            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='grey'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
