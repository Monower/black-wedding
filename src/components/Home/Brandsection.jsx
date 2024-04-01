const Brandsection = () => {
    return (
      <>
        <section className="container mx-auto lg:px-24 py-10 lg:py-20">
          <p className="text-lg font-medium text-[#F9A51F] text-center pb-4 lg:pb-8">Mentioned in</p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            <img className="w-[7em] lg:w-[10em]" src="/images/brand1.png" alt="Black weddings" />
            <img className="w-[7em] lg:w-[10em]" src="/images/brand2.png" alt="Black weddings" />
            <img className="w-[7em] lg:w-[10em]" src="/images/brand3.png" alt="Black weddings" />
            <img className="w-[7em] lg:w-[10em]" src="/images/brand4.png" alt="Black weddings" />
            <img className="w-[7em] lg:w-[10em]" src="/images/brand5.png" alt="Black weddings" />
          </div>
        </section>
      </>
    );
};

export default Brandsection;