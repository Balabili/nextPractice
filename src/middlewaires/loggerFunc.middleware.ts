export function logger(req, res, next) {
  console.log(`Request function...`);
  next();
};
