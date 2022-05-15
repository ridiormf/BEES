import { render } from '@testing-library/react';
import { Wrapper } from '../../../__tests__/utils';
import PageTemplate from '../PageTemplate';

const PATHNAME = '/test-pathname';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn(),
  useLocation: () => ({ pathname: PATHNAME }),
}));

describe('components ->', () => {
  describe('PageTemplate ->', () => {
    describe('snapshots ->', () => {
      it('Should match snapshot', () => {
        const { container } = render(
          <PageTemplate>
            <></>
          </PageTemplate>,
          {
            wrapper: Wrapper,
          },
        );
        expect(container).toMatchSnapshot();
      });
    });
  });
});
