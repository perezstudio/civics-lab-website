export const serviceColors = {
  'Global': 'text-blue-500',
  'Compass': 'text-cyan-500',
  'Help Desk': 'text-violet-500',
  'Engage': 'text-teal-500',
  'Pathway': 'text-lime-500',
  'Advocacy Ink': 'text-amber-500'
} as const;

export type ServiceName = keyof typeof serviceColors; 