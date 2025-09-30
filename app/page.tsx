import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column*/}
            <div className="md:col-span-2">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.4]">
                    I am a Master’s student in Urban and Regional Planning at Peking University, supervised by Asst. Prof. Ling Li and Prof. Pengjun Zhao. My strength lies in a solid theoretical foundation and the ability to interpret original theoretical texts. In studying social segregation, I have operationalized the Capability Approach, the Spatial Mismatch Hypothesis, and Prospect Theory.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.4]">
                    With a dual background in urban planning and remote sensing, I effectively collect and apply multi-source data and AI techniques in research on sustainable urbanization, transportation planning, and social equity. I am also proficient in employing specialized datasets such as SAR, point clouds, and street-view imagery in urban and environmental studies.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column*/}
            <div className="md:col-span-1">
              <AnimatedSection direction="right" delay={0.4}>
                <div className="ml-0 md:ml-6">
                  <h3 className="text-xl font-semibold mb-4">Research Interests</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start group">
                      <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-gray-700 dark:text-gray-300">Social segregation</span>
                    </li>
                    <li className="flex items-start group">
                      <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-gray-700 dark:text-gray-300">Urban economics</span>
                    </li>
                    <li className="flex items-start group">
                      <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-gray-700 dark:text-gray-300">Transportation equity</span>
                    </li>
                    <li className="flex items-start group">
                      <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-gray-700 dark:text-gray-300">Residential mobility</span>
                    </li>
                    <li className="flex items-start group">
                      <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-gray-700 dark:text-gray-300">Sustainable urbanization</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
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
