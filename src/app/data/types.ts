export type RecyclingProject = {
  title: string;
  description: string;
  country: string;
  tags: SustainabilityCategory[];
  certification: string;
  plasticTypes: PlasticType[];
  source: ProjectSource;
};

export const plasticTypes = ['PET', 'HDPE', 'LDPE', 'Other/Mixed', 'PVC', 'Polystyrene'] as const;
export type PlasticType = (typeof plasticTypes)[number];

export const projectSources = ['PCX', 'ImpactHub', 'rePurpose'];
export type ProjectSource = (typeof projectSources)[number];

export const sustainabilityCategories = [
  'RECYCLING',
  'UPCYCLING',
  'COMMUNITY_COLLECTION',
  'WOMEN_EMPOWERMENT',
  'OCEAN',
  'INFRASTRUCTURE_INVESTMENT',
  'DIVERSION_FROM_MISMANAGEMENT',
  'INCREASE_RECYCLED_FEEDSTOCK',
];
export type SustainabilityCategory = (typeof sustainabilityCategories)[number];
