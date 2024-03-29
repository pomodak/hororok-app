export const formatDateKST = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Seoul',
  };

  const formatter = new Intl.DateTimeFormat('ko-KR', options);
  return formatter.format(date);
};

export const formatRelativeDateKST = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const minutes = Math.round(diff / (1000 * 60));
  const hours = Math.round(diff / (1000 * 60 * 60));
  const days = Math.round(diff / (1000 * 60 * 60 * 24));

  if (Math.abs(days) >= 7) {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Seoul',
    };
    const formatter = new Intl.DateTimeFormat('ko-KR', options);
    return formatter.format(date);
  } else if (Math.abs(days) >= 1 && Math.abs(days) < 7) {
    const rtf = new Intl.RelativeTimeFormat('ko-KR', { numeric: 'auto' });
    return rtf.format(-days, 'day');
  } else if (Math.abs(hours) >= 1) {
    const rtf = new Intl.RelativeTimeFormat('ko-KR', { numeric: 'auto' });
    return rtf.format(-hours, 'hour');
  } else if (Math.abs(minutes) >= 1) {
    const rtf = new Intl.RelativeTimeFormat('ko-KR', { numeric: 'auto' });
    return rtf.format(-minutes, 'minute');
  } else {
    return '방금 전';
  }
};

export const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [hours, minutes, remainingSeconds]
    .map((num) => String(num).padStart(2, '0'))
    .join(':');
};
