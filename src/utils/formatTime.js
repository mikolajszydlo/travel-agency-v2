const convertSecToHr = seconds => {
  const secPart = Math.floor(seconds % 60).toString();
  const minPart = Math.floor((seconds / 60) % 60).toString();
  const hourPart = Math.floor(seconds / 3600).toString();
  const formatedTime = `${hourPart.padStart(2, '0')}:${minPart.padStart(2, '0')}:${secPart.padStart(2, '0')}`;

  return formatedTime;
}

export const formatTime = (timeToFormat) => (
  (timeToFormat && typeof(timeToFormat) === 'number' && timeToFormat > 0) ? convertSecToHr(timeToFormat) : null
);