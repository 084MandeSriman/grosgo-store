import { useState, createContext, useContext, ReactNode } from 'react'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'

type Page = 'landing' | 'home' | 'products' | 'product-detail' | 'cart' | 'checkout'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  unit: string
  image: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  discount?: number
}

interface CartItem extends Product {
  quantity: number
}

interface AppContextType {
  currentPage: Page
  setCurrentPage: (page: Page) => void
  selectedProduct: Product | null
  setSelectedProduct: (product: Product | null) => void
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  cartTotal: number
}

const AppContext = createContext < AppContextType | undefined > (undefined)

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}

function App() {
  const [currentPage, setCurrentPage] = useState < Page > ('landing')
  const [selectedProduct, setSelectedProduct] = useState < Product | null > (null)
  const [cart, setCart] = useState < CartItem[] > ([])

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value: AppContextType = {
    currentPage,
    setCurrentPage,
    selectedProduct,
    setSelectedProduct,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal
  }

  return (
    <AppContext.Provider value={value}>
      <div className="min-h-screen">
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'product-detail' && <ProductDetailPage />}
        {currentPage === 'cart' && <CartPage />}
        {currentPage === 'checkout' && <CheckoutPage />}
      </div>
    </AppContext.Provider>
  )
}

export default App
