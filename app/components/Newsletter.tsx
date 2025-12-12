export default function Newsletter() {
  return (
    <section className="mt-16 bg-blue-600 py-12 text-white text-center">
      <h2 className="text-2xl font-bold">Stay Updated</h2>
      <p className="mt-2">Subscribe to our newsletter for the latest updates and resources.</p>
      <form className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-auto px-4 py-2 text-gray-800 rounded-l-md"
        />
        <button className="bg-white text-blue-600 px-6 py-2 rounded-r-md hover:bg-gray-100">
          Subscribe
        </button>
      </form>
    </section>
  );
}