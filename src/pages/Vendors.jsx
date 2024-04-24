import VendorSearch from "../components/Vendor/VendorSearch";


const Vendors = () => {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-rose-100/70  to-white ">
        <h3 className="text-[48px] font-extrabold leading-[50px] text-center text-brandBlack pb-5 text-shadow-2xl ">
          Seek Out Top-Rated Vendors <br /> for Every Wedding Theme
        </h3>
        <div>
          <VendorSearch />
          <p>Search by vendor name</p>
        </div>
      </section>
    );
};

export default Vendors;