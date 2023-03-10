export const generateId = () =>
  Date.now().toString(16) + Math.random().toString(16).slice(2);
