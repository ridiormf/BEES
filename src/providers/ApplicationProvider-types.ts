import React from 'react';

export interface User {
  fullName: string;
  majority?: boolean;
}

export interface ApplicationState {
  user?: User;
}

export interface ApplicationMethods {
  saveUser?: (user: User) => void;
  clearUser?: () => void;
}

export interface ApplicationProviderControl {
  state: ApplicationState;
  methods: ApplicationMethods;
}

export interface ApplicationProviderProps {
  children: React.ReactNode | React.ReactNode[];
}
