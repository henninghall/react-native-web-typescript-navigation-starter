import { NavigationActions } from '@react-navigation/core';
import { web } from '../utils';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = web ? navigatorRef._navigation : navigatorRef;
}

function navigate(routeName, params?) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
};