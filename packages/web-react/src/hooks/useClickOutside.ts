import { useEffect, useCallback, MutableRefObject } from 'react';

export interface UseClickOutsideProps {
  ref: MutableRefObject<HTMLElement | null>;
  callback?: (event: Event) => void;
}

export const useClickOutside = ({ ref, callback }: UseClickOutsideProps): void => {
  const clickHandler = useCallback(
    (event: Event) => {
      // Do nothing if the event was already processed.
      if (event.defaultPrevented) {
        return;
      }

      if (ref.current && !ref.current.contains(event?.target as Node) && callback) {
        callback(event);
      }

      // Cancel the default action to avoid it being handled twice for button click.
      // This whitelist do not seems right to me but it is quick workaround until we can better support
      // Modal composition
      if (
        ref?.current?.parentNode?.contains(event?.target as Node) &&
        ['DIALOG', 'BUTTON'].includes((event?.target as Node)?.nodeName)
      ) {
        event.preventDefault();
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener('click', clickHandler, true);

    return () => document.removeEventListener('click', clickHandler, true);
    /* We want to call this hook only once */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
