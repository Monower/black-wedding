
import { useState } from "react";
import VendorSearch from "../components/Vendor/VendorSearch";
import VendorCategoryCard from "../components/Vendor/VendorCategoryCard";
import { Link } from "react-router-dom";
import VendorCard from "../components/Vendor/VendorCard";

const Vendors = () => {
  const [categoryCount, setCategoryCount] = useState(8);
  const data = [
    {
      id: 1,
      image: "/images/category1.png",
      title: "Reception Venues",
    },
    {
      id: 2,
      image: "/images/category2.png",
      title: "Wedding Photographers",
    },
    {
      id: 3,
      image: "/images/category3.png",
      title: "Videographers",
    },
    {
      id: 4,
      image: "/images/category4.png",
      title: "Officiants + premarital counseling",
    },
    {
      id: 5,
      image: "/images/category5.png",
      title: "Cakes",
    },
    {
      id: 6,
      image: "/images/category6.png",
      title: "Flowers",
    },
    {
      id: 7,
      image: "/images/category7.png",
      title: "Jewelers",
    },
    {
      id: 8,
      image: "/images/category8.png",
      title: "Decor",
    },
    {
      id: 5,
      image: "/images/category5.png",
      title: "Cakes",
    },
    {
      id: 6,
      image: "/images/category6.png",
      title: "Flowers",
    },
    {
      id: 7,
      image: "/images/category7.png",
      title: "Jewelers",
    },
    {
      id: 8,
      image: "/images/category8.png",
      title: "Decor",
    },
  ];

  const data2 = [
    {
      id: 1,
      image: "/images/dummy2.jpg",
      category: "photographer",
      topRated: true,
      title: "Glacier Wedding Films",
      rating: 5,
      address: "New York, NY",
      description:
        "Based out of Queens, NY, Drama Life Films specializes in wedding videography services. We create high-end, cinematic, wedding films that tell your story.",
    },
    {
      id: 2,
      image: "/images/card_image2.png",
      category: "drink",
      title: "Glacier Wedding Films",
      topRated: false,
      rating: 5,
      address: "New York, NY",
      description:
        "Based out of Queens, NY, Drama Life Films specializes in wedding videography services. We create high-end, cinematic, wedding films that tell your story.",
    },
    {
      id: 3,
      image: "/images/card_image3.png",
      category: "dj",
      title: "Glacier Wedding Films",
      topRated: false,
      rating: 5,
      address: "New York, NY",
      description:
        "Based out of Queens, NY, Drama Life Films specializes in wedding videography services. We create high-end, cinematic, wedding films that tell your story.",
    },
    {
      id: 4,
      image: "/images/card_image4.png",
      category: "venue",
      title: "Glacier Wedding Films",
      topRated: true,
      rating: 5,
      address: "New York, NY",
      description:
        "Based out of Queens, NY, Drama Life Films specializes in wedding videography services. We create high-end, cinematic, wedding films that tell your story.",
    },
  ];
    return (
      <>
        <section className="pb-[4.375em] lg:pb-[8.4375em]">
          <div className="min-h-[74vh] lg:min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-rose-100/70  to-white ">
            <h3 className="text-[24px] lg:text-[48px] font-bold lg:font-extrabold lg:leading-[50px] text-center text-brandBlack pb-5 lg:pb-10 text-shadow shadow-brandBlack">
              Seek Out Top-Rated Vendors <br /> for Every Wedding Theme
            </h3>
            <div className="flex flex-col gap-1 lg:gap-2">
              <VendorSearch />
              <p className="text-[14px] lg:text-[16px]">
                Search by vendor name
              </p>
            </div>
          </div>
          <div className="container mx-auto flex flex-wrap justify-center lg:justify-between gap-2 lg:gap-4 pb-8">
            {data?.slice(0, categoryCount)?.map((item, index) => (
              <div
                key={index}
                className="w-[10em] lg:w-[24%] group overflow-hidden rounded-2xl"
              >
                <VendorCategoryCard
                  id={item?.id}
                  image={item?.image}
                  title={item?.title}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {categoryCount < data?.length ? (
              <button
                onClick={() => setCategoryCount(data?.length)}
                className="bg-brandBlack text-white border border-brandBlack hover:bg-white hover:text-brandBlack transition-all duration-500 hover:shadow hover:shadow-brandBlack px-5 py-1 lg:px-10 lg:py-2 rounded-full lg:text-[18px] font-medium"
              >
                All Categories
              </button>
            ) : (
              <button
                onClick={() => setCategoryCount(8)}
                className="bg-brandBlack text-white border border-brandBlack hover:bg-white hover:text-brandBlack transition-all duration-500 hover:shadow hover:shadow-brandBlack px-5 py-1 lg:px-10 lg:py-2 rounded-full lg:text-[18px] font-medium"
              >
                See Less
              </button>
            )}
          </div>
        </section>
        <section className="container mx-auto pb-10 lg:pb-[5.625em]">
          <h3 className="text-[20px] lg:text-[48px] font-bold lg:font-extrabold lg:leading-[60px] text-center text-brandBlack pb-5 lg:pb-10">
            Top Rated Vendors in your Area
          </h3>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-4">
            {data2?.map((item, index) => (
              <div
                key={index}
                className="w-[45%] lg:w-[24%] bg-white hover:drop-shadow-lg  rounded-2xl transition-all transform duration-500 pb-3 group overflow-hidden"
              >
                <VendorCard
                  image={item.image}
                  topRated={item.topRated}
                  title={item.title}
                  rating={item.rating}
                  address={item.address}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto  bg-brandBlack p-4 lg:p-0 lg:rounded-2xl mb-10 lg:mb-20 flex flex-col-reverse lg:flex-row">
          <div className="lg:p-10 lg:w-[60%]">
            <h3 className="text-white lg:pb-4 lg:text-[32px] lg:leading-[35px] font-extrabold ">
              Join Our Celebrated Circle of Vendors
            </h3>
            <p className="text-white pb-4 lg:text-[18px] lg:leading-[25px] lg:font-medium text-justify lg:text-normal">
              Transform your passion into opportunity with the Black Wedding
              Experience. Connect with engaged couples seeking your unique
              skills and cultural expertise.
            </p>
            <Link
              to={"/vendor/signup"}
              className="bg-[#107BEA] text-white border border-[#107BEA] hover:bg-white hover:text-[#107BEA] transition-all duration-500 px-3 py-1 lg:px-6 lg:py-2 rounded-full text-[14px] lg:text-[18px] font-medium group inline-flex items-center gap-1 lg:gap-2"
            >
              <span>Become a vendor</span>
              <span>
                <svg
                  className="w-4 h-3 lg:w-6 lg:h-4 fill-current group-hover:translate-x-2 transition-transform duration-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </span>
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end lg:items-end lg:w-[40%] lg:mr-10 pb-5 lg:pb-0">
            <img className="h-[10em] lg:h-[13em]" src="/images/vendorcta.png" alt="" />
          </div>
        </section>
      </>
    );
};

export default Vendors;