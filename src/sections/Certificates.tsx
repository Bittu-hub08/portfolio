import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { certificates } from "../../profile.config";

export const CertificateSection = ({ id }: { id: string }) => {
    function highlightFirstWord(title: string): import("react").ReactNode {
        const [first, ...rest] = title.split(" ");
        return (
            <>
                <span className="font-semibold text-white">{first}</span>
                {rest.length > 0 && " " + rest.join(" ")}
            </>
        );
    }
    return (
        <section className="pb-16 lg:py-24" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="COMMITTED TO CONTINUOUS LEARNING"
                    heading2="Building Expertise Through Industry-Recognized Certifications"
                    paragraph="I actively invest in expanding my technical and architectural knowledge through well-structured certification programs. Here are some credentials that reflect my dedication to staying ahead in cloud, system design, cybersecurity, and data engineering."
                />
                <div className="flex flex-col gap-20 mt-10 md:mt-20">
                    {certificates.map((project, index) => (
                        <Card
                            key={project.title}
                            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16 sticky"
                            style={{
                                top: `calc(${64 + index * 40}px)`,
                            }}>
                            {/* <div className={`lg:gap-16 ${project.image ? "lg:grid lg:grid-cols-2" : "flex flex-col"}`}> */}
                                <div className="lg:pb-8">
                                    <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest md:tracking-normal text-sm md:text-base">
                                        <span>{project.issuer}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-4xl lg:max-w-sm mt-2 md:mt-5">
                                        {project.title}
                                    </h3>
                                    <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
                                    <ul className="mt-4 md:mt-5 flex flex-col gap-4">
                                        {project.results.map((result) => (
                                            <li
                                                key={result.title}
                                                className="inline-flex gap-2 text-white/50 font-light text-sm md:text-base">
                                                <CheckIcon className="size-5 md:size-6" />
                                                <span>{highlightFirstWord(result.title)}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* {project.link && project.linkText && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:w-auto md:px-6 my-8 font-semibold inline-flex items-center justify-center gap-2">
                                                <span>{project.linkText}</span>
                                                <ArrowUpRightIcon className="size-4" />
                                            </button>
                                        </a>
                                    )} */}
                                </div>

                                {/* {project.image && (
                                    <div className="relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="-mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none border-2 border-white/10 rounded-xl"
                                        />
                                    </div>
                                )} */}
                            {/* </div> */}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
