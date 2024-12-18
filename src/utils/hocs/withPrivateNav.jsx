import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
// import { useLocation } from "react-router-dom";

// import {
//   selectUser,
//   isAuthenticated,
//   selectUserHasWorkspace,
// } from "@store/selectors/user";

// const pathname = "";

const isAuth = true;
const isActivated = true;
const userHasWorkspace  = true;

const ACTIVATE_PATH = "ConfirmEmailScreen";

const DEFAULT_COMPONENT_OPTIONS = {
  requiresWorkspace: false,
};

const withPrivateNav = (
  Component,
  componentOptions = DEFAULT_COMPONENT_OPTIONS
) => {
  const WithPrivateNav = ({ ...rest }) => {
    const navigation = useNavigation();

    // const isAuth = useSelector(isAuthenticated);
    // const { isActivated } = useSelector(selectUser);
    // const userHasWorkspace = useSelector(selectUserHasWorkspace);

    React.useEffect(() => {
      if (!isAuth) {
        return navigation.navigate('DeliveryScreen')
  
      }
  
      if (componentOptions.requiresWorkspace && !userHasWorkspace) {
        return navigation.navigate('DeliveryScreen')
      }

      // if (!isActivated && !pathname.includes(ACTIVATE_PATH)) {
      //   return navigation.navigate(`/${ACTIVATE_PATH}`);
      // }
    }, [isAuth, isActivated, userHasWorkspace]);

    return (
        <Component {...rest} />
    );
  }; 

  WithPrivateNav.defaultName = "WithPrivateNav";

  return WithPrivateNav;
};

export default withPrivateNav;
