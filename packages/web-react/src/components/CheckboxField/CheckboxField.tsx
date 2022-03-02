import React from 'react';
import { SpiritCheckboxFieldProps } from '../../types';
import { useCheckboxFieldStyleProps } from './useCheckboxFieldStyleProps';

export const CheckboxField = (props: SpiritCheckboxFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxFieldStyleProps(props);
  const { id, disabled, required, label, message, value, checked, ...restProps } = modifiedProps;

  return (
    <label htmlFor={id} className={classProps.root}>
      <input
        {...restProps}
        type="checkbox"
        id={id}
        className={classProps.input}
        disabled={disabled}
        required={required}
        checked={checked}
        value={value}
      />
      <span className={classProps.text}>
        <span className={classProps.label}>{label}</span>
        {message && <span className={classProps.message}>{message}</span>}
      </span>
    </label>
  );
};

export default CheckboxField;
