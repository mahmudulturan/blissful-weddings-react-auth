const AboutUs = () => {
  return (
    <div className="bg-accent">
      <div data-aos="fade-down" className="w-11/12 mx-auto py-10 pt-20">
        <div
          className="hero min-h-[35vh] rounded-md"
          style={{
            backgroundImage: "url(https://i.ibb.co/wYgsX73/about-cover.jpg)",
          }}>
          <div className="hero-overlay bg-opacity-60 rounded-md"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">About Us</h1>
              <p className="mb-5">
                At Blissful Weddings, we are passionate about crafting
                unforgettable wedding experiences. With years of expertise and a
                commitment to excellence, we take pride in turning your dreams
                into reality. Discover the story behind our dedicated team and
                the personalized approach we bring to every wedding journey
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-6 my-6">
          <div className="flex-1">
            <h1 className="text-4xl border-b-8 border-contrast">Our Mission</h1>
            <div className="font-medium text-xl space-y-6 my-6">
              <p>
                At Blissful Weddings, our mission is to transform your wedding
                dreams into extraordinary realities. We understand that your
                wedding day is a once-in-a-lifetime event, and we're committed
                to crafting unforgettable experiences that reflect your unique
                love story.
              </p>
              <p>
                With a passion for perfection and an unwavering eye for detail,
                our team of dedicated planners, designers, and coordinators work
                tirelessly to create timeless moments. We pride ourselves on
                personalized service, innovative designs, and exceeding
                expectations. Our mission is to alleviate the stress of planning
                while ensuring every aspect of your special day is executed
                seamlessly.
              </p>
              <p>
                We believe in celebrating love in all its forms and expressions.
                Whether it's an intimate gathering or a grand celebration, we
                tailor each wedding to your unique personality and preferences.
                Our goal is not only to meet your expectations but to exceed
                them. We're here to make your wedding planning journey as
                enjoyable as the big day itself, relieving you of any worries
                and letting you focus on creating beautiful memories with your
                loved ones.
              </p>
            </div>
          </div>
          <div className="flex-1 md:flex items-center justify-end">
            <img
              className="rounded-md md:w-8/12 "
              src="https://i.ibb.co/SshGy50/about.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
