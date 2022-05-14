import React from 'react';
import { FeedbackChild } from '../../components/Feedback/Feedback-types';
import { useConstructor, useDidUpdate } from '../../utils/hooks';
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
  const [feedbackChildList, setFeedbackChildList] = React.useState<
    Array<FeedbackChild & { id: number }>
  >([]);

  const getCurrentFeedbackList = () => {
    return feedbackChildList;
  };

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

  const showNewFeedback = (child: Omit<FeedbackChild, 'id'>) => {
    const childId = new Date().valueOf();
    const newChild = { ...child, id: childId } as FeedbackChild & {
      id: number;
    };
    const newFeedbackList = getCurrentFeedbackList();
    newFeedbackList.push(newChild);
    setFeedbackChildList(newFeedbackList);

    setTimeout(() => {
      setFeedbackChildList((currentList) => {
        const newList = currentList.map((item) =>
          item.id === newChild.id ? { ...item, closing: true } : item,
        );
        return newList;
      });
      setTimeout(() => {
        setFeedbackChildList((currentList) => {
          const newList = currentList.filter((item) => item.id !== newChild.id);
          return newList;
        });
      }, 500);
    }, 7500);
  };

  return {
    state: {
      showFullLoading,
      feedbackChildList,
    },
    context: {
      user,
      saveUser,
      clearUser,
      openFullLoading,
      closeFullLoading,
      showNewFeedback,
    },
  };
};

export const useApplicationContext = (): ApplicationContext => {
  const context = React.useContext(applicationContext);
  return context;
};
