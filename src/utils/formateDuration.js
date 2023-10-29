import { format, intervalToDuration } from 'date-fns';

// Format a duration in seconds to a more human-readable format
const formatDuration = (durationInSeconds) => {
  const duration = intervalToDuration({
    start: 0,
    end: durationInSeconds * 1000, // Convert seconds to milliseconds
  });

  const formattedDuration = format(duration, 'HH:mm:ss');
  return formattedDuration;
};

export default formatDuration;
