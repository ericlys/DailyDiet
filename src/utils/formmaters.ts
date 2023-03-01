export function dateFormatter(value: string) {
  const dateFormated = value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')

  return dateFormated
}

export function hourFormatter(value: string) {
  const hourFormated = value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1:$2')

  return hourFormated
}

