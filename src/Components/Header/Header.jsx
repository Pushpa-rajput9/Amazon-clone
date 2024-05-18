import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./asset/2416660_amazon_online payment_online transaction_payment method_icon.svg";
import loc from "./asset/9004685_location_map_pin_navigation_marker_icon.svg";
import searchIcon from "./asset/9035096_search_icon.svg";
import CameraIcon from "./asset/8201368_scan_camera_photo_ui_image_icon.svg";
import flag from "./asset/32240_flag_india_indian_icon.png";
import cartlog from "./asset/9027429_cart_add_icon.svg";
import hamburger from "./asset/657904_hamburger_menu_move handle_order_icon.svg";

function Header() {
  return (
    <header className="w-full" style={{ backgroundColor: "#131921" }}>
      <nav
        className="w-full h-16 flex items-center  float-none sticky-0 text-white  gap-2 relative  "
        style={{ backgroundColor: "#131921" }}
      >
        <div id="navLeft" className="flex   justify-center h-16  gap-3 ">
          <div
            className=" flex  w-32  hover:border-white hover:border-2 hover:m-1 "
            id="logo"
          >
            <img className="pt-4 " src={logo} width={"180px"} />
          </div>
          <div
            id="location"
            className="w-40  hover:border-white hover:border-2 hover:m-1 "
            style={{ listStyle: "none" }}
          >
            <li
              className="text-gray-200 text-sl  pl-4 "
              style={{ fontSize: "11px", fontWeight: "bold" }}
            >
              Delivering to Delhi 110001
            </li>
            <li className="flex " style={{ fontSize: "bold" }}>
              <img src={loc} height={"20px"} width={"20px"} />
              <span style={{ fontWeight: "bold" }}>Update location</span>
            </li>
          </div>
        </div>
        <div
          id="navMid"
          className="flex justify-center items-center w-2/4 h-16  "
        >
          <div className="w-full h-10 rounded-4xl flex justify-center items-center hover:border-orange-500 ">
            <form
              acceptCharset="utf-8"
              action="/s/ref=nb_sb_noss_2"
              method="GET"
              role="search"
              className="w-full  rounded focus:outline-orange-500 h-10 rounded-4xl flex justify-center items-center active:border-orange-500 active:border-3 "
            >
              <select className="bg-gray-300 text-gray-600  h-10 w-20 text-center text-xs active:border-3 focus:outline-orange-500 rounded-l ml-1 hover:border-orange-500 hover:border-opacity-5">
                {/* <option className="w-64 h-auto"></option> */}
                <optgroup
                  label="All Categories"
                  className="bg-white text-gray-600 w-60 text-sm text-left"
                >
                  <option value=" All" className="">
                    All
                  </option>
                  <option value="Alexa Skills">Alexa Skills</option>
                  <option value="Amazon Devices">Amazon Devices</option>
                  <option value="Amazon Fashion">Amazon Fashion</option>
                  <option value="saab">Amazon Fresh</option>
                  <option value="saab">Amazon Fresh Meal</option>
                  <option value="saab">Amazon Pharmancy</option>
                  <option value="saab">Appliances </option>
                  <option value="saab">Apps & Games</option>
                  <option value="saab">Audible Audiobooks </option>
                  <option value="saab">Baby</option>
                  <option value="saab">Beauty</option>
                  <option value="saab">Cars & Motorbikes</option>
                  <option value="saab">Clothing & Accessories</option>
                  <option value="saab">Collectibles</option>
                  <option value="saab">Computers & Accessories</option>
                  <option value="saab">Deals</option>
                  <option value="saab">Electronics</option>
                  <option value="saab">Furniture</option>
                  <option value="saab">Garden & Outdoors</option>
                  <option value="saab">Gift Cards</option>
                  <option value="saab">Grocery & Gaurmet Foods</option>
                </optgroup>
              </select>
              <input
                className="w-5/6 h-10  text-black pl-2 bg-white active:outline-none outline-offset-0"
                type="input"
                placeholder="Search Amazon.in"
              ></input>

              <div className="bg-white h-10 flex justify-center items-center pr-2 ">
                <img src={CameraIcon} height={"26px"} width={"26px"} />
              </div>

              <button
                className="w-20 h-10 flex justify-center items-center rounded-r  outline-orange-500 outline-offset-0"
                style={{ backgroundColor: "#FF9900" }}
              >
                <img src={searchIcon} height={"26px"} width={"26px"} />
              </button>
            </form>
          </div>
        </div>
        <div
          id="navRight"
          className="  flex justify-center items-center gap-4 "
        >
          <div className=" flex justify-center items-center  h-16  hover:border-white hover:border-2">
            <img className="ml-0" src={flag} height={"22px"} width={"22px"} />
            EN
            <select
              className="text-gray-200 w-4 ml-1 text-base  hover:border-white hover:border-2"
              style={{ backgroundColor: "#131921" }}
            >
              <optgroup>
                <option>
                  <input type="checkbox" placeholder="hello" />
                  Hello
                </option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </optgroup>
            </select>
          </div>
          <div className="list-none ml-2   hover:border-white hover:border-2 hover:p-2 ">
            <li className="" style={{ fontSize: "12px" }}>
              Hello, Sign in
            </li>
            <li className="font-bold">Account & List</li>
          </div>
          <div className="list-none  hover:border-white hover:border-2 hover:p-2  ">
            <li style={{ fontSize: "12px" }}>Returns</li>
            <li className="font-bold">& Orders</li>
          </div>
          <div className="flex   hover:outline-white  hover:border-white hover:border-2 hover:p-2 ">
            <img className="" src={cartlog} height={"40px"} width={"40px"} />
            <p className="flex   font-bold items-end text-md"> Cart</p>
          </div>
        </div>
      </nav>
      <div
        id="category"
        className=" w-full flex h-12  pl-7 text-white  justify-start items-center sticky-0 space-x-4  text-sm"
        style={{
          backgroundColor: "#232f3e",
          fontWeight: "500",
          position: "sticky",
        }}
      >
        <div className="flex justify-start items-center float-none relative shrink-0 hover:border-white hover:border-2 h-10   ">
          <img src={hamburger} height={"18px"} width={"18px"} />
          <span className=" ml-1">All</span>
        </div>
        <div className=" hover:border-white hover:border-2   ">
          Fresh
          <select
            style={{ backgroundColor: "#232f3e" }}
            className=" text-right w-4 "
          >
            <optgroup className=" text-right text-white">
              <option value="Fresh"></option>
            </optgroup>
          </select>
        </div>

        <NavLink className=" hover:border-white hover:text-white hover:border-2 flex justify-center items-center h-10  ">
          Amazon miniTV
        </NavLink>

        <NavLink className=" hover:border-white  hover:text-white hover:border-2 flex justify-center items-center h-10  ">
          Sell
        </NavLink>

        <NavLink className=" hover:border-white  hover:text-white hover:border-2 flex justify-center items-center h-10  ">
          Best Sellers
        </NavLink>
        <NavLink className=" hover:border-white  hover:text-white hover:border-2 flex justify-center items-center h-10  ">
          Mobiles
        </NavLink>
        <NavLink className=" hover:border-white  hover:text-white hover:border-2 flex justify-center items-center h-10  ">
          Today's Deals{" "}
        </NavLink>
        <NavLink className=" hover:border-white  hover:text-white hover:border-2 flex justify-center items-center h-10  ">
          Electronics
        </NavLink>
        <NavLink className=" hover:border-white  hover:text-white hover:border-2 flex justify-center items-center h-10  ">
          Prime
          <select
            className="text-gray-400 text-end "
            style={{ backgroundColor: "#232f3e" }}
          ></select>
        </NavLink>
        <NavLink className=" hover:border-white  hover:text-white hover:border-2 flex justify-center items-center h-10 ">
          Customer Service
        </NavLink>
        <NavLink className=" hover:border-white  hover:text-white hover:border-2 flex justify-center items-center h-10  ">
          New Releases
        </NavLink>
        <NavLink className=" hover:border-white  hover:text-white hover:border-2 flex justify-center items-center h-10  ">
          {" "}
          Home & Kitchen
        </NavLink>
        <div
          className="flex justify-center items-center hover:border-white hover:border-2 "
          style={{
            height: "39px",
            width: "CAPMILHI",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <a
            aria-label=""
            href="https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_crs_in_s_gw_swm_dk_np_capmilhi"
            className="nav-imageHref flex justify-end items-center w-full "
            target="_blank"
          >
            <img
              alt=""
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/CaptainMiller-Hindi/400x39-SWM_NP._CB580232872_.jpg"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
