import { useState, createContext, useContext, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import CategoryPage from './pages/CategoryPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'
import FAQsPage from './pages/FAQsPage'
import { supabase } from './lib/supabase'

type Page = 
  | 'landing' 
  | 'home' 
  | 'products' 
  | 'product-detail' 
  | 'cart' 
  | 'checkout' 
  | 'category' 
  | 'about' 
  | 'blog' 
  | 'contact' 
  | 'careers' 
  | 'faqs'

export interface Product {
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
  brand?: string
  is_offer?: boolean
  is_best_seller?: boolean
  is_combo?: boolean
}

export interface CartItem extends Product {
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
  relatedProducts: Product[]
  setRelatedProducts: (products: Product[]) => void
  sectionProducts: Product[]
  setSectionProducts: (products: Product[]) => void
  fullProductList: Product[]
  setFullProductList: (products: Product[]) => void
  currentCategory: string | null
  setCurrentCategory: (category: string | null) => void
  targetSection: string | null
  setTargetSection: (section: string | null) => void
  loading: boolean
  errorMsg: string | null
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [sectionProducts, setSectionProducts] = useState<Product[]>([])
  const [fullProductList, setFullProductList] = useState<Product[]>([])
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)
  const [targetSection, setTargetSection] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // Scroll to top whenever the page changes (unless we're going home with a target section)
  useEffect(() => {
    if (!(currentPage === 'home' && targetSection)) {
      window.scrollTo(0, 0)
    }
  }, [currentPage, targetSection])

  // 🔥 Fetch products from Supabase on initial load
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setErrorMsg(null)

      const { data, error } = await supabase.from('products').select('*')

      if (error) {
        console.error('Supabase fetch error:', error)
        setErrorMsg('Failed to load products.')
        setFullProductList([])
        setLoading(false)
        return
      }

      if (!data || data.length === 0) {
        setErrorMsg('No products found in database.')
        setFullProductList([])
        setLoading(false)
        return
      }

      const products: Product[] = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        originalPrice: item.original_price,
        unit: item.unit,
        image: item.image,
        category: item.category,
        rating: item.rating,
        reviews: item.reviews,
        inStock: item.in_stock,
        discount: item.discount,
        brand: item.brand,
        is_offer: item.is_offer,
        is_best_seller: item.is_best_seller,
        is_combo: item.is_combo,
      }))

      setFullProductList(products)
      setLoading(false)
    }

    fetchProducts()
  }, [])

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
    cartTotal,
    relatedProducts,
    setRelatedProducts,
    sectionProducts,
    setSectionProducts,
    fullProductList,
    setFullProductList,
    currentCategory,
    setCurrentCategory,
    targetSection,
    setTargetSection,
    loading,
    errorMsg,
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
        {currentPage === 'category' && <CategoryPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'careers' && <CareersPage />}
        {currentPage === 'faqs' && <FAQsPage />}
      </div>
    </AppContext.Provider>
  )
}

export default App