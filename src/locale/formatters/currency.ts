export const formatCurrency = ({
  amount,
  currency,
  locale
}: {
  amount: number
  currency: string
  locale: string
}) => {
  if (isNaN(amount)) return NaN

  const options = {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }

  return new Intl.NumberFormat(locale, options).format(amount)
}
