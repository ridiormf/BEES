import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import CardList from '../CardList';

describe('components ->', () => {
  describe('CardList ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(
          <CardList bulletsWithAddMore data={[]} />,
          {
            wrapper: Wrapper,
          },
        );
        expect(container).toMatchSnapshot();
      });
    });
  });
});
