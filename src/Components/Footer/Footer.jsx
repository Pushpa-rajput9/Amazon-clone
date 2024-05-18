//import "./footer.css";

import { NavLink } from "react-router-dom";
import logo from "./asset/logo.svg";

function Footer() {
  return (
    <footer className="bg-slate-700  border-y flex flex-col  text-white">
      <div
        id="footerTop"
        className="flex justify-center items-center text-white"
        style={{
          backgroundColor: "#344152",
          lineHeight: "19px",
          padding: "15px",
        }}
      >
        <NavLink to="#"> Back To Top</NavLink>
      </div>
      <div
        id="footerMid"
        className=" flex justify-center items-start pt-12 pb-12 text-gray-200  gap-4"
        style={{ backgroundColor: "#232f3e", lineHeight: "" }}
      >
        <div className="list-none w-1/4  flex flex-col  justify-center text-sm gap-y-1 pl-8">
          <h1 className="text-lg pb-2 text-white font-bold">Get to Know Us</h1>
          <li>
            <NavLink
              to="https://www.aboutamazon.in/?utm_source=gateway&amp;utm_medium=footer"
              class="nav_a"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="https://amazon.jobs" class="nav_a">
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://press.aboutamazon.in/?utm_source=gateway&amp;utm_medium=footer"
              class="nav_a"
            >
              Press Releases
            </NavLink>
          </li>
          <li>
            <NavLink to="https://www.amazon.science" class="nav_a">
              Amazon Science
            </NavLink>
          </li>
        </div>
        <div className="list-none w-1/4 flex flex-col justify-center text-sm gap-y-1 ">
          <h1 className="text-lg b-2 text-white font-bold">Connect with Us</h1>
          <li>
            <NavLink to="https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&amp;token=2075D5EAC7BB214089728E2183FD391706D41E94&amp;6">
              Facebook
            </NavLink>
          </li>
          <li>
            <NavLink to="https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&amp;token=A309DFBFCB1E37A808FF531934855DC817F130B6&amp;6">
              Twitter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://www.instagram.com/pushpa._.rajput._/?igsh=cDhweHE5eW8xYXVw"
              class="nav_a"
            >
              Instagram
            </NavLink>
          </li>
        </div>
        <div className="list-none w-1/4 flex flex-col justify-center text-sm gap-y-1">
          <h1 className="text-lg b-2 text-white font-bold">
            Make Money with Us
          </h1>
          <li>
            <NavLink
              to="/b/?node=2838698031&amp;ld=AZINSOANavDesktopFooter_C&amp;ref_=nav_footer_sell_C"
              class="nav_a"
            >
              Sell on Amazon
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT"
              class="nav_a"
            >
              Sell under Amazon Accelerator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&amp;ld=AOINABRLGNRFOOT"
              class="nav_a"
            >
              Protect and Build Your Brand
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&amp;ref=AZIN_Footer_V1"
              class="nav_a"
            >
              Amazon Global Selling
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&amp;utm_medium=footer&amp;utm_source=GW&amp;ref_=footer_assoc"
              class="nav_a"
            >
              Become an Affiliate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter"
              class="nav_a"
            >
              Fulfilment by Amazon
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://advertising.amazon.in/?ref=Amz.in"
              class="nav_a"
            >
              Advertise Your Products
            </NavLink>
          </li>
          <li>
            <NavLink to="https://www.amazonpay.in/merchant" class="nav_a">
              Amazon Pay on Merchants
            </NavLink>
          </li>
        </div>
        <div className="list-none w-1/4 flex flex-col justify-center  text-sm gap-y-1">
          <h1 className="text-lg b-2 text-white font-bold">Let Us Help You</h1>
          <li>
            <NavLink
              to="/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&amp;ref_=footer_covid"
              class="nav_a"
            >
              COVID-19 and Amazon
            </NavLink>
          </li>
          <li>
            <NavLink to="/gp/css/homepage.html?ref_=footer_ya" class="nav_a">
              Your Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gp/css/returns/homepage.html?ref_=footer_hy_f_4"
              class="nav_a"
            >
              Returns Centre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gp/help/customer/display.html?nodeId=201083470&amp;ref_=footer_swc"
              class="nav_a"
            >
              100% Purchase Protection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gp/browse.html?node=6967393031&amp;ref_=footer_mobapp"
              class="nav_a"
            >
              Amazon App Download
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gp/help/customer/display.html?nodeId=200507590&amp;ref_=footer_gw_m_b_he"
              class="nav_a"
            >
              Help
            </NavLink>
          </li>
        </div>
      </div>
      <div
        id="nav-footer-line "
        className=" pt-6 flex flex-col justify-center items-center "
        style={{
          backgroundColor: "#232f3e",
          lineHeight: "",
          borderTop: "1px solid #6a6969",
        }}
      >
        <div className="flex justify-center items-center gap-24  pb-6">
          <NavLink
            to="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=676742245123&hvpos=&hvnetw=g&hvrand=11997150275639900351&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061660&hvtargid=kwd-10573980&hydadcr=14453_2367553&gad_source=1"
            className=" flex justify-center items-center  pl-10 "
          >
            <img
              className=" flex justify-center items-center pt-6   "
              src={logo}
              height={""}
              width={"100px"}
            />
          </NavLink>
          <button
            className="rounded h-10 w-32  "
            style={{ border: "2px solid #8b8989" }}
          >
            English
          </button>
        </div>
        <ul className="flex justify-center items-center gap-4 text-xs text-gray-100 flex-wrap font-normal w-3/5 pb-10 ">
          <li>
            <a href="https://www.amazon.com.au/ref=footer_au">Australia</a>
          </li>
          <li>
            <a href="https://www.amazon.com.br/ref=footer_br">Brazil</a>
          </li>
          <li>
            <a href="https://www.amazon.ca/ref=footer_ca">Canada</a>
          </li>
          <li>
            <a href="https://www.amazon.cn/ref=footer_cn">China</a>
          </li>
          <li>
            <a href="https://www.amazon.fr/ref=footer_fr">France</a>
          </li>
          <li>
            <a href="https://www.amazon.de/ref=footer_de">Germany</a>
          </li>
          <li>
            <a href="https://www.amazon.it/ref=footer_it">Italy</a>
          </li>
          <li>
            <a href="https://www.amazon.co.jp/ref=footer_jp">Japan</a>
          </li>
          <li>
            <a href="https://www.amazon.com.mx/ref=footer_mx">Mexico</a>
          </li>
          <li>
            <a href="https://www.amazon.nl/ref=footer_nl">Netherlands</a>
          </li>
          <li>
            <a href="https://www.amazon.pl/ref=footer_pl">Poland</a>
          </li>
          <li>
            <a href="https://www.amazon.sg/ref=footer_sg">Singapore</a>
          </li>
          <li>
            <a href="https://www.amazon.es/ref=footer_es">Spain</a>
          </li>
          <li>
            <a href="https://www.amazon.com.tr/ref=footer_tr">Turkey</a>
          </li>
          <li>
            <a href="https://www.amazon.ae/ref=footer_ae">
              United Arab Emirates
            </a>
          </li>
          <li>
            <a href="https://www.amazon.co.uk/ref=footer_uk">United Kingdom</a>
          </li>
          <li>
            <a href="https://www.amazon.com/ref=footer_us">United States</a>
          </li>
        </ul>
      </div>

      <div
        className="flex justify-center items-center flex-col"
        style={{
          backgroundColor: "#131921",
        }}
      >
        <table
          className=" w-3/4 pl-52"
          style={{
            backgroundColor: "#131921",
            verticalAlign: "top",
          }}
        >
          <tbody className=" align-middle  text-start vertic">
            <tr className="">
              <td className="p-5 ">
                <a className=" text-sm" href="https://www.abebooks.com/">
                  AbeBooks
                  <br />{" "}
                  <span className=" text-xs">
                    Books, art
                    <br />
                    &amp; collectibles
                  </span>
                </a>
              </td>
              <td>
                <a
                  className=" text-sm"
                  href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&amp;sc_campaign=IN_amazonfooter"
                >
                  Amazon Web Services
                  <br />
                  <span className=" text-xs">
                    Scalable Cloud
                    <br />
                    Computing Services
                  </span>
                </a>
              </td>
              <td>
                <a className=" text-sm" href="https://www.audible.in/">
                  Audible
                  <br />
                  <span className=" text-xs">
                    Download
                    <br />
                    Audio Books
                  </span>
                </a>
              </td>
              <td>
                <a className=" text-sm" href="https://www.imdb.com/">
                  IMDb
                  <br />
                  <span className=" text-xs">
                    Movies, TV
                    <br />
                    &amp; Celebrities
                  </span>
                </a>
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td className="p-5">
                <a className=" text-sm" href="https://www.shopbop.com/">
                  Shopbop
                  <br />
                  <span className=" text-xs">
                    Designer
                    <br />
                    Fashion Brands
                  </span>
                </a>
              </td>
              <td>
                <a className=" text-sm" href="/business?ref=footer_aingw">
                  Amazon Business
                  <br />
                  <span className=" text-xs">
                    Everything For
                    <br />
                    Your Business
                  </span>
                </a>
              </td>
              <td>
                <a className=" text-sm" href="/now?ref=footer_amznow">
                  Prime Now
                  <br />
                  <span className=" text-xs">
                    2-Hour Delivery
                    <br />
                    on Everyday Items
                  </span>
                </a>
              </td>
              <td>
                <a className=" text-sm" href="/music/prime?ref=footer_apm">
                  Amazon Prime Music
                  <br />
                  <span className=" text-xs">
                    100 million songs, ad-free
                    <br />
                    Over 15 million podcast episodes{" "}
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center flex-col">
          <ul className="flex justify-center items-center gap-5 pt-5  text-sm">
            <li>
              <a
                href="/gp/help/customer/display.html?nodeId=200545940&amp;ref_=footer_cou"
                id=""
              >
                Conditions of Use &amp; Sale
              </a>{" "}
            </li>
            <li>
              <a
                href="/gp/help/customer/display.html?nodeId=200534380&amp;ref_=footer_privacy"
                id=""
              >
                Privacy Notice
              </a>{" "}
            </li>
            <li>
              <a
                href="/gp/help/customer/display.html?nodeId=202075050&amp;ref_=footer_iba"
                id=""
              >
                Interest-Based Ads
              </a>{" "}
            </li>
          </ul>
          <span className="text-sm  text-gray-100">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
