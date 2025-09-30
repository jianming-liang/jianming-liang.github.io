"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { motion } from "framer-motion"

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.6 }}>
      {children}
    </motion.div>
  )
}

function extractYouTubeID(url: string | null | undefined): string | null {
  if (!url) return null
  const patterns = [
    /youtu\.be\/([^\?&\/]+)/,
    /youtube\.com\/watch\?v=([^\?&\/]+)/,
    /youtube\.com\/embed\/([^\?&\/]+)/,
  ]
  for (const re of patterns) {
    const m = url.match(re)
    if (m && m[1]) return m[1]
  }
  return null
}

function isYouTube(url: string | null | undefined): boolean {
  return !!extractYouTubeID(url)
}

function VideoModal({
  isOpen,
  onClose,
  videoSrc,
}: {
  isOpen: boolean
  onClose: () => void
  videoSrc: string | null
}) {
  if (!isOpen) return null

  const isYT = isYouTube(videoSrc)
  const ytId = isYT ? extractYouTubeID(videoSrc) : null

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close video"
        >
          <X size={24} />
        </button>

        {isYT && ytId ? (
          // YouTube -> iframe embed (responsive)
          <div style={{ position: "relative", paddingTop: "56.25%" /* 16:9 */ }}>
            <iframe
              src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: 8,
              }}
            />
          </div>
        ) : (
          <video controls autoPlay className="w-full h-auto rounded-lg">
            <source src={videoSrc ?? ""} type="video/mp4" />
            Your browser does not support this video. Please contact 2301212637@stu.pku.edu.cn for more information.
          </video>
        )}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const projects = [
    {
      id: 1,
      title: "Socio-Spatial Segregation in Chinese Metropolises",
      content:
        "Used housing type as a proxy for group differentiation to calculate exposure indices representing socio-spatial segregation, and further explored how different theoretical perspectives explain its occurrence and underlying mechanisms.",
      image: "assets/img/p1.png",
      videoSrc: "https://youtu.be/QnwM_R-3Ggg",
      badges: ["Social Equity","Database Creation", "Graduate Research", "Playable"],
      hasVideo: true,
    },
    {
      id: 2,
      title: "The Full Life Cycle of Urban Renewal Projects in Shenzhen",
      content:
        "Collected one of the most comprehensive datasets on urban regeneration to support research on its lifecycle, social impacts, and the gap between planning and practice.",
      image: "assets/img/p2.png",
      videoSrc: "https://youtu.be/oWUOjBZ8_1k",
      badges: ["Urbanization","Database Creation", "Graduate Research", "Playable"],
      hasVideo: true,
    },
    {
      id: 3,
      title: "Sentiment Analysis of Chinese Social Media on Legal Cases Concerning Women’s Rights",
      content:
        "Applied NLP to analyze legal documents and social media comments on women’s rights cases, exploring the state of gender equity and legislation in China.",
      image: "assets/img/p3.jpg",
      videoSrc: "https://youtu.be/LLhLXr2b1zo",
      badges: ["Social Equity", "Machine Learning", "Graduate Research", "Playable"],
      hasVideo: true,
    },
    {
      id: 4,
      title: "Point Cloud Generation and Processing Based on Stereo Image Measurement",
      content:
        "Developed C++ implementations to generate point clouds from stereo images, with functions for visualization, ground filtering, denoising, registration, and segmentation.",
      image: "assets/img/p4.png",
      videoSrc: "https://youtube.com/embed/pBYxUZmseo0",
      badges: ["Remote Sensing","Digital Building", "Ungraduate Research", "Playable"],
      hasVideo: true,
    },
    {
      id: 5,
      title: "Mechanisms of Behavioral Response to Urbanization Processes",
      content:
        "Investigated the mechanisms through which urbanization affects residents’ residential-work-leisure spatial patterns by examining mobility, accessibility, and residence quality before and after relocation.",
      image: "assets/img/p5.png",
      badges: ["Urbanization","Database Creation", "Graduate Research"],
      hasVideo: false,
    },
    {
      id: 6,
      title: "Travel-Related Carbon Emission Estimation",
      content:
        "Estimated carbon emissions of five travel modes (walking, cycling, private car, bus, subway) and tracked long-term emission changes of anonymous users.",
      image: "assets/img/p6.png",
      badges: ["Environmental Concern","Transportation","Database Creation", "Graduate Research"],
      hasVideo: false,
    },
    {
      id: 7,
      title: "Urban Transport Network Reconstruction and Optimization Strategies",
      content:
        "Digitized road and subway networks of major Chinese cities, calculated multimodal transport accessibility, and provided optimization suggestions using real traffic flow data.",
      image: "assets/img/p7.png",
      badges: ["Transportation","Database Creation", "Graduate Research"],
      hasVideo: false,
    },
    {
      id: 8,
      title: "Urban Land Use Identification and Monitoring with Multi-Source Heterogeneous Spatial Big Data",
      content:
        "Utilized geospatial large models to identify spatial and attribute features of urban land use, enabling dynamic monitoring at the city scale.",
      image: "assets/img/p8.png",
      badges: ["Urbanization", "Machine Learning", "Remote Sensing", "Graduate Research"],
      hasVideo: false,
    },
    {
      id: 9,
      title: "Shadow-Based Urban Building Height Inversion with ICESat-2",
      content:
        "Retrieved building heights based on building locations, solar elevation angles, and shadow lengths, and generated city-scale building height maps using ICESat-2 footprints as control points.",
      image: "assets/img/p9.jpg",
      badges: ["Digital Building", "Remote Sensing", "Ungraduate Research"],
      hasVideo: false,
    },
    {
      id: 10,
      title: "Environmental Analysis of the Zhengzhou Flood Disaster Using D-InSAR",
      content:
        "Processed multi-temporal SAR range images before and after the Zhengzhou flood with D-InSAR to monitor centimeter-scale vertical ground deformations caused by flooding, groundwater loss, and building construction.",
      image: "assets/img/p10.png",
      badges: ["Environmental Concern","Urbanization", "Remote Sensing", "Ungraduate Research"],
      hasVideo: false,
    },
    {
      id: 11,
      title: "Street-View Segmentation and Building Function Recognition",
      content:
        "Applied ResNet to segment individual buildings from Baidu Map street-view image collections, and identified building types and functions based on floor numbers, signage, and geographic location.",
      image: "assets/img/p11.png",
      badges: ["Digital Building", "Machine Learning", "Remote Sensing", "Ungraduate Research"],
      hasVideo: false,
    },
    {
      id: 12,
      title: "Video-Based 3D Human Pose Estimation and Motion Correction",
      content:
        "Utilized VideoPose3D to extract 3D human pose information from input videos, evaluated motion accuracy by comparing joint angles with standard skeletal models, and provided correction recommendations.",
      image: "assets/img/p12.png",
      badges: ["Machine Learning", "Ungraduate Research"],
      hasVideo: false,
    },
    {
      id: 13,
      title: "Fieldwork on the ZHONG SHAN DA XUE JI DI Icebreaker",
      content:
        "Conducted a 3-day field study aboard the ZHONG SHAN DA XUE JI DI icebreaker, including nautical chart reading, tidal observation, radar navigation analysis, UAV deployment, ship structural inspection, and 3D hull modeling.",
      image: "assets/img/p13.jpg",
      badges: ["In-Situ Practices","Ungraduate Research"],
      hasVideo: false,
    },
    {
      id: 14,
      title: "GPS Signal Reception and Positioning",
      content:
        "Developed MATLAB routines to process RTK GPS signals for ground-based positioning, incorporating corrections for satellite clock bias, relativistic effects, and Earth rotation.",
      image: "assets/img/p14.png",
      badges: ["In-Situ Practices", "Remote Sensing", "Ungraduate Research"],
      hasVideo: false,
    },
  ]

  const allTags = Array.from(new Set(projects.flatMap((project) => project.badges)))

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) => selectedTags.some((tag) => project.badges.includes(tag)))

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg p-4">
        <h3 className="font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">Filter by Tags</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-200 text-xs ${
                selectedTags.includes(tag)
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "hover:bg-green-100 dark:hover:bg-green-900/50"
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
        {selectedTags.length > 0 && (
          <Button variant="ghost" size="sm" onClick={() => setSelectedTags([])} className="mt-3 w-full text-xs">
            Clear All
          </Button>
        )}
      </div>

      {/* Projects Section */}
      <section className="pt-24 pb-16 px-4 bg-gray-50 dark:bg-gray-900 relative min-h-screen">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-8 text-center">Featured Projects</h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedCard key={project.id} delay={0.2 + index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="leading-snug">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02] cursor-pointer group"
                      onClick={() => project.hasVideo && setSelectedVideo(project.videoSrc)}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-emerald-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      {project.hasVideo && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
                            <Play className="w-6 h-6 text-green-600" fill="currentColor" />
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{project.content}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="outline"
                          className="bg-green-100/50 dark:bg-green-900/50 hover:bg-green-200 transition-colors duration-300"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <VideoModal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)} videoSrc={selectedVideo || ""} />

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
