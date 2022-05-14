import React from 'react';

export interface User {
  fullName: string;
  majority?: boolean;
}

export interface ApplicationState {
  showFullLoading: boolean;
}

export interface ApplicationContext {
  user?: User;
  saveUser?: (user: User) => void;
  clearUser?: () => void;
  openFullLoading?: () => void;
  closeFullLoading?: () => void;
}

export interface ApplicationProviderControl {
  state: ApplicationState;
  context: ApplicationContext;
}

export interface ApplicationProviderProps {
  children: React.ReactNode | React.ReactNode[];
}
