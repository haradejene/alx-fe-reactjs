import Search from "../components/Search";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex flex-col items-center justify-center px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
          GitHub User Search
        </h1>
        <p className="text-black text-lg md:text-xl">
          Search for any GitHub user and view their profile details.
        </p>
      </header>

      <main className="w-full max-w-md">
        <Search />
      </main>

      <footer className="text-center mt-10 text-gray-400 text-sm">
        &copy; 2025 Hara Dejene. Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
