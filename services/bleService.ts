export const simulateBLESync = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 2000);
  });
};
