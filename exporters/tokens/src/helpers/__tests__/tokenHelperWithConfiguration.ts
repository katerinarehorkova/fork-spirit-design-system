import { TypographyToken } from '@supernovaio/sdk-exporters';
import { sampleConfiguration } from '../../../tests/fixtures/sampleConfiguration';
import {
  exampleTypographyTokens,
  expectedTypographyWithFontReplacement,
} from '../../../tests/fixtures/exampleTypographyTokens';

import { typographyValue } from '../tokenHelper';

// Mock the module where exportConfiguration is defined
jest.mock('../../index', () => ({
  exportConfiguration: sampleConfiguration,
}));

describe('typographyValue with override config', () => {
  it('should return the renamed font and substitute font', () => {
    const mockedToken: TypographyToken = exampleTypographyTokens.get('typographyRef1') as TypographyToken;
    const tokenValue = typographyValue(mockedToken.value, true, false);

    expect(tokenValue).toBe(expectedTypographyWithFontReplacement);
  });
});
