import { sampleConfigurationDefault } from './tests/fixtures/sampleConfiguration';

jest.mock('../../index', () => ({
  exportConfiguration: sampleConfigurationDefault,
}));
