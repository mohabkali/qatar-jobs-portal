export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Qatar Jobs Portal</h1>
      <p className="text-lg text-gray-600 mb-6">
        Find jobs or hire talent in Qatar — fast and easy.
      </p>
      <a
        href="/register"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Get Started
      </a>
    </main>
  );
}
