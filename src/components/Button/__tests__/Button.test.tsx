import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import Button from '../Button';

describe('components ->', () => {
  describe('Button ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(<Button>test</Button>, {
          wrapper: Wrapper,
        });
        expect(container).toMatchSnapshot();
      });
    });
  });
});
