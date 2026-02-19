import { useState } from 'react'
import { Plus, Star, Filter, ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useApp } from '../App'

const PRODUCTS = [
  { id: '1', name: 'Fresh Tomatoes', price: 45, originalPrice: 60, unit: '500g', image: '🍅', category: 'Vegetables', rating: 4.5, reviews: 234, inStock: true, discount: 25 },
  { id: '2', name: 'Green Spinach', price: 25, unit: '250g', image: '🥬', category: 'Vegetables', rating: 4.8, reviews: 189, inStock: true },
  { id: '3', name: 'Fresh Apples', price: 120, originalPrice: 150, unit: '1kg', image: '🍎', category: 'Fruits', rating: 4.7, reviews: 456, inStock: true, discount: 20 },
  { id: '4', name: 'Bananas', price: 50, unit: '6 pcs', image: '🍌', category: 'Fruits', rating: 4.6, reviews: 312, inStock: true },
  { id: '5', name: 'Fresh Milk', price: 65, unit: '1L', image: '🥛', category: 'Dairy', rating: 4.9, reviews: 678, inStock: true },
  { id: '6', name: 'Whole Wheat Bread', price: 40, unit: '400g', image: '🍞', category: 'Bakery', rating: 4.4, reviews: 145, inStock: true },
  { id: '7', name: 'Orange Juice', price: 85, originalPrice: 100, unit: '1L', image: '🧃', category: 'Beverages', rating: 4.6, reviews: 223, inStock: true, discount: 15 },
  { id: '8', name: 'Potato Chips', price: 30, unit: '100g', image: '🍪', category: 'Snacks', rating: 4.3, reviews: 567, inStock: true },
  { id: '9', name: 'Carrots', price: 35, unit: '500g', image: '🥕', category: 'Vegetables', rating: 4.7, reviews: 198, inStock: true },
  { id: '10', name: 'Strawberries', price: 150, originalPrice: 180, unit: '250g', image: '🍓', category: 'Fruits', rating: 4.8, reviews: 334, inStock: true, discount: 17 },
  { id: '11', name: 'Greek Yogurt', price: 55, unit: '200g', image: '🥣', category: 'Dairy', rating: 4.7, reviews: 267, inStock: true },
  { id: '12', name: 'Mixed Cookies', price: 45, unit: '200g', image: '🍪', category: 'Snacks', rating: 4.5, reviews: 423, inStock: true }
]

const CATEGORIES = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Bakery', 'Snacks', 'Beverages']

export default function ProductsPage() {
  const { setCurrentPage, setSelectedProduct, addToCart } = useApp()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')

  const filteredProducts = PRODUCTS.filter(p =>
    selectedCategory === 'All' ? true : p.category === selectedCategory
  )

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Fresh Products</h1>
          <p className="text-lg text-gray-600">Discover our wide range of quality groceries</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Categories */}
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-xl font-medium transition-all ${selectedCategory === cat
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-emerald-300'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl font-medium text-gray-700 focus:border-emerald-300 focus:outline-none"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-300 hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Image */}
              <button
                onClick={() => {
                  setSelectedProduct(product)
                  setCurrentPage('product-detail')
                }}
                className="relative w-full aspect-square bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center overflow-hidden"
              >
                <span className="text-7xl group-hover:scale-110 transition-transform">
                  {product.image}
                </span>
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    {product.discount}% OFF
                  </div>
                )}
              </button>

              {/* Content */}
              <div className="p-4">
                <button
                  onClick={() => {
                    setSelectedProduct(product)
                    setCurrentPage('product-detail')
                  }}
                  className="text-left w-full mb-2"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.unit}</p>
                </button>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                {/* Price & Add */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-gray-900">₹{product.price}</div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">₹{product.originalPrice}</div>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
