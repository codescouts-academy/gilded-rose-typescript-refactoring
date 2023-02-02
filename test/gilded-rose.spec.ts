import { createGildedRose } from './golden/golden-master-text-test';

describe('Gilded Rose', () => {
  it('should be in green', () => {
    const result = createGildedRose(10);

    expect(result).toMatchSnapshot();
  });
});
