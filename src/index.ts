export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('Hello');
  }

  return a + b;
};
