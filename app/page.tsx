export default function Home() {
  const studioName = "AL KHATT";
  const tagline = "The Caligraphy Studio";
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary-light">
      <div className="text-center space-y-4">
        <h1 className="text-6xl text-primary-dark mb-4">
          {studioName}
        </h1>
        <p className="text-xl text-secondary-dark">
          {tagline}
        </p>
        <p className="text-xl text-secondary-dark">
          Leicester's Premier Islamic Art Studio
        </p>
        <p className="text-xs text-secondary-dark">
          © {year}
        </p>
      </div>
    </main>
  )
}
// secondary dark color is not shown