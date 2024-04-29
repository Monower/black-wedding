
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
        <section className="pb-[8.4375em]">
          <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-rose-100/70  to-white ">
            <h3 className="text-[48px] font-extrabold leading-[50px] text-center text-brandBlack pb-10 text-shadow shadow-brandBlack">
              Seek Out Top-Rated Vendors <br /> for Every Wedding Theme
            </h3>
            <div className="flex flex-col gap-2">
              <VendorSearch />
              <p>Search by vendor name</p>
            </div>
          </div>
          <div className="container mx-auto flex flex-wrap justify-between gap-4 pb-8">
            {
              data?.slice(0, categoryCount)?.map((item,index) => (
                <div key={index} className="w-[24%] group overflow-hidden rounded-2xl">
                  <VendorCategoryCard id={item?.id} image={item?.image} title={item?.title} />
                </div>
              ))
            }
          </div>
          <div className="flex justify-center">
            {
              categoryCount < data?.length ? (
                <button onClick={() => setCategoryCount(data?.length)} className="bg-brandBlack text-white border border-brandBlack hover:bg-white hover:text-brandBlack transition-all duration-500 hover:shadow hover:shadow-brandBlack px-10 py-2 rounded-full text-[18px] font-medium">
                  All Categories
                </button>
              ) : (
                  <button onClick={() => setCategoryCount(8)} className="bg-brandBlack text-white border border-brandBlack hover:bg-white hover:text-brandBlack transition-all duration-500 hover:shadow hover:shadow-brandBlack px-10 py-2 rounded-full text-[18px] font-medium">
                    See Less
                  </button>
              )
            }
          </div>
        </section>
        <section className="container mx-auto pb-[5.625em]">
          <h3 className="text-[48px] font-extrabold leading-[60px] text-center text-brandBlack pb-10">
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
        <section className="container mx-auto p-10 bg-brandBlack rounded-2xl mb-20">
          <h3 className="text-white pb-4 text-[32px] leading-[35px] font-extrabold max-w-[36%]">
            Join Our Celebrated Circle of Vendors
          </h3>
          <p className="text-white pb-4 text-[18px] leading-[25px] font-medium max-w-[55%]">
            Transform your passion into opportunity with the Black Wedding
            Experience. Connect with engaged couples seeking your unique skills
            and cultural expertise.
          </p>
          <Link
            to={"/vendor/signup"}
            className="bg-[#107BEA] text-white border border-[#107BEA] hover:bg-white hover:text-[#107BEA] transition-all duration-500 px-6 py-2 rounded-full text-[18px] font-medium group inline-flex items-center gap-2"
          >
            <span>Become a vendor</span>
            <span>
              <svg
                className="w-6 h-4 fill-current group-hover:translate-x-2 transition-transform duration-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </span>
          </Link>
        </section>
      </>
    );
};

export default Vendors;