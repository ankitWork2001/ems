import EventsImage1 from "../assets/events1.png";
import EventsImage2 from "../assets/events2.png";
import EventsImage3 from "../assets/events3.png";
import { FaHeart, FaShareAlt } from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <>
      {[EventsImage1, EventsImage2, EventsImage3].map((eventImage, index) => (
        <div
          key={index}
          className="min-h-[550px] bg-black flex flex-wrap md:flex-nowrap items-center justify-center gap-20 px-6 md:px-12 lg:px-16" style={{paddingBottom:"30px", paddingTop:"30px"}}
        >
          {/* Image Section */}
          <img
            src={eventImage}
            alt={`Event ${index + 1}`}
            className="w-full max-w-[463px] h-auto"
          />

          {/* Event Details */}
          <div className="flex flex-col gap-4 w-full max-w-[655px] text-center md:text-left">
            <h1 className="text-[30px] md:text-[50px] text-white">
              Summer Music Festival 2024
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[30px] text-[#D5D5D5]">
              Join us for an electrifying evening filled with live music,
              captivating performances, and vibrant energy. Discover a lineup of
              talented artists, enjoy delicious food and drinks, and connect
              with fellow music lovers in an immersive atmosphere.
            </p>

            <h1 className="text-[25px] md:text-[45px] text-white">
              FROM: <span className="text-[#09FF67]">Rs. 5000</span>
            </h1>

            {/* Buttons and Icons */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <Link to="/event-details">
                <button
                  className="bg-white text-black px-4 md:px-6 lg:px-8 h-[40px] md:h-[45px] text-[18px] md:text-[20px] font-semibold rounded-[20px] cursor-pointer"
                  style={{ paddingLeft: "130px", paddingRight: "130px" }}
                >
                  Buy Now
                </button>
              </Link>

              {/* Heart and Share Icons */}
              <div className="flex gap-6 text-white text-[30px] md:text-[30px] cursor-pointer" style={{paddingLeft:"20px"}}>
                <FaHeart className="hover:text-red-500" />
                <FaShareAlt className="hover:text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
};

export default Events;
