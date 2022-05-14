import React from 'react';
import { useConstructor } from '../../utils/hooks';
import { APPLICATION_PROVIDER } from './ApplicationProvider-consts';
import {
  ApplicationContext,
  ApplicationProviderControl,
  User,
} from './ApplicationProvider-types';

export const applicationContext = React.createContext<ApplicationContext>({});

export const useApplicationProviderControl = (): ApplicationProviderControl => {
  const storageUser = useConstructor(() => {
    const jsonUser = localStorage.getItem(
      APPLICATION_PROVIDER.STORAGE_KEYS.USER,
    );
    if (jsonUser) {
      return JSON.parse(jsonUser);
    }
    return undefined;
  });

  const [user, setUser] = React.useState<User | undefined>(storageUser as User);
  const [showFullLoading, setShowFullLoading] = React.useState<boolean>(!!user);

  const saveUser = (userToSave: User) => {
    localStorage.setItem(
      APPLICATION_PROVIDER.STORAGE_KEYS.USER,
      JSON.stringify(userToSave),
    );
    setUser(userToSave);
  };

  const clearUser = () => {
    localStorage.removeItem(APPLICATION_PROVIDER.STORAGE_KEYS.USER);
    setUser(undefined);
  };

  const openFullLoading = () => {
    setShowFullLoading(true);
  };

  const closeFullLoading = () => {
    setShowFullLoading(false);
  };

  return {
    state: {
      showFullLoading,
    },
    context: {
      user,
      saveUser,
      clearUser,
      openFullLoading,
      closeFullLoading,
    },
  };
};

export const useApplicationContext = (): ApplicationContext => {
  const context = React.useContext(applicationContext);
  return context;
};
