import React from 'react';
import { FeedbackChild } from '../../components/Feedback/Feedback-types';

export interface User {
  fullName: string;
  majority?: boolean;
}

export interface ApplicationState {
  showFullLoading: boolean;
  feedbackChildList: Array<FeedbackChild>;
}

export interface ApplicationContext {
  user?: User;
  saveUser?: (user: User) => void;
  clearUser?: () => void;
  openFullLoading?: () => void;
  closeFullLoading?: () => void;
  showNewFeedback?: (child: FeedbackChild) => void;
}

export interface ApplicationProviderControl {
  state: ApplicationState;
  context: ApplicationContext;
}

export interface ApplicationProviderProps {
  children: React.ReactNode | React.ReactNode[];
}
