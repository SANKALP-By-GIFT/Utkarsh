import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-md">
        <nav 
          className="container mx-auto px-6 py-4 flex justify-between items-center"
          aria-label="Main Navigation"
        >
          <h1 className="text-xl font-bold tracking-wide">
            Tech Insights
          </h1>

          <div className="space-x-6">
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `hover:text-blue-400 transition ${
                  isActive ? "text-blue-400 font-semibold" : ""
                }`
              }
            >
              Posts
            </NavLink>

            <NavLink
              to="/add"
              className={({ isActive }) =>
                `hover:text-blue-400 transition ${
                  isActive ? "text-blue-400 font-semibold" : ""
                }`
              }
            >
              Add Post
            </NavLink>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main
        className="container mx-auto px-6 py-8 flex-1"
        role="main"
      >
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-4 text-sm">
        © 2026 Tech Insights Blog Platform
      </footer>
    </div>
  );
};

export default Layout;
