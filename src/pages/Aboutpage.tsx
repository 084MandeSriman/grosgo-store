const AboutPage = () => {
  return (
    <div className="px-6 md:px-16 py-12">
      <h1 className="text-4xl font-bold text-green-600 mb-6">About Grosgo</h1>

      <p className="text-gray-600 mb-6">
        Welcome to Grosgo Store – your one-stop destination for fresh groceries,
        organic vegetables, juicy fruits, and daily essentials delivered to your
        doorstep.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🌿 Our Mission</h2>
      <p className="text-gray-600">
        To provide fresh, high-quality groceries at affordable prices while
        ensuring a seamless and fast online shopping experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">🚚 Fast Delivery</h2>
      <p className="text-gray-600">
        We ensure same-day delivery with carefully packed products to maintain
        freshness and quality.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">💚 Why Choose Us?</h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Farm fresh vegetables & fruits</li>
        <li>Best price guarantee</li>
        <li>Easy & secure checkout</li>
        <li>Fast home delivery</li>
        <li>24/7 customer support</li>
      </ul>
    </div>
  );
};

export default AboutPage;
