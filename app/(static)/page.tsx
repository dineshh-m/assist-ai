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
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../ui/typewriter-effect";
import Navbar from "../ui/navbar";

export default function Home() {
  return (
    <>
      <WavyBackground className=" ">
        <TypewriterEffect words={words} />
      </WavyBackground>
    </>
  );
}
