export interface WorkflowStep {
  step: number;
  action: string;
  role: string;
  system: string;
}

export interface GeneratedWorkflow {
  title: string;
  description: string;
  steps: WorkflowStep[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}
