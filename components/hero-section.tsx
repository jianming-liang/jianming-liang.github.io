"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Download, ArrowDown, GraduationCap, BookOpen, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-start order-1 md:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative flex items-center gap-6">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src="assets/img/head.jpg"
                  alt="Jianming Liang"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-emerald-600/20 mix-blend-overlay" />
              </div>
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link href="/research" className="group">
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border-2 border-gray-200 dark:border-gray-700 max-w-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Have you ever thought about how capabilities you may never directly use could still shape your
                      well-being?
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      That's the perspective we offer here, grounded in the Capability Approach.
                    </p>
                    <div className="absolute -left-3 top-6 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-white dark:border-r-gray-800"></div>
                    <div className="absolute -left-4 top-6 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[14px] border-r-gray-200 dark:border-r-gray-700"></div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-2">
            <div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Jianming Liang
              </motion.h1>
            </div>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              My research interests lie at the intersection of Social segregation, Urban economics, Transportation
              equity, Residential mobility, and Sustainable urbanization.
            </motion.p>
            <motion.div
              className="flex gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href="mailto:2301212637@stu.pku.edu.cn"
                title="2301212637@stu.pku.edu.cn"
                className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=3&user=Qbq17gkAAAAJ"
                target="_blank"
                title="Google Scholar"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              >
                <GraduationCap className="w-6 h-6" />
              </Link>
              <Link
                href="https://orcid.org/my-orcid?orcid=0009-0001-3238-6468"
                target="_blank"
                title="ORCID"
                className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors transform hover:scale-110 duration-300"
              >
                <User className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.researchgate.net/profile/Jianming-Liang-6?ev=hdr_xprf"
                target="_blank"
                title="ResearchGate"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              >
                <BookOpen className="w-6 h-6" />
              </Link>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button variant="secondary" asChild className="relative overflow-hidden group">
                <Link href="assets/JianmingLiang_CV.pdf" target="_blank" download>
                  <Download className="w-4 h-4 mr-2" />
                  <span className="relative z-10">Download CV</span>
                  <span className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
