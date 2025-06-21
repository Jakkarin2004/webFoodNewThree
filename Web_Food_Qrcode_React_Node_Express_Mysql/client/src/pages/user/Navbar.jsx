import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold">🍽️ FoodieHub</h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-orange-200 transition-colors"
              >
                หน้าแรก
              </a>

              <Link to="/">
                <a
                  href="#"
                  className="text-white hover:text-orange-200 transition-colors"
                >
                  เมนูอาหาร
                </a>
              </Link>
              <a
                href="#"
                className="text-white hover:text-orange-200 transition-colors"
              >
                เกี่ยวกับเรา
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-200 transition-colors"
              >
                ติดต่อ
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-orange-200">
                <Search size={20} />
              </button>

              <Link to="/product">
                <button className="text-white hover:text-orange-200 relative">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </Link>
              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-orange-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-white block px-3 py-2 hover:bg-orange-700 rounded"
              >
                หน้าแรก
              </a>

              <Link to="/">
                <a
                  href="#"
                  className="text-white block px-3 py-2 hover:bg-orange-700 rounded"
                >
                  เมนูอาหาร
                </a>
              </Link>
              <a
                href="#"
                className="text-white block px-3 py-2 hover:bg-orange-700 rounded"
              >
                เกี่ยวกับเรา
              </a>
              <a
                href="#"
                className="text-white block px-3 py-2 hover:bg-orange-700 rounded"
              >
                ติดต่อ
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
