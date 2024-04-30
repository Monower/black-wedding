

import { useState } from "react";
import VendorSearch from "../components/Vendor/VendorSearch";
import VendorCard from "../components/Vendor/VendorCard";
import VendorCard2 from "../components/Vendor/VendorCard2";



const Search = () => {

  const [showfilter, setShowFilter] = useState(false);
  const [viewType, setViewType] = useState("grid");
  const [showItem, setShowItem] = useState(4);
  const [fromItem, setFromItem] = useState(0);
  const [toItem, setToItem] = useState(showItem);
  const [itemIndex, setItemIndex] = useState(0);


  const data = [
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
    {
      id: 1,
      image: "/images/card_image1.png",
      category: "photographer",
      topRated: false,
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
    {
      id: 1,
      image: "/images/card_image1.png",
      category: "photographer",
      topRated: false,
      title: "Glacier Wedding Films",
      rating: 5,
      address: "New York, NY",
      description:
        "Based out of Queens, NY, Drama Life Films specializes in wedding videography services. We create high-end, cinematic, wedding films that tell your story.",
    },
    {
      id: 10,
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
    {
      id: 1,
      image: "/images/card_image1.png",
      category: "photographer",
      topRated: false,
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
    {
      id: 1,
      image: "/images/card_image1.png",
      category: "photographer",
      topRated: false,
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
    }
  ];

  const paginate = () => {
    const pageCount = Math.ceil(data.length / showItem);
    const pages = Array.from({ length: pageCount }, (_, index) => index);
    return pages;
  };

  const paginate2 = paginate();

  return (
    <>
      <section>
        <div className="bg-rose-50 py-4">
          <div className="container mx-auto">
            <div className="flex items-center px-4 lg:px-0 pb-[1em] lg:pb-[2em]">
              <span>
                <svg
                  className="w-4 h-4 lg:w-6 lg:h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3H3V10H10V3Z"
                    stroke="#151623"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3H14V10H21V3Z"
                    stroke="#151623"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 14H14V21H21V14Z"
                    stroke="#151623"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14H3V21H10V14Z"
                    stroke="#151623"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="ml-2 font-bold text-[14px] lg:text-[16px]">
                Vendors
              </p>
              <span className="ml-2">
                <svg
                  className="w-4 h-3 lg:w-6 lg:h-4 fill-brandBlack"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </span>
              <p className="ml-2 text-[14px] lg:text-[16px]">Videographers</p>
            </div>
            <div className=" flex justify-center">
              <div className="flex flex-col gap-2">
                <VendorSearch />
                <p className="text-[14px] lg:text-[16px]">
                  Search by vendor name
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[2.5em] lg:py-[4.5em] bg-[#F5F5F5]">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
            <h3 className="text-[24px] lg:text-[32px] text-brandBlack font-bold lg:leading-8 text-center lg:text-left">
              Top Videographers in <br />{" "}
              <span className="text-brandBrown">
                New York, NY (234 vendors)
              </span>
            </h3>
            <div className="inline-flex flex-col lg:flex-row gap-4">
              <button
                onClick={() => {
                  setShowFilter(!showfilter);
                }}
                className={`flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500 ${
                  showfilter ? "bg-gray-300" : ""
                }`}
              >
                <span>
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.6665 14V9.33337"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.6665 6.66667V2"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.99988 14V8"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.99988 5.33333V2"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3331 14V10.6667"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3331 8V2"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.666504 9.33337H4.6665"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.99988 5.33337H9.99988"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.3331 10.6667H15.3331"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Filters</span>
              </button>
              <div className="flex flex-col lg:flex-row border border-gray-300 rounded-lg">
                <button
                  onClick={() => {
                    setViewType("grid");
                  }}
                  className={`flex items-center gap-2 border-r border-r-gray-300 px-3 py-2  hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500 rounded-l-lg ${
                    viewType === "grid" ? "bg-gray-300" : ""
                  }`}
                >
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3H3V10H10V3Z"
                        stroke="#151623"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 3H14V10H21V3Z"
                        stroke="#151623"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 14H14V21H21V14Z"
                        stroke="#151623"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 14H3V21H10V14Z"
                        stroke="#151623"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Grid View</span>
                </button>
                <button
                  onClick={() => {
                    setViewType("list");
                  }}
                  className={`flex items-center gap-2 border-r border-gray-300 px-3 py-2  hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500 ${
                    viewType === "list" ? "bg-gray-300" : ""
                  }`}
                >
                  <span>
                    <svg
                      className="fill-current w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </span>
                  <span>List View</span>
                </button>
                <button
                  onClick={() => {
                    setViewType("map");
                  }}
                  className={`flex items-center gap-2  px-3 py-2  hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500 rounded-r-lg ${
                    viewType === "map" ? "bg-gray-300" : ""
                  }`}
                >
                  <span>
                    <svg
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z" />
                    </svg>
                  </span>
                  <span>Map View</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" pb-[4.5em] bg-[#F5F5F5]">
          <div className="container mx-auto px-2 lg:px-0 flex flex-col lg:flex-row gap-2 lg:gap-4">
            {showfilter && (
              <div className="">
                <form className="lg:min-w-[18.5625em] border border-gray-300 rounded-2xl lg:p-6 flex flex-col items-center sticky top-24 z-10">
                  <div>
                    <h3 className="text-[16px] lg:text-[18px] font-bold text-brandBlack flex items-center gap-2 pb-[1.625em]">
                      <span>
                        <svg
                          className="w-6 h-6 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                        </svg>
                      </span>
                      <span>Support Diversity</span>
                    </h3>
                    <div className="inline-flex flex-col gap-4">
                      <fieldset className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="black_owned"
                          id="black_owned"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="black_owned"
                          className="text-[16px] font-medium"
                        >
                          Black Owned
                        </label>
                      </fieldset>
                      <fieldset className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="asian_owned"
                          id="asian_owned"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="asian_owned"
                          className="text-[16px] font-medium"
                        >
                          Asian-owned
                        </label>
                      </fieldset>
                      <fieldset className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="hispanic_latinx_owned"
                          id="hispanic_latinx_owned"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="hispanic_latinx_owned"
                          className="text-[16px] font-medium"
                        >
                          Hispanic or Latinx-owned
                        </label>
                      </fieldset>
                      <fieldset className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="lgbtq_owned"
                          id="lgbtq_owned"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="lgbtq_owned"
                          className="text-[16px] font-medium"
                        >
                          LGBTQ+owned
                        </label>
                      </fieldset>
                      <fieldset className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="native_american_owned"
                          id="native_american_owned"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="native_american_owned"
                          className="text-[16px] font-medium"
                        >
                          Native American-owned
                        </label>
                      </fieldset>
                      <fieldset className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="pacific_islander_owned"
                          id="pacific_islander_owned"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="pacific_islander_owned"
                          className="text-[16px] font-medium"
                        >
                          Pacific Islander-owned
                        </label>
                      </fieldset>
                      <fieldset className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="veteran_owned"
                          id="veteran_owned"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="veteran_owned"
                          className="text-[16px] font-medium"
                        >
                          Veteran-owned
                        </label>
                      </fieldset>
                      <fieldset className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="woman_owned"
                          id="woman_owned"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="woman_owned"
                          className="text-[16px] font-medium"
                        >
                          Woman-owned
                        </label>
                      </fieldset>

                      <button
                        type="reset"
                        className="bg-brandBlack text-white py-2 px-4 rounded-2xl mt-4"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            <div>
              <div>
                <div
                  className={`flex flex-wrap gap-5 pb-10 ${
                    viewType == "map" ? "" : "justify-between"
                  }`}
                >
                  {data?.slice(fromItem, toItem)?.map((item, index) => {
                    if (viewType == "grid") {
                      return (
                        <div
                          key={index}
                          className="w-[45%] lg:w-[19em] bg-white hover:drop-shadow-lg  rounded-2xl transition-all transform duration-500 pb-3 group overflow-hidden"
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
                      );
                    } else if (viewType == "list") {
                      return (
                        <VendorCard2
                          image={item.image}
                          topRated={item.topRated}
                          title={item.title}
                          rating={item.rating}
                          address={item.address}
                          description={item.description}
                        />
                      );
                    } else {
                      return (
                        <div
                          key={index}
                          className={`bg-white hover:drop-shadow-lg  rounded-2xl transition-all transform duration-500 pb-3 group overflow-hidden w-[45%] lg:w-[19em]`}
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
                      );
                    }
                  })}
                </div>
                <div className="flex justify-center items-center gap-3">
                  <button
                    onClick={() => {
                      setFromItem((prev) => {
                        return prev - showItem;
                      });
                      setToItem((prev) => {
                        return prev - showItem;
                      });
                      setItemIndex((prev) => {
                        return prev - 1;
                      });
                    }}
                    disabled={fromItem == 0}
                    className="text-brandBlack text-[14px] font-medium"
                  >
                    Prev
                  </button>
                  {paginate2.map((item, index) => {
                    console.log(
                      "from item: ",
                      fromItem,
                      "to item: ",
                      toItem,
                      "index: ",
                      index
                    );
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setItemIndex(index);
                          setFromItem(index * showItem);
                          setToItem((index + 1) * showItem);
                        }}
                        className={`border px-2 py-1 rounded-md text-[14px] font-medium ${
                          index === itemIndex
                            ? "bg-brandBlack text-white border-brandBlack"
                            : "text-brandBlack  border-gray-300"
                        }`}
                      >
                        {item + 1}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => {
                      setFromItem((prev) => {
                        return prev + showItem;
                      });
                      setToItem((prev) => {
                        return prev + showItem;
                      });
                      setItemIndex((prev) => {
                        return prev + 1;
                      });
                    }}
                    disabled={toItem >= data.length}
                    className="text-brandBlack text-[14px] font-medium"
                  >
                    Next
                  </button>
                </div>
              </div>
              {viewType == "map" && (
                <div>
                  <iframe
                    className="sticky top-24 z-10"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21890.219971094855!2d90.40693045845875!3d23.729817658863137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1714276935220!5m2!1sen!2sbd"
                    width="500"
                    height="300"
                    style={{
                      border: 0,
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;