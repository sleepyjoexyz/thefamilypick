import Link from "next/link";

// Import getters for all categories
import { getBabyMonitorArticle, getAllBabyMonitorArticleSlugs } from "@/data/baby-monitor-articles";
import { getCarSeatArticle, getAllCarSeatArticleSlugs } from "@/data/car-seat-articles";
import { getStrollerArticle, getAllStrollerArticleSlugs } from "@/data/stroller-articles";
import { getSecurityCameraArticle, getAllSecurityCameraArticleSlugs } from "@/data/security-camera-articles";
import { getPetCameraArticle, getAllPetCameraArticleSlugs } from "@/data/pet-camera-articles";
import { getGPSTrackerArticle, getAllGPSTrackerArticleSlugs } from "@/data/gps-tracker-articles";
import { getAutoFeederArticle, getAllAutoFeederArticleSlugs } from "@/data/automatic-feeder-articles";
import { getAirFryerArticle, getAllAirFryerArticleSlugs } from "@/data/air-fryer-articles";
import { getRobotVacuumArticle, getAllRobotVacuumArticleSlugs } from "@/data/robot-vacuum-articles";
import { getAirPurifierArticle, getAllAirPurifierArticleSlugs } from "@/data/air-purifier-articles";
import { getClimateControlArticle, getAllClimateControlArticleSlugs } from "@/data/climate-control-articles";
import { getElectricToothbrushArticle, getAllElectricToothbrushArticleSlugs } from "@/data/electric-toothbrush-articles";
import { getMassageGunArticle, getAllMassageGunArticleSlugs } from "@/data/massage-gun-articles";
import { getHighChairArticle, getAllHighChairArticleSlugs } from "@/data/high-chair-articles";
import { getGroomingToolArticle, getAllGroomingToolArticleSlugs } from "@/data/grooming-tool-articles";

interface CrossCategoryLinksProps {
  currentCategory: string;
}

interface CategoryConfig {
  name: string;
  path: string;
  getSlugs: () => string[];
  getArticle: (slug: string) => any;
}

const categoryMap: Record<string, CategoryConfig> = {
  "baby-monitors": {
    name: "Baby Monitors",
    path: "/baby-monitors",
    getSlugs: getAllBabyMonitorArticleSlugs,
    getArticle: getBabyMonitorArticle,
  },
  "car-seats": {
    name: "Car Seats",
    path: "/car-seats",
    getSlugs: getAllCarSeatArticleSlugs,
    getArticle: getCarSeatArticle,
  },
  "strollers": {
    name: "Strollers",
    path: "/strollers",
    getSlugs: getAllStrollerArticleSlugs,
    getArticle: getStrollerArticle,
  },
  "security-cameras": {
    name: "Security Cameras",
    path: "/security-cameras",
    getSlugs: getAllSecurityCameraArticleSlugs,
    getArticle: getSecurityCameraArticle,
  },
  "pet-cameras": {
    name: "Pet Cameras",
    path: "/pet-cameras",
    getSlugs: getAllPetCameraArticleSlugs,
    getArticle: getPetCameraArticle,
  },
  "gps-trackers": {
    name: "GPS Trackers",
    path: "/gps-trackers",
    getSlugs: getAllGPSTrackerArticleSlugs,
    getArticle: getGPSTrackerArticle,
  },
  "automatic-feeders": {
    name: "Automatic Feeders",
    path: "/automatic-feeders",
    getSlugs: getAllAutoFeederArticleSlugs,
    getArticle: getAutoFeederArticle,
  },
  "air-fryers": {
    name: "Air Fryers",
    path: "/air-fryers",
    getSlugs: getAllAirFryerArticleSlugs,
    getArticle: getAirFryerArticle,
  },
  "robot-vacuums": {
    name: "Robot Vacuums",
    path: "/robot-vacuums",
    getSlugs: getAllRobotVacuumArticleSlugs,
    getArticle: getRobotVacuumArticle,
  },
  "air-purifiers": {
    name: "Air Purifiers",
    path: "/air-purifiers",
    getSlugs: getAllAirPurifierArticleSlugs,
    getArticle: getAirPurifierArticle,
  },
  "climate-control": {
    name: "Climate Control",
    path: "/climate-control",
    getSlugs: getAllClimateControlArticleSlugs,
    getArticle: getClimateControlArticle,
  },
  "electric-toothbrushes": {
    name: "Electric Toothbrushes",
    path: "/electric-toothbrushes",
    getSlugs: getAllElectricToothbrushArticleSlugs,
    getArticle: getElectricToothbrushArticle,
  },
  "massage-guns": {
    name: "Massage Guns",
    path: "/massage-guns",
    getSlugs: getAllMassageGunArticleSlugs,
    getArticle: getMassageGunArticle,
  },
  "high-chairs": {
    name: "High Chairs",
    path: "/high-chairs",
    getSlugs: getAllHighChairArticleSlugs,
    getArticle: getHighChairArticle,
  },
  "grooming-tools": {
    name: "Grooming Tools",
    path: "/grooming-tools",
    getSlugs: getAllGroomingToolArticleSlugs,
    getArticle: getGroomingToolArticle,
  },
};

const relatedCategories: Record<string, string[]> = {
  "baby-monitors": ["car-seats", "strollers", "security-cameras"],
  "car-seats": ["baby-monitors", "strollers", "high-chairs"],
  "pet-cameras": ["security-cameras", "gps-trackers", "automatic-feeders"],
  "gps-trackers": ["pet-cameras", "grooming-tools", "automatic-feeders"],
  "automatic-feeders": ["pet-cameras", "gps-trackers", "grooming-tools"],
  "air-fryers": ["robot-vacuums", "air-purifiers", "climate-control"],
  "strollers": ["car-seats", "baby-monitors", "high-chairs"],
  "electric-toothbrushes": ["massage-guns", "air-purifiers", "grooming-tools"],
  "air-purifiers": ["air-fryers", "robot-vacuums", "climate-control"],
  "massage-guns": ["electric-toothbrushes", "air-purifiers", "climate-control"],
  "security-cameras": ["pet-cameras", "baby-monitors", "robot-vacuums"],
  "robot-vacuums": ["air-fryers", "air-purifiers", "security-cameras"],
  "high-chairs": ["car-seats", "strollers", "baby-monitors"],
  "grooming-tools": ["gps-trackers", "automatic-feeders", "pet-cameras"],
  "climate-control": ["air-purifiers", "air-fryers", "massage-guns"],
};

export default function CrossCategoryLinks({ currentCategory }: CrossCategoryLinksProps) {
  const related = relatedCategories[currentCategory] || [];

  const links = related
    .map((catKey) => {
      const cat = categoryMap[catKey];
      if (!cat) return null;
      const slugs = cat.getSlugs();
      if (slugs.length === 0) return null;
      const firstSlug = slugs[0];
      const article = cat.getArticle(firstSlug);
      if (!article) return null;
      return {
        catKey,
        cat,
        slug: firstSlug,
        article,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  if (links.length === 0) {
    return null;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map(({ catKey, cat, slug, article }) => (
          <Link
            key={catKey}
            href={`${cat.path}/${slug}`}
            className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-gray-200 transition"
          >
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
              {cat.name}
            </p>
            <h3 className="font-semibold text-gray-900 text-sm">{article.title}</h3>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
