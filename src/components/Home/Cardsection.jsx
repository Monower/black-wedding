import VendorCard from "../Vendor/VendorCard";
import { useState } from "react";

const Cardsection = () => {
  const data = [
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
      id: 4,
      image: "/images/card_image4.png",
      category: "flower",
      title: "Glacier Wedding Films",
      topRated: true,
      rating: 5,
      address: "New York, NY",
      description:
        "Based out of Queens, NY, Drama Life Films specializes in wedding videography services. We create high-end, cinematic, wedding films that tell your story.",
    },
    {
      id: 4,
      image: "/images/card_image4.png",
      category: "catering",
      title: "Glacier Wedding Films",
      topRated: true,
      rating: 5,
      address: "New York, NY",
      description:
        "Based out of Queens, NY, Drama Life Films specializes in wedding videography services. We create high-end, cinematic, wedding films that tell your story.",
    },
  ];

  const [chunkSize, setChunkSize] = useState(12);
  const [filter, setFilter] = useState("all");
  const [data2, setData2] = useState(data);


  const HandleClick = (type) => {
    if (type === "all") {
      setData2(data);
    } else if (type === "photographer") {
      setData2(data.filter((item) => item.category === "photographer"));
    } else if (type === "dj") {
      setData2(data.filter((item) => item.category === "dj"));
    } else if (type === "venue") {
      setData2(data.filter((item) => item.category === "venue"));
    } else if (type === "drink") {
      setData2(data.filter((item) => item.category === "drink"));
    } else if (type === "flower") {
      setData2(data.filter((item) => item.category === "flower"));
    } else if (type === "catering") {
      setData2(data.filter((item) => item.category === "catering"));
    }
  };

  console.log(data2.length, chunkSize);

  return (
    <>
      <section className="container mx-auto px-4 lg:px-0 pb-8 lg:pb-16">
        <div className="pb-10">
          <h3 className="text-3xl lg:text-5xl font-bold text-center text-brandBlack pb-3">
            Crafting Your <span className="text-[#BC7155]">Perfect Day</span>,
            Together
          </h3>
          <p className="text-sm lg:text-lg font-medium text-center text-brandBlack">
            Browse Our Exclusive Network of Vendors Tailored to Your Unique
            Style and Heritage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <button onClick={() => {
              setFilter("all");
              HandleClick('all')
            }} className="text-sm text-brandBlack bg-[#F2F2F2] border border-[#F2F2F2] py-1 px-4 rounded-full">
              All
            </button>
            <button onClick={() => { setFilter("photographer"), HandleClick('photographer') }} className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
              Photographers
            </button>
            <button onClick={() => { setFilter("drink"), HandleClick('drink') }} className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
              Drinks
            </button>
            <button onClick={() => { setFilter("dj"), HandleClick('dj') }} className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
              DJ’s
            </button>
            <button onClick={() => { setFilter("venue"), HandleClick('venue') }} className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
              Venues
            </button>
            <button onClick={() => { setFilter("flower"), HandleClick('flower') }} className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
              Flowers
            </button>
            <button onClick={() => { setFilter("catering"), HandleClick('catering') }} className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
              Catering
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-8">
            {data2?.slice(0, chunkSize)?.map((item, index) => {
              if (filter == 'all') {
                return (
                  <div
                    key={index}
                    className="w-[45%] lg:w-[23%] bg-white hover:drop-shadow-lg  rounded-2xl transition-all transform duration-500 pb-3"
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
              } else if (filter != 'all') {
                if (item.category == filter) {
                  return (
                    <div
                      key={index}
                      className="w-[45%] lg:w-[23%] bg-white hover:drop-shadow-lg  rounded-2xl transition-all transform duration-500 pb-3"
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
              }
            })}
          </div>
          {
            (data2?.length > chunkSize) && (
              <div className="bg-gradient-to-t to-transparent from-white w-full h-[226px] lg:h-[352px] absolute bottom-0">
              </div>
            )
          }
          {
            (data2?.length > chunkSize && data2?.length != 0) && (
              <div className="flex justify-center bottom-48 absolute w-full bg-white">
                <button
                  onClick={() => setChunkSize(chunkSize + 4)}
                  className="bg-brandBlack text-white px-8 py-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  Show More
                </button>
              </div>
            )
          }
        </div>
        {data?.length == chunkSize && (
          <div className="flex justify-center pt-4 lg:pt-24">
            <button
              onClick={() => setChunkSize(12)}
              className="bg-brandBlack text-white px-8 py-2 rounded-full"
            >
              Show Less
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Cardsection;