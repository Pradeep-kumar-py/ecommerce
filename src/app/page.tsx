import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { products, categories } from "@/data/products";

export default function Home() {
  // Featured products - take first 8 products
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="bg-gray-50 pb-10">
      {/* Banner Section */}
      <section className="container text-gray-700 mx-auto px-4 py-3 mb-10">
        <Banner />
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl text-gray-700 font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              image={category.image}
              slug={category.slug}
            />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container text-gray-700 mx-auto px-4 mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <a
            href="/products"
            className="text-blue-600 hover:underline font-medium"
          >
            View All →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              images={product.images}
              discount={product.discount}
            />
          ))}
        </div>
      </section>

      {/* Deal Banner */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg py-8 px-6 text-white flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              End of Season Sale
            </h2>
            <p className="text-white/80 md:text-lg">
              Get up to 50% off on all products. Limited time offer!
            </p>
          </div>
          <a
            href="/deals"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
}
