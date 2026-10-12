import type { StaticImageData } from "next/image";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type RobotSpec = {
  label: string;
  value: string;
};

export type Robot = {
  slug: string;
  name: string;
  unit: string;
  classification: string;
  description: string[];
  details?: {
    title: string;
    paragraphs: string[];
  };
  image: {
    src: StaticImageData | string | null;
    animationSrc?: string;
    alt: string;
    animationAlt?: string;
  };
  specs: RobotSpec[];
};

export const robots: Robot[] = [
  {
    slug: "melty-01",
    name: "MELTY / 01",
    unit: "01",
    classification: "ANTWEIGHT",
    description: [
      "Melty brain je speciální typ bojového robota, který se pohybuje pomocí drobných změn rychlosti dvou motorů. Stejné motory zároveň roztáčejí celé šasi až na 6 000 otáček za minutu.",
      "Aby se robot mohl při rotaci řízeně pohybovat, musí znát svou úhlovou polohu v průběhu každé otáčky. Rychlost rotace určuje měřením dostředivého zrychlení. Při maximálních otáčkách proběhne jedna úplná rotace za pouhých 10 milisekund. Výkonný mikrokontrolér proto upravuje řízení motorů až stokrát za sekundu.",
    ],
    details: {
      title: "ŘÍZENÍ A ELEKTRONIKA",
      paragraphs: [
        "Mozkem našeho melty brainu je mikrokontrolér ESP32-S3 s vlastním firmwarem. Dva senzory vysokého zrychlení, integrované ve vlastní řídicí jednotce, měří hodnoty potřebné k určení rychlosti rotace a řízení pohybu robota.",
        "Firmware využívá protokol Bidirectional DShot600 pro rychlé ovládání regulátorů motorů a získávání telemetrických dat.",
        "Komunikaci s vysílačem zajišťuje protokol CRSF přes systém ExpressLRS. Ten umožňuje spolehlivě přijímat povely a přenášet telemetrii, například informace o otáčkách motorů nebo stavu baterie.",
        "Pohon tvoří bezkartáčové motory s hodnotou 2 400 KV. Šasi je vytištěno z materiálu PC Blend a kola jsou pro maximální přilnavost odlita z polyuretanu.",
      ],
    },
    image: {
      src: `${assetBasePath}/melty-01-assembled.webp`,
      animationSrc: `${assetBasePath}/melty-01-disassembly.webp`,
      alt: "Sestavený render bojového robota MELTY / 01.",
      animationAlt: "Animovaný rozložený pohled na šasi, řídicí jednotku, baterii a horní kryt robota MELTY / 01.",
    },
    specs: [
      { label: "HMOTNOST", value: "148 g" },
      { label: "MAX. OTÁČKY", value: "6 000 ot/min" },
      { label: "ŘÍZENÍ", value: "Custom Melty Controller v1.1" },
      { label: "ROZMĚRY", value: "80 × 80 × 20 mm" },
    ],
  },
  {
    slug: "melty-02",
    name: "MELTY / 02",
    unit: "02",
    classification: "BEETLEWEIGHT",
    description: [
      "Současně vyvíjíme větší verzi pro kategorii Beetleweight do 1,5 kg. Právě v této hmotnostní třídě se může naplno projevit potenciál konstrukce melty brain.",
      "Vyšší hmotnostní limit umožňuje použít šestičlánkovou baterii a výkonné bezkartáčové motory s hodnotou 900 KV.",
      "Pro šasi a rotující zbraň plánujeme využít část kovové trubky, která vytvoří pevný vnější plášť robota.",
    ],
    image: {
      src: null,
      alt: "Vyhrazený prostor pro budoucí fotografii nebo render robota MELTY / 02.",
    },
    specs: [
      { label: "HMOTNOST", value: "1,5 kg" },
      { label: "MAX. OTÁČKY", value: "4 000 ot/min" },
      { label: "ŘÍZENÍ", value: "Custom Melty Controller v1.1" },
      { label: "ROZMĚRY", value: "160 × 160 × 40 mm" },
    ],
  },
];
