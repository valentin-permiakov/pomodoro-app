export const chartTickCallback = (value: string | number) => {
  value = String(value);
  if (value === '0') return '';
  if (value[1]) {
    return `${value[0] !== '0' ? value[0] + ' час. 30 мин.' : '30 мин.'}`;
  }
  return value + ' час.';
};
