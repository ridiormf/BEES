import { CSS, keyframes } from '@stitches/react';
import theme from '../../theme';
import Text from '../Text';
import { FEEDBACK } from './Feedback-consts';

const Container = theme.styled('div', {
  width: '100%',
  maxHeight: 400,
  position: 'fixed',
  zIndex: FEEDBACK.VALUES.Z_INDEX,
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  overflow: 'hidden',
});

const onShowFeedback = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-50px)' },
  '100%': { opacity: 1, transform: 'translateY(0px)' },
});

const onHideFeedback = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0px)' },
  '100%': { opacity: 0, transform: 'translateY(-50px)' },
});

const FeedbackItem = theme.styled('div', {
  width: 600,
  marginTop: 20,
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderRadius: '$borderRadius',
  animation: `${onShowFeedback} 500ms forwards`,
  border: '1px solid',
  variants: {
    kind: {
      success: {
        backgroundColor: '$successBackground',
        borderColor: '$successText',
      },
      error: {
        backgroundColor: '$errorBackground',
        borderColor: '$errorText',
      },
      warning: {
        backgroundColor: '$warningBackground',
        borderColor: '$warningText',
      },
    },
  },
  '&.will-hide': {
    animation: `${onHideFeedback} 500ms forwards`,
  },
});

const FeedbackText = theme.styled(Text, {
  fontSize: 18,
  variants: {
    kind: {
      success: {
        color: '$successText',
      },
      error: {
        color: '$errorText',
      },
      warning: {
        color: '$warningText',
      },
    },
  },
});

export const feedbackStyles = {
  styled: {
    Container,
    FeedbackItem,
    FeedbackText,
  },
};
