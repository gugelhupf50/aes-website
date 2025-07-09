export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-costco-blue">
          American Enterprise Solutions
        </h1>
      </div>

      <div className="relative flex place-items-center">
        <h2 className="text-2xl text-center">
          Transform Your Document Processing
        </h2>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold text-costco-blue">
            Advanced OCR
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            State-of-the-art optical character recognition technology
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold text-costco-blue">
            PDF Extraction
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Intelligent data extraction from complex PDF documents
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold text-costco-blue">
            Enterprise Ready
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Scalable solutions for enterprise document processing needs
          </p>
        </div>
      </div>
    </main>
  )
}