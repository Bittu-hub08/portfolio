"use client";
import { AboutSection } from "@/sections/About";
import { aboutSectionId, certificateSectionId, contactSectionId, heroSectionId, projectsSectionId } from "@/sections/constants";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { Certificate } from "crypto";
import { useState } from "react";
import { CertificateSection } from "@/sections/Certificates";
export default function Home() {
    const [activeSectionId, setActiveSectionId] = useState<string>(heroSectionId);
    return (
        <>
            <Header activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} />
            <HeroSection id={heroSectionId} />
            <ProjectsSection id={projectsSectionId} />
            <CertificateSection id={certificateSectionId} />
            <TapeSection />
            <TestimonialsSection />
            <AboutSection id={aboutSectionId} />
            <ContactSection id={contactSectionId} />
            <Footer />
        </>
    );
}
