type DebounceFunction<T extends (...args: Parameters<T>) => void> = T & {
  cancel: () => void;
};

const debounce = <T extends (...args: Parameters<T>) => void>(
  func: T,
  delay: number,
): DebounceFunction<T> => {
  let timeoutId: ReturnType<typeof setTimeout>;

  const debouncedFunction = (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };

  debouncedFunction.cancel = () => {
    clearTimeout(timeoutId);
  };

  return debouncedFunction as DebounceFunction<T>;
};

export default debounce;
