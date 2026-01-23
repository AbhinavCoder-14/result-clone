import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* University Info */}
      <div className="text-center py-4">
        <span className="block text-lg font-semibold text-gray-800">
          Guru Gobind Singh Indraprastha University
        </span>
        <span className="block text-sm text-gray-600">
          Dwarka Sector 16-C, New Delhi
        </span>
        <span className="block text-sm font-medium text-indigo-600 mt-1">
          Examination Division
        </span>
      </div>

      {/* Navigation */}
      <nav className="border-t bg-[#333]">
        <ul className="flex justify-center gap-8 py-3 text-sm font-medium">
          <li>
            <Link
              href="/student/home"
              className="text-white hover:text-indigo-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/student/profile"
              className="text-white hover:text-indigo-600 transition"
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              href="/change-password"
              className="text-white hover:text-indigo-600 transition"
            >
              Change Password
            </Link>
          </li>

          <li>
            <Link
              href="/logout"
              className="text-white hover:text-red-700 transition"
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
