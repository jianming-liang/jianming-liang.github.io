"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { AnimatedSection, ParticleBackground, AnimatedGradientBackground } from "@/components/client-animations"
import { Play, X } from "lucide-react"
import { useState } from "react"

export default function SkillsPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const additionalSkills = [
    {
      name: "Painting",
      color: "bg-pink-500",
      image: "https://jianming-liang.github.io/assets/img/painting1.jpg",
    },
    {
      name: "Calligraphy",
      color: "bg-amber-500",
      image: "https://jianming-liang.github.io/assets/img/Calligraphy.jpg",
    },
    {
      name: "Photograph",
      color: "bg-blue-500",
      image: "https://jianming-liang.github.io/assets/img/photograph.jpg",
    },
    {
      name: "Handcraft",
      color: "bg-green-500",
      image: "https://jianming-liang.github.io/assets/img/handcraft1.jpg",
    },
    {
      name: "Frisbee",
      color: "bg-lime-500",
      image: "https://jianming-liang.github.io/assets/img/Frisbee.jpg",
    },
    {
      name: "Dessert Making",
      color: "bg-yellow-500",
      image: "https://jianming-liang.github.io/assets/img/DessertMaking.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Skills Section */}
      <section className="pt-24 pb-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-8 text-center">Technical Skills</h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <Card className="mb-12 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-2">
                    <span className="text-indigo-600 dark:text-indigo-300 text-sm font-bold">CORE</span>
                  </span>
                  My Core Skill
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
                  "During my master’s program, my mentor gave me ample room to contemplate my research style, rather than merely treating me as an all-purpose toolkit. In line with my personality and experience, the niche I aim to carve lies in operationalizing theory. Consequently, my recent work has centered on the operationalization of various theories—such as Capability Approach, Spatial Mismatch Hypothesis, and Prospect Theory—through the lens of socio-spatial segregation."
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">CRE</span>
                    </span>
                    Database Creation & Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Housing Types (5 Categories)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Socio-spatial Segregation
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Population Mobility & Accessibility
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Urban Renewal
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Residential Relocation
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Building Height Change (cm/m)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Travel-related Carbon Emissions
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Enterprise Registration/POIs
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">DEV</span>
                    </span>
                    Programming & Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      C++/C
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      SQL+PostGIS+PySpark
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      PyTorch/Scikit-learn/JAX
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      JavaScript+HTML+CSS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      MATLAB
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      IDL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Linux
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-2">
                      <span className="text-emerald-600 dark:text-emerald-300 text-sm font-bold">DAT</span>
                    </span>
                    Data Science & Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      PostgreSQL/SparkSQL/HiveSQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      Machine Learning (DL/RL)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      Web Scraping
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      ArcGIS/SuperMap/QGIS (+Arcpy)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      Econometrics (Stata/StataModels)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      OpenTripPlanner/NetworkX
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      Google Earth Engine
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      Remote Sensing Data Processing
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">OTH</span>
                    </span>
                    Other Skills & Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Cloud Platforms
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      3D Modeling
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      SAR/InSAR/D-InSAR
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      ENVI/SNAP/GeoDa
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      CloudCompare/QT Modeler
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      LiDAR/RTK/TSPS Operation
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Unmanned Aerial Vehicle (UAV)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      AutoCAD
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Skills</h2>
          </AnimatedSection>

          {/* Skill Badges */}
          <AnimatedSection direction="up" delay={0.5}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {additionalSkills.map((skill, index) => (
                <Badge
                  key={skill.name}
                  className={`${skill.color} text-white px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity`}
                >
                  {skill.name}
                </Badge>
              ))}
                <Badge
                  className="bg-indigo-500 text-white px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  etc
                </Badge>
            </div>
          </AnimatedSection>

          {/* Horizontal Scrolling Gallery */}
          <AnimatedSection direction="up" delay={0.5}>
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {[
                  {
                    key: "3d",
                    src: "https://jianming-liang.github.io/assets/img/treasure.jpg",
                    caption: "3D Modeling",
                    isVideoThumb: true,
                  },
                  {
                    key: "uav",
                    src: "https://jianming-liang.github.io/assets/img/UAV.jpg",
                    caption: "UAV",
                  },
                  {
                    key: "photograph",
                    src: "https://jianming-liang.github.io/assets/img/photograph.jpg",
                    caption: "Photography",
                  },
                  {
                    key: "calligraphy",
                    src: "https://jianming-liang.github.io/assets/img/Calligraphy.jpg",
                    caption: "Calligraphy",
                  },
                  {
                    key: "handcraft1",
                    src: "https://jianming-liang.github.io/assets/img/handcraft1.jpg",
                    caption: "Handcraft",
                  },
                  {
                    key: "handcraft2",
                    src: "https://jianming-liang.github.io/assets/img/handcraft2.jpg",
                    caption: "Traditional Crafts",
                  },
                  {
                    key: "painting1",
                    src: "https://jianming-liang.github.io/assets/img/painting1.jpg",
                    caption: "Painting",
                  },
                  {
                    key: "painting2",
                    src: "https://jianming-liang.github.io/assets/img/painting2.jpg",
                    caption: "Sketching",
                  },
                  {
                    key: "frisbee",
                    src: "https://jianming-liang.github.io/assets/img/Frisbee.jpg",
                    caption: "Frisbee",
                  },
                  {
                    key: "dessert",
                    src: "https://jianming-liang.github.io/assets/img/DessertMaking.jpg",
                    caption: "Dessert Making",
                  },
                ].map((item) => (
                  <div key={item.key} className="flex-shrink-0">
                    <div
                      className={`w-72 h-60 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative cursor-${item.isVideoThumb ? "pointer" : "auto"}`}
                      onClick={() => item.isVideoThumb && setIsVideoOpen(true)}
                    >
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {item.isVideoThumb && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                          <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
                            <Play className="w-8 h-8 text-green-600" />
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">{item.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>
            <div style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 */ }}>
              <iframe
                src="https://www.youtube.com/embed/wcivrTqHzws"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      )}


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
