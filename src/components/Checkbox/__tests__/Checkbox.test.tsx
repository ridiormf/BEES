import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import Checkbox from '../Checkbox';

describe('components ->', () => {
  describe('Checkbox ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(<Checkbox label={'test'} id={'test'} />, {
          wrapper: Wrapper,
        });
        expect(container).toMatchSnapshot();
      });
    });
  });
});
