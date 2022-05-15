import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import Image from '../Image';

import imagePng from '../../../assets/png/bees.png';

describe('components ->', () => {
  describe('Image ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(<Image src={imagePng} alt="alt test" />, {
          wrapper: Wrapper,
        });
        expect(container).toMatchSnapshot();
      });
    });
  });
});
