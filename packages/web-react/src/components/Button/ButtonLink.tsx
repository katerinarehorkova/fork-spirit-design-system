import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritButtonLinkProps } from '../../types';
import { useButtonAriaProps } from './useButtonAriaProps';
import { useButtonStyleProps } from './useButtonStyleProps';

const defaultProps = {
  color: 'primary',
  href: '#',
  isBlock: false,
  isDisabled: false,
  isSquare: false,
  elementType: 'a',
  size: 'medium',
};

export const ButtonLink = <T extends ElementType = 'a'>(props: SpiritButtonLinkProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'a', children, ...restProps } = props;
  const { buttonProps } = useButtonAriaProps(props);
  const { classProps, props: modifiedProps } = useButtonStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      {...buttonProps}
      className={classNames(classProps, styleProps.className)}
    >
      {children}
    </ElementTag>
  );
};

ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
