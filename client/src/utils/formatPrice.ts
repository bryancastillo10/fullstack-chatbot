const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "PHP",
    style: "currency",
  });
  
  export const formatCurrency = (price: number) => {
    const formatted = currencyFormatter.format(price);
    return formatted.replace(/^(\D+)/, '$1 ');
  };