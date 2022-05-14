import { useAppNavigation } from '../../../utils/hooks';

export const usePublic404Control = () => {
  const { goBack } = useAppNavigation();

  const onGoBack = () => {
    goBack();
  };

  return {
    methods: {
      onGoBack,
    },
  };
};
