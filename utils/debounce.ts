import {useRef} from 'react';

type Fn = (...args: any[]) => any;

type InferParam<F extends Fn> = F extends (...args: infer P) => any ? P : never;

type DebouncedFunction<T extends Fn> = (...args: InferParam<T>) => void;

export function debounce<T extends Fn>(
  fn: T,
  delay: number = 1000,
): DebouncedFunction<T> {
  let timeout: NodeJS.Timeout;

  return ((...args: unknown[]) => {
    clearTimeout(timeout);

    const boundFn = function (this: any) {
      fn.apply(this, args);
      clearTimeout(timeout);
    };

    timeout = setTimeout(boundFn, delay);
  }) as unknown as DebouncedFunction<T>;
}

export const useDebounce = <T extends Fn>(fn: T, delay?:number) => {
  return useRef(debounce(fn, delay)).current;
};
