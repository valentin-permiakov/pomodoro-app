export const formatWorkTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);

  const hDisplay = h > 0 ? h + ' час ' : '';
  const mDisplay = m > 0 ? m + ' мин' : '';
  return hDisplay + mDisplay;
};
