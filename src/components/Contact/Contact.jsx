const Contact = () => {
  return (
    <div>
      <section className="bg-primary text-contrast min-h-[93vh] flex items-center justify-center">
        <div className="px-4 mx-auto max-w-screen-md md:w-1/2">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Turning Your Wedding Dreams into Reality
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Connect with us today. Let's create your dream wedding together.
            We're just a message away
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                placeholder="Describe your plan..."></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm bg-secondery text-primary font-medium text-center rounded-lg">
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;