/**
 * Функция для конвертации строки даты в объект Date.
 * @param dateString - Строка даты в формате 'дд.мм.гггг'.
 * @returns Объект Date.
 */
const convertDate = (dateString: string) => {
  const parts = dateString.split('.')
  return new Date(`${parts[1]}/${parts[0]}/${parts[2]}`)
}

export default convertDate
