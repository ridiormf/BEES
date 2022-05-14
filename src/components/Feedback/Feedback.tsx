import React from 'react';
import { createPortal } from 'react-dom';

import { feedbackStyles } from './Feedback-styles';
import { FeedbackProps } from './Feedback-types';

import { getBody } from '../../utils/dom';

const {
  styled: { Container, FeedbackItem, FeedbackText },
} = feedbackStyles;

const Feedback: React.FC<FeedbackProps> = ({ childList }) => {
  return createPortal(
    <Container>
      {childList.map((child) => (
        <FeedbackItem
          key={child.id}
          kind={child.kind}
          className={child.closing ? 'will-hide' : ''}
        >
          <FeedbackText kind={child.kind}>{child.message}</FeedbackText>
        </FeedbackItem>
      ))}
    </Container>,
    getBody(),
  );
};

export default Feedback;
