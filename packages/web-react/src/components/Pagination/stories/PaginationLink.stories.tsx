import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pagination, PaginationItem, PaginationLink, PaginationLinkNext, PaginationLinkPrevious } from '..';

const meta: Meta<typeof PaginationLink> = {
  title: 'Components/Pagination',
  component: PaginationLink,
  argTypes: {
    accessibilityLabel: {
      control: 'text',
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'a' },
      },
    },
    isCurrent: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    pageNumber: {
      control: 'number',
    },
  },
  args: {
    accessibilityLabel: 'Go to Page 11',
    elementType: 'a',
    isCurrent: false,
    pageNumber: 11,
  },
};

export default meta;
type Story = StoryObj<typeof PaginationLink>;

export const PaginationLinkPlayground: Story = {
  name: 'PaginationLink',
  render: (args) => (
    <Pagination>
      <PaginationItem>
        <PaginationLinkPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink {...args} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 12" pageNumber={12} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 13" pageNumber={13} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 14" pageNumber={14} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 15" pageNumber={15} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLinkNext href="#" />
      </PaginationItem>
    </Pagination>
  ),
};
