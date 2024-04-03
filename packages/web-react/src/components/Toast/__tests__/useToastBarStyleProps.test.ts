import { renderHook } from '@testing-library/react-hooks';
import { SpiritToastBarProps } from '../../../types';
import { useToastBarStyleProps } from '../useToastBarStyleProps';

describe('useToastBarStyleProps', () => {
  it('should return default classes', () => {
    const props = { isOpen: true } as SpiritToastBarProps;
    const { result } = renderHook(() => useToastBarStyleProps(props));

    expect(result.current.classProps.root).toBe('ToastBar ToastBar--inverted');
    expect(result.current.classProps.content).toBe('ToastBar__content');
    expect(result.current.classProps.message).toBe('ToastBar__message');
  });

  it('should return dismissible class', () => {
    const props = { isDismissible: true } as SpiritToastBarProps;
    const { result } = renderHook(() => useToastBarStyleProps(props));

    expect(result.current.classProps.root).toContain('ToastBar--dismissible');
  });

  it.each([['inverted'], ['informative'], ['success'], ['warning'], ['danger']])(
    'should return color class %s',
    (color) => {
      const props = { color } as SpiritToastBarProps;
      const { result } = renderHook(() => useToastBarStyleProps(props));

      expect(result.current.classProps.root).toContain(`ToastBar--${color}`);
    },
  );
});
