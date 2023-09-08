export const queryStringify = (data: Record<string, unknown>) => {
  const keys = Object.keys(data);
  return keys.reduce((acc, key) => `${acc}${acc === '?' ? '' : '&'}${key}=${data[key]}`, '?');
};
