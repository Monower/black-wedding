

const VendorCategoryCard = () => {
    return (
      <div className="relative w-full">
        <img
          className="w-full h-[16.125em] rounded-2xl"
          src="/images/dummy3.jpg"
          alt="Black Wedding"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-2xl"></div>
        <p className="text-white font-bold text-center absolute bottom-2 left-4">
          Cakes
        </p>
      </div>
    );
};


export default VendorCategoryCard;