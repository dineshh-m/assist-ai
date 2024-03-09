import { WavyBackground } from "../ui/wavy-background";
import { FeatureCard } from "../ui/feature_card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/Accordion";
import { features } from "../lib/data";
import { words } from "../lib/text";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center  min-h-screen p-24 bg-white relative">
        {/* The WavyBackground Starts */}
        <WavyBackground className="max-w-6xl mx-auto pb-40 mb-0 h-96">
          <TypewriterEffect words={words} />

          <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
            Your personal guide to government programs and services
          </p>
        </WavyBackground>
        {/* The WavyBackground Ends */}

        {/* The 3D-Card Section */}
        <div className="inline-flex gap-6 mb-32">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        {/* The 3D-Card Ends */}

        {/* Accordion Starts */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Accordion Ends */}
      </main>
    </>
  );
}
