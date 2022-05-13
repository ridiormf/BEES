import React from 'react';
import { ApplicationProviderControl, User } from './ApplicationProvider-types';

export const ApplicationContext =
  React.createContext<ApplicationProviderControl>({
    state: {},
    methods: {},
  });

export const useApplicationProviderControl = (): ApplicationProviderControl => {
  const [user, setUser] = React.useState<User>();

  const saveUser = (userToSave: User) => {
    setUser(userToSave);
  };

  const clearUser = () => {
    setUser(undefined);
  };

  return {
    state: {
      user,
    },
    methods: {
      saveUser,
      clearUser,
    },
  };
};

export const useApplicationContext = (): ApplicationProviderControl => {
  const applicationContext = React.useContext(ApplicationContext);
  return applicationContext;
};
