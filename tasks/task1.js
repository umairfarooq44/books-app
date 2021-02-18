const formatDuration = (timeInSec) => {
  if (timeInSec === 0) {
    return '"now"';
  }
  const YEAR = 365 * 24 * 60 * 60;
  const DAY = YEAR / 365;
  const HOUR = 60 * 60;
  const MINUTE = 60;

  const timeUnits = [];
  let remainingTime = timeInSec;

  if (remainingTime >= YEAR) {
    const years = Math.floor(remainingTime / YEAR);
    remainingTime -= years * YEAR;
    timeUnits.push(`${years} year${years > 1 ? 's' : ''}`);
  }

  if (remainingTime >= DAY) {
    const days = Math.floor(remainingTime / DAY);
    remainingTime -= days * DAY;
    timeUnits.push(`${days} day${days > 1 ? 's' : ''}`);
  }

  if (remainingTime >= HOUR) {
    const hours = Math.floor(remainingTime / HOUR);
    remainingTime -= hours * HOUR;
    timeUnits.push(`${hours} hour${hours > 1 ? 's' : ''}`);
  }

  if (remainingTime >= MINUTE) {
    const minutes = Math.floor(remainingTime / MINUTE);
    remainingTime -= minutes * MINUTE;
    timeUnits.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
  }

  if (remainingTime > 0) {
    timeUnits.push(`${remainingTime} second${remainingTime > 1 ? 's' : ''}`);
  }
  const lastItem = timeUnits[timeUnits.length - 1];
  const itemsToJoin = timeUnits.slice(0, -1);
  return `"${itemsToJoin.join(', ')}${itemsToJoin.length > 0 ? ' and ' : ''}${lastItem}"`;
};
module.exports = formatDuration;
