import { getAmazonLink } from "@/lib/utils";
import { airFryers } from "@/data/air-fryers";
import { airPurifiers } from "@/data/air-purifiers";
import { automaticFeeders } from "@/data/automatic-feeders";
import { babyMonitors } from "@/data/baby-monitors";
import { carSeats } from "@/data/car-seats";
import { climateDevices } from "@/data/climate-control";
import { electricToothbrushes } from "@/data/electric-toothbrushes";
import { espressoMachines } from "@/data/espresso-machines";
import { gpsTrackers } from "@/data/gps-trackers";
import { groomingTools } from "@/data/grooming-tools";
import { highChairs } from "@/data/high-chairs";
import { massageGuns } from "@/data/massage-guns";
import { petCameras } from "@/data/pet-cameras";
import { robotVacuums } from "@/data/robot-vacuums";
import { securityCameras } from "@/data/security-cameras";
import { standingDesks } from "@/data/standing-desks";
import { strollers } from "@/data/strollers";

export interface QuickPick {
  id: string;
  name: string;
  categoryLabel: string;
  categorySlug: string;
  amazonUrl: string;
  imageAlt: string;
}

interface CatItem {
  id: string;
  brand: string;
  model: string;
  price: number;
  amazonAsin: string | null;
  imageAlt?: string;
}

interface Source {
  items: CatItem[];
  label: string;
  slug: string;
}

const SOURCES: Source[] = [
  { items: airFryers, label: "Air Fryers", slug: "air-fryers" },
  { items: airPurifiers, label: "Air Purifiers", slug: "air-purifiers" },
  { items: automaticFeeders, label: "Auto Feeders", slug: "automatic-feeders" },
  { items: babyMonitors, label: "Baby Monitors", slug: "baby-monitors" },
  { items: carSeats, label: "Car Seats", slug: "car-seats" },
  { items: climateDevices, label: "Climate", slug: "climate-control" },
  { items: electricToothbrushes, label: "Toothbrushes", slug: "electric-toothbrushes" },
  { items: espressoMachines, label: "Espresso", slug: "espresso-machines" },
  { items: gpsTrackers, label: "GPS Trackers", slug: "gps-trackers" },
  { items: groomingTools, label: "Grooming", slug: "grooming-tools" },
  { items: highChairs, label: "High Chairs", slug: "high-chairs" },
  { items: massageGuns, label: "Massage Guns", slug: "massage-guns" },
  { items: petCameras, label: "Pet Cameras", slug: "pet-cameras" },
  { items: robotVacuums, label: "Robot Vacuums", slug: "robot-vacuums" },
  { items: securityCameras, label: "Security Cameras", slug: "security-cameras" },
  { items: standingDesks, label: "Standing Desks", slug: "standing-desks" },
  { items: strollers, label: "Strollers", slug: "strollers" },
];

// Surface the lowest-priced items that have a valid affiliate link. Impulse-priced
// products convert inside Amazon's 24-hour cookie window far better than the
// $150+ considered purchases that dominate the catalog. Price is used only for
// ranking/filtering here and is intentionally NOT displayed (Amazon Operating
// Agreement requires live PA-API prices; catalog prices are lastVerified: null).
export function getQuickPicks(maxPrice = 40, limit = 12): QuickPick[] {
  const picks: (QuickPick & { price: number })[] = [];
  for (const src of SOURCES) {
    for (const p of src.items) {
      const url = getAmazonLink(p.amazonAsin);
      if (!url) continue;
      if (p.price > maxPrice) continue;
      picks.push({
        id: `${src.slug}-${p.id}`,
        name: `${p.brand} ${p.model}`,
        categoryLabel: src.label,
        categorySlug: src.slug,
        amazonUrl: url,
        imageAlt: p.imageAlt ?? `${p.brand} ${p.model}`,
        price: p.price,
      });
    }
  }
  picks.sort((a, b) => a.price - b.price);
  return picks.slice(0, limit).map(({ price, ...rest }) => rest);
}
