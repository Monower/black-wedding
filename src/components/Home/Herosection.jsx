

const Herosection = () => {
    return (
      <>
        <section className="bg-[url('/images/bg1.png')]  bg-cover min-h-screen flex flex-col items-center">
          <div className="w-[40%] flex flex-col gap-6 pt-48">
            <h3 className="text-white text-6xl text-center font-bold">
              Empower <br /> Your Love Story
            </h3>
            <p className="text-white text-center text-xl">
              Discover Minority Vendors, Plan with Ease, and <br /> Celebrate
              Culture on Your Special Day
            </p>
            <form className="bg-white flex items-center rounded-md">
              <fieldset className="w-full px-4  border-r">
                <legend>
                  <label htmlFor="category" className="text-sm text-[#151623]">
                    Category
                  </label>
                </legend>
                <select
                  name="category"
                  id="category"
                  className="w-full bg-white cursor-pointer text-xl text-[#151623]"
                >
                  <option value="rentals">Rentals</option>
                  <option value="option1">Option1</option>
                  <option value="option2">Option2</option>
                </select>
              </fieldset>
              <fieldset className="w-full px-4">
                <legend>
                  <label htmlFor="location" className="text-sm text-[#151623]">
                    Location
                  </label>
                </legend>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="New York, NY"
                  className="w-full bg-white focus:outline-none focus:ring-0 text-xl text-[#151623]"
                />
              </fieldset>
              <button className="bg-[#BC7155] p-6 rounded-r-md">
                <svg
                  className="fill-white h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </form>
          </div>
          <div className="pt-80 py-12 container mx-auto px-[9.5em] flex items-center gap-10">
            <div className="border-r border-white">
              <p className="font-bold text-white pb-2">Plan your events</p>
              <p className="text-white pr-8 leading-5 text-sm">
                Discover Minority Vendors, Plan with Ease, and Celebrate Culture
                on Your Special Day
              </p>
            </div>
            <div className="border-r border-white">
              <p className="font-bold text-white pb-2">Plan your events</p>
              <p className="text-white pr-8 leading-5">
                Discover Minority Vendors, Plan with Ease, and Celebrate Culture
                on Your Special Day
              </p>
            </div>
            <div>
              <p className="font-bold text-white pb-2">Plan your events</p>
              <p className="text-white pr-8 leading-5">
                Discover Minority Vendors, Plan with Ease, and Celebrate Culture
                on Your Special Day
              </p>
            </div>
          </div>
        </section>
      </>
    );
};


export default Herosection;