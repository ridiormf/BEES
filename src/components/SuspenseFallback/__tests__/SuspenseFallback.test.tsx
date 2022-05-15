import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import SuspenseFallback from '../SuspenseFallback';

describe('components ->', () => {
  describe('SuspenseFallback ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(<SuspenseFallback />, {
          wrapper: Wrapper,
        });
        expect(container).toMatchSnapshot();
      });
    });
  });
});
