import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import {
  useConstructor,
  useDidMount,
  useDidUpdate,
  useWillUnmount,
  useAppNavigation,
} from '../hooks';

const PATHNAME = '/test-pathname';
const PREV_PATHNAME = '/prev-pathname';
let currentPath: string = PATHNAME;

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => (path: string | number) => {
    currentPath = typeof path === 'string' ? path : PREV_PATHNAME;
  },
  useLocation: () => ({ pathname: PATHNAME }),
}));

interface TestComponentProps {
  text: string;
}

describe('useConstructor tests ->', () => {
  const TestComponent: React.FC<TestComponentProps> = ({ text }) => {
    const [title, setTitle] = React.useState<any>('');
    useConstructor(() => {
      setTitle(text);
    });
    return <h1>{title}</h1>;
  };

  const TestComponentWithValue: React.FC<TestComponentProps> = ({ text }) => {
    const title = useConstructor<string>(() => {
      return text;
    });
    return <h1>{title!}</h1>;
  };

  it('Should render component already changed and not change value from next renders', () => {
    const { rerender } = render(<TestComponent text="test" />);
    const firstRender = screen.queryByText('test');
    expect(firstRender).toBeInTheDocument();

    rerender(<TestComponent text="test 2" />);
    const secondRender = screen.queryByText('test 2');
    expect(secondRender).not.toBeInTheDocument();

    rerender(<TestComponent text="test 3" />);
    const thirdRender = screen.queryByText('test 3');
    expect(thirdRender).not.toBeInTheDocument();
  });

  it('Should return a value if callback has a defined return', () => {
    render(<TestComponentWithValue text="test" />);
    const firstRender = screen.queryByText('test');
    expect(firstRender).toBeInTheDocument();
  });

  it("Shouldn't change value after first render", () => {
    const { rerender } = render(<TestComponentWithValue text="test" />);
    const firstRender = screen.queryByText('test');
    expect(firstRender).toBeInTheDocument();

    rerender(<TestComponentWithValue text="test 2" />);
    const secondRender = screen.queryByText('test 2');
    expect(secondRender).not.toBeInTheDocument();
  });
});

describe('useDidMount tests ->', () => {
  const TestComponent: React.FC<TestComponentProps> = ({ text }) => {
    const [title, setTitle] = React.useState<any>('');
    useDidMount(() => {
      setTitle(text);
    });
    return <h1>{title}</h1>;
  };

  it('Should render component already changed and not change value from next renders', () => {
    const { rerender } = render(<TestComponent text="test" />);
    const firstRender = screen.queryByText('test');
    expect(firstRender).toBeInTheDocument();

    rerender(<TestComponent text="test 2" />);
    const secondRender = screen.queryByText('test 2');
    expect(secondRender).not.toBeInTheDocument();

    rerender(<TestComponent text="test 3" />);
    const thirdRender = screen.queryByText('test 3');
    expect(thirdRender).not.toBeInTheDocument();
  });
});

describe('useDidUpdate tests ->', () => {
  const TestComponent: React.FC<TestComponentProps> = ({ text }) => {
    const [title, setTitle] = React.useState<any>('');
    useDidUpdate(() => {
      setTitle(text);
    }, [text]);
    return <h1>{title}</h1>;
  };

  it('Should render component not changed and apply changes on next renders', () => {
    const { rerender } = render(<TestComponent text="test" />);
    const firstRender = screen.queryByText('test');
    expect(firstRender).not.toBeInTheDocument();

    rerender(<TestComponent text="test 2" />);
    const secondRender = screen.queryByText('test 2');
    expect(secondRender).toBeInTheDocument();

    rerender(<TestComponent text="test 3" />);
    const thirdRender = screen.queryByText('test 3');
    expect(thirdRender).toBeInTheDocument();
  });
});

describe('useWillUnmount tests ->', () => {
  const mockFunction = jest.fn();
  const TestComponent: React.FC<TestComponentProps> = () => {
    useWillUnmount(mockFunction);
    return <h1>Example</h1>;
  };

  it('Should call the callback only when component will unmount', () => {
    const { rerender, unmount } = render(<TestComponent text="test" />);
    expect(mockFunction).not.toBeCalled();
    rerender(<TestComponent text="test 2" />);
    expect(mockFunction).not.toBeCalled();
    unmount();
    expect(mockFunction).toBeCalledTimes(1);
  });
});

describe('useAppNavigation tests ->', () => {
  let pathnameResult: string;
  let goBackResult: () => void;
  let goResult: (path: string) => void;

  const TestComponent: React.FC = () => {
    const { pathname, goBack, go } = useAppNavigation();
    pathnameResult = pathname;
    goBackResult = goBack;
    goResult = go;
    return <></>;
  };

  it('Should return current location pathname', () => {
    render(<TestComponent />);
    expect(pathnameResult).toBe(PATHNAME);
  });

  it('Should return function that changes current url', () => {
    const newPath = '/new-path';
    render(<TestComponent />);
    goResult(newPath);
    expect(currentPath).toBe(newPath);
  });

  it('Should return function that changes current url to previous one', () => {
    render(<TestComponent />);
    goBackResult();
    expect(currentPath).toBe(PREV_PATHNAME);
  });
});
