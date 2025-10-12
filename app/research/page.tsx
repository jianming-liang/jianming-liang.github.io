import { Navbar } from "@/components/navbar"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Research Section */}
      <section className="pt-24 pb-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-8 text-center">Research</h1>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">
                      Bridging divides: The impact of subway accessibility on income segregation in Beijing
                    </h2>
                    <p className="text-black font-medium">
                      <span className="underline">Jianming Liang</span>, Ling Li, and Pengjun Zhao
                    </p>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      Transportation Research Part D: Transport and Environment
                    </p>
                  </div>
                  <a
                    href="https://doi.org/10.1016/j.trd.2025.104936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 hover:underline transition-colors duration-200 mt-2 md:mt-0"
                  >
                    Published
                  </a>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Offered a new perspective on how unutilized capabilities affect individual well-being drawing on the Capabilities-Functionings-Wellbeing framework. 
                  </li>
                  <li>
                    Highlighted that improved subway accessibility promotes social integration across income groups by enhancing travel function for low-income residents and by reshaping the population composition of activity spaces.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">
                      State-led spatial restructuring and intensified workplace segregation in Beijing
                    </h2>
                    <p className="text-black font-medium">
                      <span className="underline">Jianming Liang</span>, Pengjun Zhao, and Ling Li
                    </p>
                    <p className="text-green-600 dark:text-green-400 font-medium">-</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Submitted</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Assessed the dynamic impacts of spatial restructuring on the extent of spatial mismatch and workplace segregation among low-income groups.</li>
                  <li>Examined the heterogeneous effects of spatial restructuring across low-income residents differentiated by residence–workplace relocation patterns and housing types (formal vs. informal).</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">
                      Longitudinal changes in activity-space segregation during and after the COVID-19 pandemic in China
                    </h2>
                    <p className="text-black font-medium">
                      Ling Li<sup>+</sup>, <span className="underline">Jianming Liang</span>
                      <sup>+</sup>, and Pengjun Zhao
                    </p>
                    <p className="text-green-600 dark:text-green-400 font-medium">-</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Manuscripts Completed (Not Submitted)</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>-</li>
                  <li>-</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">
                      Measuring mass displacement of urban renewal in Shenzhen, China: Using longitudinal mobile phone
                      trajectory data
                    </h2>
                    <p className="text-black font-medium">
                      Ling Li, Yiru Tan, <span className="underline">Jianming Liang</span>, and Pengjun Zhao
                    </p>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      Environment and Planning A: Economy and Space
                    </p>
                  </div>
                  <a
                    href="https://doi.org/10.1177/0308518X251336904"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 hover:underline transition-colors duration-200 mt-2 md:mt-0"
                  >
                    Published
                  </a>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Developed a measurement strategy for mass displacement caused by urban renewal using large-scale mobile signaling data.</li>
                  <li>Estimated the impacts of displacement on residents’ housing quality, accessibility, and commuting, revealing significant deteriorations, especially in central areas.</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">
                      Upward or downward mobility? Unpacking the impact of subway development on residential relocation
                      using mobile data
                    </h2>
                    <p className="text-black font-medium">
                      Ling Li, Shujin Yu, Yusi Luo, and <span className="underline">Jianming Liang</span>
                    </p>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      Transportation Research Part A: Policy and Practice
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Accepted</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Measured the impacts of new subway stations on the quality of residential moves (upward, downward, and substitute) using large-scale longitudinal mobile data and machine learning methods.</li>
                  <li>Identified simultaneous increases in downward moves among out-movers and upward moves among in-movers after station openings, with distinct temporal sequencing and spillover effects.</li>
                </ul>
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
