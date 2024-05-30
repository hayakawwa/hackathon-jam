const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MONTHS_RU = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export function formattedDay (time: string) {
  let date = new Date(time)
  let day = date.getDate();
  let monthIndex = date.getMonth();

  let monthName = MONTHS_RU[monthIndex];

  return `${day} ${monthName}`
}

export function toISOFormat (dateString: string) {
  let dateSplit = dateString.split(' ')
  let index = 0

  for (let i = 0; i < MONTHS_RU.length; i++) {
    if (dateSplit[1] == MONTHS_RU[i]) {
      index = i
    }
  }

  let dateEn = `${dateSplit[0]} ${MONTHS_EN[index]}`
  let date = new Date(Date.parse(dateEn));

  return date.toISOString();
}