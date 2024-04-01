import EventCard from "../../components/Event/EventCard";

const Eventsection = () => {
  return (
    <>
      <section className="container mx-auto px-4 lg:px-40 pb-10 lg:pb-20">
        <h3 className="text-3xl lg:text-5xl font-extrabold text-center text-brandBlack pb-4">
          Upcoming Events
        </h3>
        <p className="text-xs lg:text-lg font-semibold text-center text-brandBlack pb-10">
          Unlock a World of Inspiration: Explore Our Upcoming Events Tailored to
          Celebrate Love and Diversity.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <EventCard />
          <div className="border border-gray-300 p-3 lg:p-6 rounded-3xl flex flex-col justify-center items-center">
            <div className="flex items-center gap-2 pb-3">
              <svg
                className="w-4 h-4 fill-gray2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
              </svg>
              <p className="text-gray2 text-sm">VIRTUAL EVENT</p>
            </div>
            <h3 className="text-center text-base lg:text-xl font-bold pb-4 lg:pb-8">
              Unity Through Diversity: A Virtual Wedding Expo Celebrating
              Cultures
            </h3>
            <img
              className="w-full rounded-lg pb-3 lg:pb-6"
              src="/images/event1.png"
              alt="Black weddings"
            />
            <a
              href="#"
              className="text-brandBlack bg-white border border-gray2 px-8 py-2 inline-flex items-center justify-center gap-2 rounded-full text-sm"
            >
              <span>View details</span>
              <span>
                <svg
                  className="w-6 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="border border-gray-300 p-3 lg:p-6 rounded-3xl flex flex-col justify-center items-center">
            <div className="flex items-center gap-2 pb-3">
              <svg
                className="w-4 h-4 fill-gray2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
              </svg>
              <p className="text-gray2 text-sm">VIRTUAL EVENT</p>
            </div>
            <h3 className="text-center text-base lg:text-xl font-bold pb-4 lg:pb-8">
              Unity Through Diversity: A Virtual Wedding Expo Celebrating
              Cultures
            </h3>
            <img
              className="w-full rounded-lg pb-3 lg:pb-6"
              src="/images/event2.png"
              alt="Black weddings"
            />
            <a
              href="#"
              className="text-brandBlack bg-white border border-gray2 px-8 py-2 inline-flex items-center justify-center gap-2 rounded-full text-sm"
            >
              <span>View details</span>
              <span>
                <svg
                  className="w-6 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="border border-gray-300 p-3 lg:p-6 rounded-3xl flex flex-col justify-center items-center">
            <div className="flex items-center gap-2 pb-3">
              <svg
                className="w-4 h-4 fill-gray2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
              </svg>
              <p className="text-gray2 text-sm">VIRTUAL EVENT</p>
            </div>
            <h3 className="text-center text-base lg:text-xl font-bold pb-4 lg:pb-8">
              Unity Through Diversity: A Virtual Wedding Expo Celebrating
              Cultures
            </h3>
            <img
              className="w-full rounded-lg pb-3 lg:pb-6"
              src="/images/event3.png"
              alt="Black weddings"
            />
            <a
              href="#"
              className="text-brandBlack bg-white border border-gray2 px-8 py-2 inline-flex items-center justify-center gap-2 rounded-full text-sm"
            >
              <span>View details</span>
              <span>
                <svg
                  className="w-6 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eventsection;
