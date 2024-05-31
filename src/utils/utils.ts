const MONTHS_RU = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export function formattedDay (time: string) {
  let date = new Date(time)
  let day = date.getDate();
  let monthIndex = date.getMonth();

  let monthName = MONTHS_RU[monthIndex];

  return `${day} ${monthName}`
}
export function toISOFormat (dateString: string) {
  let date = new Date(dateString);
  return date.toISOString();
}