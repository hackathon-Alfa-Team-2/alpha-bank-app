/**
 * Функция для конвертации строки даты в объект Date.
 * @param dateString - Строка даты в формате 'гггг-мм-дд'.
 * @returns Объект Date.
 */
const convertDate = (dateString: string) => {
  const parts = dateString.split('-')

  // Формирует строку для new Date в формате 'гггг/мм/дд'
  const formattedDate = `${parts[0]}/${parts[1]}/${parts[2]}`
  return new Date(formattedDate)
}

export default convertDate
