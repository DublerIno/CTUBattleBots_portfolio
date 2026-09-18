import type { StaticImageData } from "next/image";
import melty01TestRender from "@/inspo/testimage.webp";

export type RobotSpec = {
  label: "CLASS" | "MCU" | "VBAT" | "STATUS";
  value: string;
};

export type Robot = {
  slug: string;
  name: string;
  unit: string;
  revision: string;
  description: string;
  image: {
    src: StaticImageData | null;
    alt: string;
  };
  specs: RobotSpec[];
};

export const robots: Robot[] = [
  {
    slug: "melty-01",
    name: "MELTY / 01",
    unit: "01",
    revision: "TBD",
    description: "PLACEHOLDER COPY — REAL ENGINEERING TEXT TO FOLLOW.",
    image: {
      src: melty01TestRender,
      alt: "Top-down render of the MELTY / 01 antweight combat robot with a circular chassis and exposed electronics.",
    },
    specs: [
      { label: "CLASS", value: "ANTWEIGHT" },
      { label: "MCU", value: "ESP32-C3" },
      { label: "VBAT", value: "7.4 V" },
      { label: "STATUS", value: "TBD" },
    ],
  },
  {
    slug: "melty-02",
    name: "MELTY / 02",
    unit: "02",
    revision: "TBD",
    description: "PLACEHOLDER COPY — REAL ENGINEERING TEXT TO FOLLOW.",
    image: {
      src: null,
      alt: "Reserved space for a future MELTY / 02 robot render.",
    },
    specs: [
      { label: "CLASS", value: "BEETLEWEIGHT" },
      { label: "MCU", value: "TBD" },
      { label: "VBAT", value: "TBD" },
      { label: "STATUS", value: "TBD" },
    ],
  },
];
