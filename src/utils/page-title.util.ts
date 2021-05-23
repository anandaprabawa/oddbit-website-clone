export function makePageTitle(brandName: string, pageTitle?: string): string {
  const normalizedTitle = brandName.toUpperCase()
  return pageTitle
    ? `${pageTitle} - ${normalizedTitle}`
    : `${normalizedTitle} - Professional developer team in Bali`
}
