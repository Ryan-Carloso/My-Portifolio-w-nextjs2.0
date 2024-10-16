"use cliente"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"




export default function About() {
    const [isVisible, setIsVisible] = useState(false)

    // Use effect to set visibility after component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 100); // Delay to see the transition effect
        
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);
    return (
        <div>
          <section id="about" className="py-16 bg-gray-800 bg-opacity-50 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">About Me</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-gray-900 mb-6 leading-relaxed transition-all duration-1000 ease-in-out transform translate-y-10 opacity-0" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(2rem)', opacity: isVisible ? 1 : 0 }}>
              Hi, I'm Ryan, a dedicated developer with nearly two years of experience in React and React Native. I recently built a project that generated $8,851 with over 130 paying users. With 1.6 years of professional experience, I've honed my skills in React, JavaScript, HTML, and Python scraping. I'm fluent in Portuguese (native) and English (C2 level), and I thrive on creating seamless, intuitive, and high-performing digital experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      </div>
    );
}