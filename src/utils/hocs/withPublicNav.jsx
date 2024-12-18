import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { isAuthenticated, selectUser } from '../../store/selectors/user';

const withPublicNav = (Component) => {
  const WithPublicNav = ({ ...rest }) => {
    const navigation = useNavigation();
    const isAuth = useSelector(isAuthenticated);
    const { isActivated } = useSelector(selectUser);

    React.useEffect(() => {
      if (!isAuth) return;

      if (!isActivated) {
        navigation.navigate('ConfirmEmailScreen');
      } else {
        navigation.navigate('DeliveryScreen');
      }
    }, [isAuth, isActivated, navigation]);

    if (isAuth) return null;

    return (
      <Component {...rest} />
    );
  };

  WithPublicNav.defaultName = "WithPublicNav";

  return WithPublicNav;
};

export default withPublicNav;
