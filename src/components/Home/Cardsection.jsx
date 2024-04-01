import VendorCard from "../Vendor/VendorCard";
import { useState } from "react";

const Cardsection = () => {
    const data = [
      {
        id: 1,
        image: "/images/card_image1.png",
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
        title: "Glacier Wedding Films",
        topRated: true,
        rating: 5,
        address: "New York, NY",
        description:
          "Based out of Queens, NY, Drama Life Films specializes in wedding videography services. We create high-end, cinematic, wedding films that tell your story.",
      },
      {
        id: 5,
        image: "/images/dummy1.png",
        title: "title1",
        topRated: false,
        rating: 5,
        address: "address1",
        description: "description1",
      },
      {
        id: 6,
        image: "/images/dummy2.jpg",
        title: "title1",
        topRated: false,
        rating: 5,
        address: "address1",
        description: "description1",
      },
      {
        id: 7,
        image: "/images/dummy3.jpg",
        title: "title1",
        topRated: true,
        rating: 5,
        address: "address1",
        description: "description1",
      },
      {
        id: 8,
        image: "/images/hue_image1.png",
        title: "title1",
        topRated: true,
        rating: 5,
        address: "address1",
        description: "description1",
      },
    ];

    const [chunkSize, setChunkSize] = useState(4);




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
              <span className="text-sm text-brandBlack bg-[#F2F2F2] border border-[#F2F2F2] py-1 px-4 rounded-full">
                Photographers
              </span>
              <span className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
                Drinks
              </span>
              <span className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
                DJ’s
              </span>
              <span className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
                Venues
              </span>
              <span className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
                Flowers
              </span>
              <span className="text-sm text-brandBlack border border-gray2 py-1 px-4 rounded-full">
                Catering
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {data?.slice(0, chunkSize)?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[45%] lg:w-[23%] bg-white hover:drop-shadow-lg border border-white hover:border-gray2 rounded-2xl transition-all transform duration-500 pb-3"
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
            })}
          </div>
          {data?.length != chunkSize ? (
            <div className="flex justify-center pt-6 lg:pt-12 relative">
                <img className="h-[8em] lg:h-[20em] w-full" src="/images/card_bg.png" alt="Black Weddings" />
                <div className="absolute w-full h-full  bg-gradient-to-t from-white via-white to-transparent"></div>
              <button
                onClick={() => setChunkSize(chunkSize + 4)}
                className="bg-brandBlack text-white px-8 py-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                Show More
              </button>
            </div>
          ) : (
            <div className="flex justify-center pt-4 lg:pt-24">
              <button
                onClick={() => setChunkSize(chunkSize - 4)}
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