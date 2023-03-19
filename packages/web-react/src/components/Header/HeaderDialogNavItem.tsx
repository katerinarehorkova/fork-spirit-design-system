import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderDialogNavItemProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';

const HeaderDialogNavItem = (props: HeaderDialogNavItemProps) => {
  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <li
      {...otherProps}
      className={classNames(classProps.headerDialogNavItem, styleProps.className)}
      style={styleProps.style}
    />
  );
};

export default HeaderDialogNavItem;
