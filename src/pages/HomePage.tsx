import { ArrowRight, Target, Lightbulb, Rocket, Users, Award, Globe } from 'lucide-react';

function HomePage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your Trusted Partner for Software Consulting & Staffing Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Empowering businesses worldwide through technology and talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all"
              >
                Get a Consultation
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all border-2 border-white"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Consult</h3>
              <p className="text-gray-600">
                Identify business needs and craft strategic roadmaps tailored to your goals.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Develop</h3>
              <p className="text-gray-600">
                Build effective, scalable solutions with cutting-edge technology and expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Deliver</h3>
              <p className="text-gray-600">
                Ensure sustainable success with ongoing support and innovation-driven results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-3">
                <Award size={24} />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-3">
                <Rocket size={24} />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-3">
                <Globe size={24} />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Clients Worldwide</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Driven by Innovation, Grounded in Trust
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At GbaseCorp, we blend technical excellence with business acumen to deliver solutions that drive real results. Our commitment to quality and client success sets us apart in the industry.
            </p>
            <a
              href="#about"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Learn More About Us
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals and find the right talent for your projects.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
