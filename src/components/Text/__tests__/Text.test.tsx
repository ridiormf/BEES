import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import Text from '../Text';

describe('components ->', () => {
  describe('Text ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(<Text>text</Text>, {
          wrapper: Wrapper,
        });
        expect(container).toMatchSnapshot();
      });
    });
  });
});
