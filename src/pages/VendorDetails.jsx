const VendorDetails = () => {
    return (
      <>
        <section className="container mx-auto flex justify-center gap-2 my-[8rem]">
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
      </>
    );
};

export default VendorDetails;