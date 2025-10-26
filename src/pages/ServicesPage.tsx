import { Briefcase, Code, Layers, Users, ArrowRight } from 'lucide-react';

function ServicesPage() {
  const services = [
    {
      icon: Briefcase,
      title: 'Software Consulting',
      description: 'Strategic guidance to align technology with your business objectives. We help you make informed decisions about architecture, technology stack, and implementation roadmaps.',
      features: [
        'Business analysis and requirements gathering',
        'Architecture planning and design',
        'Technology stack evaluation',
        'Digital transformation strategy',
      ],
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'End-to-end development of tailored solutions that meet your unique business needs. From concept to deployment, we build software that drives results.',
      features: [
        'Web and mobile application development',
        'Cloud-native solutions',
        'API development and integration',
        'Product design and UX optimization',
      ],
    },
    {
      icon: Layers,
      title: 'Application Modernization',
      description: 'Transform legacy systems into modern, scalable applications. We help you leverage the latest technologies while preserving your valuable business logic.',
      features: [
        'Legacy system assessment',
        'Migration to cloud platforms',
        'Microservices architecture',
        'Performance optimization',
      ],
    },
    {
      icon: Users,
      title: 'IT Staff Augmentation',
      description: 'Access top-tier technology professionals on-demand. Scale your team quickly with skilled experts who integrate seamlessly with your existing processes.',
      features: [
        'Vetted software engineers',
        'Project managers and architects',
        'QA and testing specialists',
        'Flexible engagement models',
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Key Capabilities</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-12">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Discover</h3>
                <p className="text-sm text-gray-600">
                  Understand your business goals and technical requirements
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Design</h3>
                <p className="text-sm text-gray-600">
                  Create a comprehensive solution architecture and roadmap
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Develop</h3>
                <p className="text-sm text-gray-600">
                  Build and test your solution with agile methodologies
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold mb-2">Deploy</h3>
                <p className="text-sm text-gray-600">
                  Launch and support your solution for continued success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how we can help you achieve your goals.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            Get a Consultation
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
