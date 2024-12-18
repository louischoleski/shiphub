import React from 'react';

const useCurrencyFormatter = (locale: string = 'en-US', currency: string = 'USD') => {
  const formatCurrency = React.useCallback(
    (amount: number): string => {
      if (isNaN(amount)) {
        return '';
      }

      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
      }).format(amount);
    },
    [locale, currency]
  );

  return formatCurrency;
};

export default useCurrencyFormatter;
