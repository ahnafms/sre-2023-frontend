export enum DivisionEnum {
  'BoE',
  'Campaign \u0026 Education',
  'Competency Development',
  'Competition',
  'FUTUREST 2024',
  'Funding',
  'Human Resources',
  'IT Developer',
  'Media Creative',
  'Project \u0026 Innovation',
  'Public Relation',
  'Research',
  'Sponsorship',
}

export type DivisionList = Array<keyof typeof DivisionEnum>;
