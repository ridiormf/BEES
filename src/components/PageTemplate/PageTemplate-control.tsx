import React from 'react';
import { useApplicationContext } from '../../providers/ApplicationProvider';

export const usePageTemplateControl = () => {
  const { user, clearUser } = useApplicationContext();

  const logout = () => {
    clearUser!();
  };

  const fullName = user?.fullName;
  return {
    state: {
      fullName,
    },
    methods: {
      logout,
    },
  };
};
