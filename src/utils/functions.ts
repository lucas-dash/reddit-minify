export function formatRelativeTime(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000); // Convert current time to seconds
  const elapsedSeconds = now - timestamp;

  if (elapsedSeconds < 60) {
    return 'just now';
  } else if (elapsedSeconds < 3600) {
    const minutes = Math.floor(elapsedSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (elapsedSeconds < 86400) {
    const hours = Math.floor(elapsedSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (elapsedSeconds < 2592000) {
    const days = Math.floor(elapsedSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else {
    const months = Math.floor(elapsedSeconds / 2592000);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
}
export function commentFormater(num: number) {
  const formater = Intl.NumberFormat('en', {
    notation: 'compact',
  });
  return formater.format(num);
}
