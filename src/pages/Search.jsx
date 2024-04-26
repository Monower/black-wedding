import VendorSearch from "../components/Vendor/VendorSearch";
import VendorCard from "../components/Vendor/VendorCard";



const Search = () => {
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
        }
    ];

    return (
        <>
            <section>
                <div className="min-h-[45vh] bg-rose-50 relative">
                    <div className="absolute top-28 left-10 flex items-center">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3H3V10H10V3Z" stroke="#151623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 3H14V10H21V3Z" stroke="#151623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 14H14V21H21V14Z" stroke="#151623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 14H3V21H10V14Z" stroke="#151623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <p className="ml-2 font-bold">Vendors</p>
                        <span className="ml-2">
                            <svg className="w-6 h-4 fill-brandBlack" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </span>
                        <p className="ml-2">
                            Videographers
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <VendorSearch />
                        <p>Search by vendor name</p>
                    </div>
                </div>
                <div className="py-[4.5em] bg-[#F5F5F5]">
                    <div className="container mx-auto flex justify-between items-center">
                        <h3 className="text-[32px] text-brandBlack font-bold leading-8">Top Videographers in <br /> <span className="text-brandBrown">New York, NY (234 vendors)</span></h3>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500">
                                <span>
                                    <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.6665 14V9.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.6665 6.66667V2" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.99988 14V8" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.99988 5.33333V2" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3331 14V10.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3331 8V2" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M0.666504 9.33337H4.6665" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.99988 5.33337H9.99988" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.3331 10.6667H15.3331" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span>
                                    Filters
                                </span>
                            </button>
                            <div className="flex border border-gray-300 rounded-lg">
                                <button className="flex items-center gap-2 border-r border-r-gray-300 px-3 py-2  hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500 rounded-l-lg">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3H3V10H10V3Z" stroke="#151623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21 3H14V10H21V3Z" stroke="#151623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21 14H14V21H21V14Z" stroke="#151623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10 14H3V21H10V14Z" stroke="#151623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span>
                                        Grid View
                                    </span>
                                </button>
                                <button className="flex items-center gap-2 border-r border-gray-300 px-3 py-2  hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500">
                                    <span>
                                        <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                    </span>
                                    <span>
                                        List View
                                    </span>
                                </button>
                                <button className="flex items-center gap-2  px-3 py-2  hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500 rounded-r-lg">
                                    <span>
                                        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z" /></svg>
                                    </span>
                                    <span>
                                        Map View
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-wrap justify-center gap-6 lg:gap-12 pb-[2.875em]">
                    {
                        data?.map((item, index) => (
                            <div
                                key={index}
                                className="w-[45%] lg:w-[22%] bg-white hover:drop-shadow-lg  rounded-2xl transition-all transform duration-500 pb-3 group overflow-hidden"
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
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default Search;