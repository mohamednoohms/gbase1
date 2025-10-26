import { Heart, Shield, Users, Zap } from 'lucide-react';

function AboutPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GbaseCorp</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Building the future of business through innovative technology solutions and exceptional talent.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between technology and business success, GbaseCorp has grown into a trusted partner for organizations worldwide. We understand that in today's digital landscape, the right technology and talent can make all the difference.
                </p>
                <p>
                  Over the years, we've built a reputation for delivering exceptional software consulting and staffing solutions. Our team of experienced professionals brings together deep technical expertise, industry knowledge, and a commitment to client success.
                </p>
                <p>
                  What sets us apart is our holistic approach. We don't just provide services; we become your strategic partner, invested in your long-term success and growth.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-8">
                To empower businesses worldwide by delivering innovative technology solutions and connecting them with exceptional talent, enabling sustainable growth and competitive advantage.
              </p>

              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-700">
                To be the world's most trusted partner in software consulting and staffing, known for our unwavering commitment to quality, innovation, and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency, honesty, and ethical practices in everything we do.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and creative solutions to solve complex challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in every project, every interaction, every day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership</h3>
              <p className="text-gray-600">
                We build lasting relationships based on trust, collaboration, and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GbaseCorp?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold mb-2">Proven Expertise</h3>
                <p className="text-gray-600">
                  15+ years of experience delivering successful projects across diverse industries.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  Serving clients worldwide with offices in the USA and India.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold mb-2">Quality Talent</h3>
                <p className="text-gray-600">
                  Access to a vetted network of top-tier technology professionals.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold mb-2">Client-Centric</h3>
                <p className="text-gray-600">
                  Your success is our priority, with dedicated support every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
