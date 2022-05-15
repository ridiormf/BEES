import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import Feedback from '../Feedback';

describe('components ->', () => {
  describe('Feedback ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(<Feedback childList={[]} />, {
          wrapper: Wrapper,
        });
        expect(container).toMatchSnapshot();
      });
    });
  });
});
