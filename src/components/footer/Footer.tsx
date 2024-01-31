// components/Footer.tsx
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-950 text-white py-6 bottom-0">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <nav className="mb-4">
          <Link className="text-gray-300 hover:text-white mx-3" href="/">
            Home
          </Link>
          <Link className="text-gray-300 hover:text-white mx-3" href="/about">
            About Us
          </Link>
          <Link className="text-gray-300 hover:text-white mx-3" href="/contact">
            Contact Us
          </Link>
        </nav>

        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/melihzafer_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://github.com/MelihZafer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/melihzafer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-4">&copy; 2024 FitWell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
