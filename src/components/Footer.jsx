import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-green-300 text-center py-6 border-t border-green-800">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Prem Chandra Prasad. Built with ❤️
      </p>
    </footer>
  );
}
