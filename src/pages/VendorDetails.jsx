import { Link } from "react-router-dom";


const VendorDetails = () => {
  return (
    <>
      <section className="container mx-auto flex justify-center gap-2 mt-10 mb-8">
        <img
          className="w-[43.25em] h-[30em] border border-blue-600 rounded-l-2xl"
          src="./images/dummy3.jpg"
          alt="Bangla"
        />
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <img
              className="w-[13.6875em] h-[14.76em] border border-blue-600"
              src="./images/dummy3.jpg"
              alt=""
            />
            <img
              className="w-[13.6875em] h-[14.76em] border border-blue-600 "
              src="./images/dummy3.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <img
              className="w-[13.6875em] h-[14.76em] border border-blue-600 rounded-r-2xl"
              src="./images/dummy3.jpg"
              alt=""
            />
            <img
              className="w-[13.6875em] h-[14.76em] border border-blue-600 rounded-r-2xl"
              src="./images/dummy3.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="pb-16 container mx-auto px-16 flex gap-5">
        <div>
          <div className="flex gap-4 pb-12">
            <Link to={'#'} className="text-[14px] font-medium text-brandBlack px-2 py-1 border border-gray-300 rounded-md">
              Pricing
            </Link>
            <Link to={'#'} className="text-[14px] font-medium text-brandBlack px-2 py-1 border border-gray-300 rounded-md">
              About Us
            </Link>
            <Link to={'#'} className="text-[14px] font-medium text-brandBlack px-2 py-1 border border-gray-300 rounded-md">
              FAQs
            </Link>
            <Link to={'#'} className="text-[14px] font-medium text-brandBlack px-2 py-1 border border-gray-300 rounded-md">
              Reviews
            </Link>
            <Link to={'#'} className="text-[14px] font-medium text-brandBlack px-2 py-1 border border-gray-300 rounded-md">
              Location
            </Link>
          </div>
          <div className="pb-11">
            <h3 className="text-[24px] font-bold text-brandBlack pb-6">Pricing information</h3>
            <div className="flex gap-4 pb-2">
              <div>
                <p className="text-brandBlack text-[20px] font-bold">$1,490</p>
                <p className="text-gray2 text-[14px] font-medium">starting price</p>
              </div>
              <div>
                <p className="text-brandBlack text-[20px] font-bold">$6,000+</p>
                <p className="text-gray2 text-[14px] font-medium">Up to</p>
              </div>
            </div>
            <p className="text-brandBlack text-[14px] font-medium">Do you want more pricing details? <Link to={'#'} className="text-brandBrown">Request Pricing</Link></p>
          </div>
          <div>
            <h3 className="text-[24px] font-bold text-brandBlack pb-6">About Us</h3>
            <p className="text-brandBlack text-[16px] font-medium pb-6 text-justify">Tercero by Aldea Weddings is a beautiful wedding venue located in Glendale, Arizona which was founded in 2004 as a bohemian-influenced haven. This family-owned and -operated business has been hosting amazing celebrations for years now, providing couples with a unique and refreshing space to exchange their professions of love.</p>

            <p className="text-brandBlack text-[16px] font-bold">Facilities and Capacity</p>
            <p className="text-brandBlack text-[16px] font-medium pb-6 text-justify">Tercero by Aldea features beautiful grounds and architecture that boast stark white brick and wooden accents, resulting in an emanating rustic ambiance. The succulent gardens that surround the estate create an amazing space for outdoor ceremonies. The main reception room has 4,500 square feet of space that includes the bridal suite and groom's room. Meanwhile, the courtyard boasts gorgeous water and fire features that add to the natural atmosphere of the gardens and forested areas. It also houses an outdoor bar and is fully equipped with cocktail seating and pergolas that make it an ideal setting for an outdoor cocktail reception. This beautiful private village can host a total of 250 guests in its indoor and outdoor spaces.</p>

            <p className="text-brandBlack text-[16px] font-bold">Services Offered</p>
            <p className="text-brandBlack text-[16px] font-medium pb-6 text-justify">Tercero by Aldea Weddings offers several all-inclusive packages that are available for customization and are designed to suit an array of event budgets. The team at this estate will set every couple at ease by offering outstanding service. Moreover, a multitude of rental items can be supplied by the venue, such as chairs, linens, centerpieces, lounge furniture, flatware, glassware, and more. The staff that is housed by this peaceful dwelling can provide setup, cleanup, management, and security services on each couple's special day. The following specialty add-on services are also available:</p>
          </div>
        </div>
        <div className="max-w-[20.625em]">
          <div className="bg-white p-6 drop-shadow-lg rounded-2xl">
            <div className="flex flex-col gap-2 pb-9">
              <p className="text-[#525252] text-[14px] font-medium flex gap-1 items-center">
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_98_1627)">
                      <path d="M15.3334 7.99333L13.7067 6.13333L13.9334 3.67333L11.5267 3.12667L10.2667 1L8.00008 1.97333L5.73341 1L4.47341 3.12667L2.06675 3.66667L2.29341 6.13333L0.666748 7.99333L2.29341 9.85333L2.06675 12.32L4.47341 12.8667L5.73341 15L8.00008 14.02L10.2667 14.9933L11.5267 12.8667L13.9334 12.32L13.7067 9.86L15.3334 7.99333ZM12.7001 8.98L12.3267 9.41333L12.3801 9.98L12.5001 11.28L11.2334 11.5667L10.6734 11.6933L10.3801 12.1867L9.72008 13.3067L8.53341 12.7933L8.00008 12.5667L7.47341 12.7933L6.28675 13.3067L5.62675 12.1933L5.33341 11.7L4.77341 11.5733L3.50675 11.2867L3.62675 9.98L3.68008 9.41333L3.30675 8.98L2.44675 8L3.30675 7.01333L3.68008 6.58L3.62008 6.00667L3.50008 4.71333L4.76675 4.42667L5.32675 4.3L5.62008 3.80667L6.28008 2.68667L7.46675 3.2L8.00008 3.42667L8.52675 3.2L9.71341 2.68667L10.3734 3.80667L10.6667 4.3L11.2267 4.42667L12.4934 4.71333L12.3734 6.01333L12.3201 6.58L12.6934 7.01333L13.5534 7.99333L12.7001 8.98Z" fill="#323232" />
                      <path d="M6.72669 9.16667L5.18003 7.61334L4.19336 8.60667L6.72669 11.1467L11.62 6.24001L10.6334 5.24667L6.72669 9.16667Z" fill="#323232" />
                    </g>
                    <defs>
                      <clipPath id="clip0_98_1627">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </span>
                <span>
                  Woman-owned
                </span>
              </p>
              <h3 className="text-[32px] font-extrabold text-brandBlack leading-[35px]">Glacier Wedding Films for a text</h3>
              <div className="flex items-center gap-1">
                <svg
                  className="fill-[#F9A51F] h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  className="fill-[#F9A51F] h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  className="fill-[#F9A51F] h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  className="fill-[#F9A51F] h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  className="fill-[#F9A51F] h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <p className="text-brandBlack text-[14px] font-medium">5</p>
                <svg
                  className="fill-brandBlack h-1 w-1 mt-1 mx-0 lg:mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                </svg>
                <p className="text-[#107BEA] text-[14px] font-medium">126 Reviews</p>
              </div>
              <p className="text-brandBlack text-[14px] font-medium flex items-center gap-2">
                <span>
                  <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                </span>
                <span>
                  New York, NY
                </span>
              </p>
            </div>
            <div className="border-y border-gray-300 py-4 mb-5">
              <p className="text-brandBlack text-[14px] font-medium">Popular Price $3,420</p>
              <p className="text-brandBlack text-[14px] font-medium">Up to 300 guest</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <button className="bg-brandBlack text-white py-2 px-16 rounded-full text-[18px]">
                Request pricing
              </button>
              <p className="text-brandBlack text-[14px] font-medium flex items-center gap-2">
                <span>
                  <svg className="fill-[#00B127] h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                </span>
                <span>
                  Responds within 24 hours
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorDetails;