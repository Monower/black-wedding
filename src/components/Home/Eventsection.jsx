import EventCard from "../../components/Event/EventCard";

const Eventsection = () => {
  const data = [
    {
      id: 1,
      title: 'Unity Through Diversity: A Virtual Wedding Expo Celebrating Cultures',
      image: '/images/event1.png',
      url: "#",
    },
    {
      id: 2,
      title: 'Unity Through Diversity: A Virtual Wedding Expo Celebrating Cultures',
      image: '/images/event2.png',
      url: "#",
    },
    {
      id: 3,
      title: 'Unity Through Diversity: A Virtual Wedding Expo Celebrating Cultures',
      image: '/images/event3.png',
      url: "#",
    },
  ];

  return (
    <>
      <section className="container mx-auto px-4 lg:px-40 pb-10 lg:pb-20">
        <h3 className="text-3xl lg:text-5xl font-extrabold text-center text-brandBlack pb-4">
          Upcoming Events
        </h3>
        <p className="text-xs lg:text-lg font-semibold text-center text-brandBlack pb-5 lg:pb-10">
          Unlock a World of Inspiration: Explore Our Upcoming Events Tailored to
          Celebrate Love and Diversity.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {
            data?.map((item, index) => { 
              return (
                <EventCard key={index} title={item?.title} image={item?.image} url={item?.url} />
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Eventsection;
