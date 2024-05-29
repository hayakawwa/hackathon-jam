export function formattedDay (time: string) {
  let date = new Date(time)
  let day = date.getDate();
  let monthIndex = date.getMonth();

  let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  let monthName = months[monthIndex];

  return `${day} ${monthName}`
}