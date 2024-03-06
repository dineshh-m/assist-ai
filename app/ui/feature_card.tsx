"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { Feature } from "../lib/data";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <CardContainer className="inter-var mt-0 h-96">
      <CardBody className="bg-gray-50 relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold  text-black  ">
          {feature.featureName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-black">
          {feature.featureDescription}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4">
          <Image
            src={feature.background}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
