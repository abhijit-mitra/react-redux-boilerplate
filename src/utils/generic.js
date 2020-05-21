export const isEmpty = (n) => {
  return !(n ? (typeof n === 'object' ? (Array.isArray(n) ? !!n.length : !!Object.keys(n).length) : true) : false);
};
