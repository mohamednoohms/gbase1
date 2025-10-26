import { Code, Palette, FolderKanban, Bug, ArrowRight } from 'lucide-react';

function CareersPage() {
  const openings = [
    {
      category: 'Developers',
      icon: Code,
      positions: [
        'Senior Full Stack Developer',
        'Frontend Developer (React)',
        'Backend Developer (Node.js)',
        'Mobile Developer (React Native)',
        'DevOps Engineer',
        'Cloud Solutions Architect',
      ],
    },
    {
      category: 'Designers',
      icon: Palette,
      positions: [
        'UI/UX Designer',
        'Product Designer',
        'Graphic Designer',
      ],
    },
    {
      category: 'Project Management',
      icon: FolderKanban,
      positions: [
        'Project Manager',
        'Scrum Master',
        'Product Owner',
        'Technical Program Manager',
      ],
    },
    {
      category: 'QA Engineers',
      icon: Bug,
      positions: [
        'QA Engineer',
        'Test Automation Engineer',
        'Performance Test Engineer',
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at GbaseCorp</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We connect tech professionals with leading projects. Join our network of talented individuals shaping the future of technology.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-lg text-gray-700">
              At GbaseCorp, we believe in empowering our team members to do their best work and grow their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">Flexible</div>
              <div className="text-gray-600">Work arrangements including remote options</div>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">Growth</div>
              <div className="text-gray-600">Continuous learning and career development</div>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">Impact</div>
              <div className="text-gray-600">Work on meaningful projects that matter</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openings.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>

                <div className="space-y-3">
                  {category.positions.map((position, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span className="font-medium text-gray-700">{position}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        Apply
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Don't See Your Role?</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to GbaseCorp's success.
              </p>
              <a
                href="mailto:careers@gbasecorp.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Send Your Resume
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Hiring Process</h2>
            <p className="text-lg text-gray-700 mb-12">
              We've designed a straightforward, respectful hiring process that helps us find the right fit for both parties.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Apply</h3>
                <p className="text-sm text-gray-600">Submit your application and resume</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Screen</h3>
                <p className="text-sm text-gray-600">Initial conversation with our team</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Interview</h3>
                <p className="text-sm text-gray-600">Technical and cultural fit assessment</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold mb-2">Offer</h3>
                <p className="text-sm text-gray-600">Welcome to the team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
