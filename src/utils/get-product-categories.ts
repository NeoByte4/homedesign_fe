export const getUniqueValues = <T, K extends keyof T>(
  data: T[],
  dataType: K,
): T[K][] => {
  return Array.from(new Set(data.map((item) => item[dataType])));
};
