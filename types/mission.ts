export interface Mission {
  id: number;
  nom: string;
  localisation: string;
  salaire: string;
  certifications_requises: string[];
  dates: {
    publication: string;
    expiration: string;
  };
  type_contrat: string;
  experience_requise: string;
  langues: string[];
  description: string;
}

export interface MissionFilters {
  localisation?: string;
  type_contrat?: string;
  salaire_min?: number;
  certifications?: string[];
}
