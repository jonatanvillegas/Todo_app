export  const formatCurrency = (value, currency = 'NIO', locale = 'es-NI') => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
};