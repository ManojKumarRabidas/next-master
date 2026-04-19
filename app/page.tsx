export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="py-12 border-b">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to NEXT_MASTER 🚀
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          This is a scalable full-stack template built with Next.js,
          TypeScript, and MongoDB. Use this as a foundation for your
          complex applications.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl bg-white shadow-sm">
          <h2 className="font-bold text-lg mb-2">📁 Scalable Folders</h2>
          <p className="text-gray-600 text-sm">
            Organized by services, models, and components for large-scale growth.
          </p>
        </div>
        <div className="p-6 border rounded-xl bg-white shadow-sm">
          <h2 className="font-bold text-lg mb-2">🍃 MongoDB Ready</h2>
          <p className="text-gray-600 text-sm">
            Pre-configured singleton connection and Mongoose schemas.
          </p>
        </div>
        <div className="p-6 border rounded-xl bg-white shadow-sm">
          <h2 className="font-bold text-lg mb-2">🔐 Auth Prepared</h2>
          <p className="text-gray-600 text-sm">
            Routes grouped for authentication and protected dashboard areas.
          </p>
        </div>
      </section>
    </div>
  );
}