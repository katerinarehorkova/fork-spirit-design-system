import React from 'react';
import { ButtonLink } from '../../Button';
import Tooltip from '../Tooltip';
import TooltipWrapper from '../TooltipWrapper';

const TooltipOnHover = () => (
  <div>
    <TooltipWrapper marginRight="space-600" marginBottom="space-600" UNSAFE_className="d-inline-block">
      <ButtonLink href="#" aria-describedby="my-tooltip-hover-top" UNSAFE_className="TooltipTarget">
        Tooltip on top
      </ButtonLink>
      <Tooltip id="my-tooltip-hover-top" placement="top">
        Hello there!
      </Tooltip>
    </TooltipWrapper>{' '}
    <TooltipWrapper marginRight="space-600" marginBottom="space-600" UNSAFE_className="d-inline-block">
      <ButtonLink href="#" aria-describedby="my-tooltip-hover-right" UNSAFE_className="TooltipTarget">
        Tooltip on right
      </ButtonLink>
      <Tooltip id="my-tooltip-hover-right" placement="right">
        Hello there!
      </Tooltip>
    </TooltipWrapper>{' '}
    <TooltipWrapper marginRight="space-600" marginBottom="space-600" UNSAFE_className="d-inline-block">
      <ButtonLink href="#" aria-describedby="my-tooltip-hover-bottom" UNSAFE_className="TooltipTarget">
        Tooltip on bottom
      </ButtonLink>
      <Tooltip id="my-tooltip-hover-bottom" placement="bottom">
        Hello there!
      </Tooltip>
    </TooltipWrapper>{' '}
    <TooltipWrapper marginRight="space-600" marginBottom="space-600" UNSAFE_className="d-inline-block">
      <ButtonLink href="#" aria-describedby="my-tooltip-hover-left" UNSAFE_className="TooltipTarget">
        Tooltip on left
      </ButtonLink>
      <Tooltip id="my-tooltip-hover-left" placement="left">
        Hello there!
      </Tooltip>
    </TooltipWrapper>
  </div>
);

export default TooltipOnHover;
