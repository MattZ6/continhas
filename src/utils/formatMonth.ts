const MONTHS = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

export function formatMonth(value: Date) {
  const date = new Date(value);

  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
