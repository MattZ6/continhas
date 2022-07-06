const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export function formatRelativeDate(date: Date) {
  const parsedDate = new Date(date);
  const now = new Date();

  const isToday =
    parsedDate.getDate() === now.getDate() &&
    parsedDate.getMonth() === now.getMonth() &&
    parsedDate.getFullYear() === now.getFullYear();

  if (isToday) {
    return 'Hoje';
  }

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  const isYesterday =
    parsedDate.getDate() === yesterday.getDate() &&
    parsedDate.getMonth() === yesterday.getMonth() &&
    parsedDate.getFullYear() === yesterday.getFullYear();

  if (isYesterday) {
    return 'Ontem';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  let dateFormated = `${day} de ${month}`;

  if (year !== now.getFullYear()) {
    dateFormated += ` ${year}`;
  }

  return dateFormated;
}
