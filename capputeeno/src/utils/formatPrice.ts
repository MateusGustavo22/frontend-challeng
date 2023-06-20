export default function formatPrice(cents:number) {
  var centsToReal = cents / 100;

  var priceFormatted = centsToReal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return priceFormatted;
}
