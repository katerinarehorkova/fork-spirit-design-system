import React from 'react';
import { Grid } from '../../Grid';
import ButtonDemoFactory from './ButtonDemoFactory';

const ButtonDisabled = () => (
  <Grid cols={1} tablet={2} desktop={3}>
    <ButtonDemoFactory label="Disabled" isDisabled />
  </Grid>
);

export default ButtonDisabled;
