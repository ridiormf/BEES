import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import Bullet from '../Bullet';

describe('components ->', () => {
  describe('Bullet ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(
          <Bullet>
            <></>
          </Bullet>,
          { wrapper: Wrapper },
        );
        expect(container).toMatchSnapshot();
      });
    });
  });
});
