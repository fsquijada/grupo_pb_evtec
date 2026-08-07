export interface RegistrationData {
  name: string;
  email: string;
  consent: boolean;
  website: string;
}

export interface PredictionResult {
  home: string;
  away: string;
  homeProbability: number;
  drawProbability: number;
  awayProbability: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}