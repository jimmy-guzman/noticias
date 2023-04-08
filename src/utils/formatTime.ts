import { formatDistanceToNow, fromUnixTime } from "date-fns";

export const formatTime = (time: number) => {
  return `${formatDistanceToNow(fromUnixTime(time))} ago`;
};
