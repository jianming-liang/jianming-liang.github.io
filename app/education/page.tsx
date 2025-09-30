import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Education Section */}
      <section className="pt-24 pb-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-8 text-center">Education & Awards</h1>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300 border-l-4 border-green-600">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">MSc, Urban and Regional Planning</h3>
                    <p className="text-green-600 dark:text-green-400 font-medium">Peking University</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2023-Present</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Relevant Courses:</h4>
                  <div className="w-[80%]">
                    <div className="flex flex-wrap gap-2">
                      {/* <Badge variant="secondary" className="animate-pulse">*/}
                      <Badge variant="secondary">Geography Theory and Methods
                      </Badge>
                      <Badge variant="secondary">Human Geography</Badge>
                      <Badge variant="secondary">
                        The Global Climate Change and Carbon Neutrality
                      </Badge>
                      <Badge variant="secondary">Transportation Planning and Policy</Badge>
                      <Badge variant="secondary">
                        The Study of Urban Land and Land Use Planning
                      </Badge>
                      <Badge variant="secondary">Urban Renewal Topics</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300 border-l-4 border-green-600">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">BEng, Remote Sensing</h3>
                    <p className="text-green-600 dark:text-green-400 font-medium">Sun Yat-sen University</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2019-2023</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Relevant Courses:</h4>
                  <div className="w-[80%]">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">
                        Artificial Intelligence and Machine Learning
                      </Badge>
                      <Badge variant="secondary">Database Principle</Badge>
                      <Badge variant="secondary">
                        Science Compute and Data Visualization
                      </Badge>
                      <Badge variant="secondary">Computer Vision and Pattern Recognition</Badge>
                      <Badge variant="secondary">
                        Digital Topography
                      </Badge>
                      <Badge variant="secondary">Microwave Remote Sensing</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center">
            <AnimatedSection direction="right" delay={0.3}>
              <h2 className="text-2xl font-bold mb-6 text-left">Selected Awards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-semibold">Merit Student Award</h3>
                  <p className="text-gray-600 dark:text-gray-400">Peking University</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-semibold">Xie Yalong Scholarship</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Chaoshan Chamber of Commerce & Peking University
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-semibold">First Prize of the High-Precision Mapping Contest for Autonomous Vehicles</h3>
                  <p className="text-gray-600 dark:text-gray-400">The 6th National LiDAR Conference (China)</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-semibold">Excellence Award of the Mapping Category</h3>
                  <p className="text-gray-600 dark:text-gray-400">The 19th SuperMap GIS Contest (China)</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center"></div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Jianming Liang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
