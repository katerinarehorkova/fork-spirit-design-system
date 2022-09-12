import { ChildrenProps, StyleProps, Validation, InputBase, ValueBase, TransferProps } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

interface InputProps extends InputBase, Validation, ValueBase<string | number> {}

export interface CheckboxFieldProps
  extends ChildrenProps,
    StyleProps,
    LabelProps,
    InputProps,
    MessageProps,
    TransferProps {
  /** Whether the checkbox is indeterminate */
  indeterminate?: boolean;
  /** Whether the checkbox is checked */
  isChecked?: boolean;
}

export interface SpiritCheckboxFieldProps extends CheckboxFieldProps {
  /** Whether the label should be displayed */
  isLabelHidden?: boolean;
}
