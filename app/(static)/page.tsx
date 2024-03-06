import { WavyBackground } from "../ui/wavy-background";
import { FeatureCard } from "../ui/feature_card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/Accordion";
import { features } from "../lib/data";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center  min-h-screen p-24 bg-white relative">
        <WavyBackground className="max-w-6xl mx-auto pb-40 mb-0 h-96">
          <p className="text-2xl md:text-4xl lg:text-7xl text-black font-bold inter-var text-center">
            Discover the power of AssistAI
          </p>
          <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
            Your personal guide to government programs and services
          </p>
        </WavyBackground>
        <div className="inline-flex gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
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
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
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
      </main>
    </>
  );
}
