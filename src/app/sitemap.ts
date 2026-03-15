import { MetadataRoute } from 'next';
import {
  getAllBabyMonitorArticleSlugs,
} from '@/data/baby-monitor-articles';
import { getAllStrollerArticleSlugs } from '@/data/stroller-articles';
import { getAllCarSeatArticleSlugs } from '@/data/car-seat-articles';
import { getAllHighChairArticleSlugs } from '@/data/high-chair-articles';
import { getAllAutoFeederArticleSlugs } from '@/data/automatic-feeder-articles';
import { getAllPetCameraArticleSlugs } from '@/data/pet-camera-articles';
import { getAllGPSTrackerArticleSlugs } from '@/data/gps-tracker-articles';
import { getAllGroomingToolArticleSlugs } from '@/data/grooming-tool-articles';
import { getAllAirFryerArticleSlugs } from '@/data/air-fryer-articles';
import { getAllAirPurifierArticleSlugs } from '@/data/air-purifier-articles';
import { getAllClimateControlArticleSlugs } from '@/data/climate-control-articles';
import { getAllElectricToothbrushArticleSlugs } from '@/data/electric-toothbrush-articles';
import { getAllMassageGunArticleSlugs } from '@/data/massage-gun-articles';
import { getAllRobotVacuumArticleSlugs } from '@/data/robot-vacuum-articles';
import { getAllSecurityCameraArticleSlugs } from '@/data/security-camera-articles';

const baseUrl = 'https://www.thefamilypick.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Category pages
  const categoryPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/baby-monitors`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/strollers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car-seats`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/high-chairs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/automatic-feeders`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pet-cameras`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gps-trackers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/grooming-tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/air-fryers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/air-purifiers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/climate-control`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/electric-toothbrushes`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/massage-guns`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/robot-vacuums`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/security-cameras`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/deals`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/deals/baby-gear`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/deals/pet-tech`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Article pages
  const babyMonitorSlugs = getAllBabyMonitorArticleSlugs();
  const strollerSlugs = getAllStrollerArticleSlugs();
  const carSeatSlugs = getAllCarSeatArticleSlugs();
  const highChairSlugs = getAllHighChairArticleSlugs();
  const automaticFeederSlugs = getAllAutoFeederArticleSlugs();
  const petCameraSlugs = getAllPetCameraArticleSlugs();
  const gpsTrackerSlugs = getAllGPSTrackerArticleSlugs();
  const groomingToolSlugs = getAllGroomingToolArticleSlugs();
  const airFryerSlugs = getAllAirFryerArticleSlugs();
  const airPurifierSlugs = getAllAirPurifierArticleSlugs();
  const climateControlSlugs = getAllClimateControlArticleSlugs();
  const electricToothbrushSlugs = getAllElectricToothbrushArticleSlugs();
  const massageGunSlugs = getAllMassageGunArticleSlugs();
  const robotVacuumSlugs = getAllRobotVacuumArticleSlugs();
  const securityCameraSlugs = getAllSecurityCameraArticleSlugs();

  const babyMonitorArticles = babyMonitorSlugs.map((slug) => ({
    url: `${baseUrl}/baby-monitors/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const strollerArticles = strollerSlugs.map((slug) => ({
    url: `${baseUrl}/strollers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const carSeatArticles = carSeatSlugs.map((slug) => ({
    url: `${baseUrl}/car-seats/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const highChairArticles = highChairSlugs.map((slug) => ({
    url: `${baseUrl}/high-chairs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const automaticFeederArticles = automaticFeederSlugs.map((slug) => ({
    url: `${baseUrl}/automatic-feeders/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const petCameraArticles = petCameraSlugs.map((slug) => ({
    url: `${baseUrl}/pet-cameras/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const gpsTrackerArticles = gpsTrackerSlugs.map((slug) => ({
    url: `${baseUrl}/gps-trackers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const groomingToolArticles = groomingToolSlugs.map((slug) => ({
    url: `${baseUrl}/grooming-tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const airFryerArticles = airFryerSlugs.map((slug) => ({
    url: `${baseUrl}/air-fryers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const airPurifierArticles = airPurifierSlugs.map((slug) => ({
    url: `${baseUrl}/air-purifiers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const climateControlArticles = climateControlSlugs.map((slug) => ({
    url: `${baseUrl}/climate-control/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const electricToothbrushArticles = electricToothbrushSlugs.map((slug) => ({
    url: `${baseUrl}/electric-toothbrushes/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const massageGunArticles = massageGunSlugs.map((slug) => ({
    url: `${baseUrl}/massage-guns/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const robotVacuumArticles = robotVacuumSlugs.map((slug) => ({
    url: `${baseUrl}/robot-vacuums/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const securityCameraArticles = securityCameraSlugs.map((slug) => ({
    url: `${baseUrl}/security-cameras/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...categoryPages,
    ...babyMonitorArticles,
    ...strollerArticles,
    ...carSeatArticles,
    ...highChairArticles,
    ...automaticFeederArticles,
    ...petCameraArticles,
    ...gpsTrackerArticles,
    ...groomingToolArticles,
    ...airFryerArticles,
    ...airPurifierArticles,
    ...climateControlArticles,
    ...electricToothbrushArticles,
    ...massageGunArticles,
    ...robotVacuumArticles,
    ...securityCameraArticles,
  ];
}
