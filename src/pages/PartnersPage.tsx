import { Building2, GraduationCap, Network } from 'lucide-react';

function PartnersPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partners</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Trusted by Industry Leaders
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Building Success Together</h2>
            <p className="text-lg text-gray-700">
              Our partnerships span across technology vendors, academic institutions, and industry leaders. Together, we create value and drive innovation for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Technology Partners</h3>
              <p className="text-gray-600">
                Collaborating with leading technology companies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Partners</h3>
              <p className="text-gray-600">
                Partnering with universities to foster talent development and research innovation.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Network size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Partners</h3>
              <p className="text-gray-600">
                Working with industry leaders across sectors to drive digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-32 hover:shadow-md transition-shadow"
              >
                <div className="text-gray-400 text-center">
                  <Building2 size={48} className="mx-auto mb-2" />
                  <div className="text-sm font-medium">Partner Logo</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're always looking for strategic partnerships that create mutual value. If you're interested in collaborating with GbaseCorp, we'd love to hear from you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Technology Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Academic Institutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Industry Collaborations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;
