import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import Breweries from '../Breweries';

describe('features ->', () => {
  describe('Breweries ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(<Breweries />, {
          wrapper: Wrapper,
        });
        expect(container).toMatchSnapshot();
      });
    });
  });
});
