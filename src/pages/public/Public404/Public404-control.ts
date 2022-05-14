import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApplicationContext } from '../../../providers/ApplicationProvider';
import { checkFullName } from '../../../utils/validations';

export const usePublic404Control = () => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  return {
    methods: {
      onGoBack,
    },
  };
};
