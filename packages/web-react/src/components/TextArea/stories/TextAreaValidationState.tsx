import React from 'react';
import TextArea from '../TextArea';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <TextArea
      id="textarea-success"
      label="Validation success"
      name="textarea-success"
      validationState="success"
      validationText="Validation text"
    />
    <TextArea
      id="textarea-warning"
      label="Validation warning"
      name="textarea-warning"
      validationState="warning"
      validationText="Validation text"
    />
    <TextArea
      id="textarea-danger"
      label="Validation danger"
      name="textarea-danger"
      validationState="danger"
      validationText={['Validation text', 'Second validation text']}
    />
  </div>
);

export default Story;
