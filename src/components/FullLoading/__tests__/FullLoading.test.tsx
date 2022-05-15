import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import FullLoading from '../FullLoading';

describe('components ->', () => {
  describe('FullLoading ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(<FullLoading />, {
          wrapper: Wrapper,
        });
        expect(container).toMatchSnapshot();
      });
    });
  });
});
