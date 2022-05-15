import { fireEvent, render } from '@testing-library/react';
import { Wrapper } from '../../../../__tests__/utils';

import * as applicationProviderMethods from '../../../../providers/ApplicationProvider/ApplicationProvider-control';

import Landing from '../Landing';
import { LANDING } from '../Landing-consts';

const mockUseApplicationContext = ({
  saveUser = jest.fn(),
  openFullLoading = jest.fn(),
  showNewFeedback = jest.fn(),
}) => {
  return jest
    .spyOn(applicationProviderMethods, 'useApplicationContext')
    .mockImplementation(() => ({
      saveUser,
      openFullLoading,
      showNewFeedback,
    }));
};

jest.useFakeTimers();

describe('pages ->', () => {
  describe('public ->', () => {
    describe('Landing ->', () => {
      describe('snapshots ->', () => {
        it('Should match snapshot', () => {
          const { container } = render(<Landing />, { wrapper: Wrapper });
          expect(container).toMatchSnapshot();
        });
      });
      describe('controls ->', () => {
        it('Should not submit form if checkbox is unchecked and full name valid', () => {
          const openFullLoading = jest.fn();
          mockUseApplicationContext({ openFullLoading });
          const { getByTestId } = render(<Landing />, { wrapper: Wrapper });
          const textInput = getByTestId(LANDING.TEST_ID.INPUT_TEXT);
          const button = getByTestId(LANDING.TEST_ID.SUBMIT_BUTTON);

          fireEvent.change(textInput, { target: { value: 'Full name' } });
          fireEvent.blur(textInput);
          fireEvent.click(button);
          expect(openFullLoading).not.toBeCalled();
        });
        it('Should not submit form if checkbox is checked and full name invalid', () => {
          const openFullLoading = jest.fn();
          mockUseApplicationContext({ openFullLoading });
          const { getByTestId } = render(<Landing />, { wrapper: Wrapper });
          const checkbox = getByTestId(LANDING.TEST_ID.INPUT_CHECKBOX);
          const input = getByTestId(LANDING.TEST_ID.INPUT_TEXT);
          const button = getByTestId(LANDING.TEST_ID.SUBMIT_BUTTON);

          fireEvent.change(input, { target: { value: 'full n' } });
          fireEvent.click(checkbox);
          fireEvent.click(button);

          expect(openFullLoading).not.toBeCalled();
        });
        it('Should not submit form if checkbox is toggle to unchecked and full name invalid', () => {
          const openFullLoading = jest.fn();
          mockUseApplicationContext({ openFullLoading });
          const { getByTestId } = render(<Landing />, { wrapper: Wrapper });
          const checkbox = getByTestId(LANDING.TEST_ID.INPUT_CHECKBOX);
          const button = getByTestId(LANDING.TEST_ID.SUBMIT_BUTTON);
          const input = getByTestId(LANDING.TEST_ID.INPUT_TEXT);
          fireEvent.change(input, { target: { value: 'full name' } });
          fireEvent.click(checkbox);
          fireEvent.click(checkbox);
          fireEvent.click(button);
          expect(openFullLoading).not.toBeCalled();
        });

        it('Should not submit form if checkbox is checked and full name toggle from valid to invalid', () => {
          const openFullLoading = jest.fn();
          mockUseApplicationContext({ openFullLoading });
          const { getByTestId } = render(<Landing />, { wrapper: Wrapper });
          const checkbox = getByTestId(LANDING.TEST_ID.INPUT_CHECKBOX);
          const button = getByTestId(LANDING.TEST_ID.SUBMIT_BUTTON);
          const input = getByTestId(LANDING.TEST_ID.INPUT_TEXT);
          fireEvent.change(input, { target: { value: 'full name' } });
          fireEvent.click(checkbox);
          fireEvent.change(input, { target: { value: 'full n' } });
          fireEvent.blur(input);
          fireEvent.click(button);
          expect(openFullLoading).not.toBeCalled();
        });

        it('Should submit form if checkbox is checked and full name valid', () => {
          const openFullLoading = jest.fn();
          const showNewFeedback = jest.fn();
          const saveUser = jest.fn();
          mockUseApplicationContext({
            openFullLoading,
            showNewFeedback,
            saveUser,
          });
          const { getByTestId } = render(<Landing />, { wrapper: Wrapper });
          const checkbox = getByTestId(LANDING.TEST_ID.INPUT_CHECKBOX);
          const button = getByTestId(LANDING.TEST_ID.SUBMIT_BUTTON);
          const input = getByTestId(LANDING.TEST_ID.INPUT_TEXT);
          fireEvent.change(input, { target: { value: 'full name' } });
          fireEvent.click(checkbox);
          fireEvent.click(button);
          expect(openFullLoading).toBeCalled();
          expect(showNewFeedback).toBeCalled();
          expect(saveUser).not.toBeCalled();
          jest.runAllTimers();
          expect(saveUser).toBeCalled();
        });
      });
    });
  });
});
