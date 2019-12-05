import path from 'path';

export const resolveServer = (relativePath) => {
  return path.join('./', relativePath);
};
