import { formatDistanceToNow, fromUnixTime } from "date-fns";

export const formatTimestamp = (unixTimestamp: number) => {
  return formatDistanceToNow(fromUnixTime(unixTimestamp), { addSuffix: true });
};
