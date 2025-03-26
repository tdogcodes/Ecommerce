"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { Button } from "./ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-2xl hover:text-blue-600 font-bold tracking-tight transition-all duration-300 ease-in-out"
        >
          Leftwing Patriots
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 font-semibold transition-all duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600 font-semibold transition-all duration-300 ease-in-out">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600 font-semibold transition-all duration-300 ease-in-out">
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-8  w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </Button>
        </div>
      </div>
      {/* Mobile Navibar */}
      {mobileOpen && (
        <nav className={`
          items-center justify-end
          md:hidden 
          bg-white shadow-md 
          transform 
          transition-all duration-300 ease-in-out
          ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
          <ul className="flex flex-col space-y-2 px-4 py-2 items-end">
            <li>
              <Link href="/" className="block hover:text-blue-600 font-semibold text-right pr-6 w-full">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-blue-600 font-semibold text-right pr-6 w-full">
                Products
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="block hover:text-blue-600 font-semibold text-right pr-6 w-full">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};