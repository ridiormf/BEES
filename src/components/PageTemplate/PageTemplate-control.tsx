import { useApplicationContext } from '../../providers/ApplicationProvider';
import { useBreweriesContext } from '../../providers/BreweriesProvider';
import { useAppNavigation } from '../../utils/hooks';

export const usePageTemplateControl = () => {
  const { user, clearUser } = useApplicationContext();
  const { clearBreweries } = useBreweriesContext();
  const { goBack, pathname } = useAppNavigation();

  const logout = () => {
    clearUser!();
    clearBreweries!();
  };

  const onGoBackClick = () => {
    if (pathname === '/') {
      logout();
    } else {
      goBack();
    }
  };

  const fullName = user?.fullName;
  return {
    state: {
      fullName,
    },
    methods: {
      onGoBackClick,
    },
  };
};
