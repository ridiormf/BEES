type FeedbackChildKind = 'success' | 'error' | 'warning';

export interface FeedbackChild {
  id: string | number;
  message: string;
  kind?: FeedbackChildKind;
  closing?: boolean;
}

export interface FeedbackProps {
  childList: Array<FeedbackChild>;
}
