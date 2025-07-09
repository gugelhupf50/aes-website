export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing container-costco">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-hero mb-6">
            American Enterprise Solutions
          </h1>
          <h2 className="text-section mb-8 text-gradient-costco">
            Transform Your Document Processing
          </h2>
          <p className="text-xl text-costco-dark-gray mb-10 leading-relaxed">
            Enterprise-grade OCR and PDF data extraction solutions that replace legacy systems 
            like Oracle WebCenter Forms Recognition.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary hover-lift">
              Schedule Demo
            </button>
            <button className="btn-outline hover-lift">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-costco-light-gray">
        <div className="container-costco">
          <h2 className="text-section text-center mb-12">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-costco hover-lift animate-slide-up">
              <h3 className="text-2xl font-semibold text-costco-blue mb-3">
                Advanced OCR
              </h3>
              <p className="text-costco-dark-gray">
                State-of-the-art optical character recognition technology with 
                industry-leading accuracy for enterprise document processing.
              </p>
            </div>

            <div className="card-costco hover-lift animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-semibold text-costco-blue mb-3">
                PDF Extraction
              </h3>
              <p className="text-costco-dark-gray">
                Intelligent data extraction from complex PDF documents, forms, 
                and structured documents with advanced AI algorithms.
              </p>
            </div>

            <div className="card-costco hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-costco-blue mb-3">
                Enterprise Ready
              </h3>
              <p className="text-costco-dark-gray">
                Scalable solutions designed for enterprise workloads with 
                robust security, compliance, and integration capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-costco-gradient text-white">
        <div className="container-costco text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Modernize Your Document Processing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading enterprises who have transformed their operations with AES.
          </p>
          <button className="bg-white text-costco-blue font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-200 hover-lift">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  )
}