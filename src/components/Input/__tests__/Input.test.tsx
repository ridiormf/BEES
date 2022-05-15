import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import Input from '../Input';

describe('components ->', () => {
  describe('Input ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(<Input />, {
          wrapper: Wrapper,
        });
        expect(container).toMatchSnapshot();
      });
    });
  });
});
