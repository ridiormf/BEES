import { useNavigate } from 'react-router-dom';
import { useApplicationContext } from '../../../providers/ApplicationProvider';
import { useDidMount } from '../../../utils/hooks';

export const useProtected404Control = () => {
  const { closeFullLoading } = useApplicationContext();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  useDidMount(() => {
    closeFullLoading!();
  });

  return {
    methods: {
      onGoBack,
    },
  };
};
