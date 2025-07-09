
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

// type Props = {}

const HeaderNavigation = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo bên trái */}
          <Link to="/" className="text-2xl font-bold text-blue-600">Magazines</Link>

          {/* Menu bên phải */}
          <nav className="flex gap-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to ="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <Link to ="/category" className="hover:text-blue-600">
              Category
            </Link>
            <Link to ="/products" className="hover:text-blue-600">
              Product
            </Link>
            <Link to ="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link to ="/customer" className="hover:text-blue-600">
              Customer
            </Link>
            <Link to ="/cart" className="hover:text-blue-600">
              <ShoppingCart />
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderNavigation;
