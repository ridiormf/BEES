import React from 'react';
import { useApplicationContext } from '../../providers/ApplicationProvider';
import { useBreweriesContext } from '../../providers/BreweriesProvider';

export const usePageTemplateControl = () => {
  const { user, clearUser } = useApplicationContext();
  const { clearBreweries } = useBreweriesContext();

  const logout = () => {
    clearUser!();
    clearBreweries!();
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
