import { NavigationActions } from '@react-navigation/core';
import { web } from '../utils';
import { DrawerActions } from 'react-navigation';
import { StackActions } from 'react-navigation';

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

function replace(routeName, params?) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, params })],
    }
    ))
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer())
}

function closeDrawer() {
  _navigator.dispatch(DrawerActions.closeDrawer())
}

export default {
  openDrawer,
  navigate,
  setTopLevelNavigator,
  replace,
  closeDrawer,  
};