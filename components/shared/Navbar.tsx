import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 rounded-2xl shadow-lg mx-8 mt-4">
      <div className="flex justify-between items-center">
        <div className="flex-1"></div>
        <Link href="/" className="text-white text-2xl font-bold transition-transform hover:scale-105">
          NestMate
        </Link>
        <div className="flex-1 flex justify-end">
          <Link href="/signup" className="text-white hover:text-gray-300 transition-colors">
            Sign Up
          </Link>
          <span className="text-white mx-2">/</span>
          <Link href="/signin" className="text-white hover:text-gray-300 transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
