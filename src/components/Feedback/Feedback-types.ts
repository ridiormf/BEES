type FeedbackChildKind = 'success' | 'error' | 'warning';

export interface FeedbackChild {
  message: string;
  kind?: FeedbackChildKind;
  closing?: boolean;
}

export interface FeedbackProps {
  childList: Array<FeedbackChild>;
}
