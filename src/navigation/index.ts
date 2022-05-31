/* eslint-disable global-require */
import {
  Navigation,
  NavigationComponentProps,
  Options,
} from 'react-native-navigation';
import { ComponentType, ReactText } from 'react';

import { Color } from '../constants/Color';
import { ViewName } from '../constants/ViewName';
import { ViewNameType } from '../types/View';

import * as Views from '../views';
import withProvider from '../hocs/withProvider';
import System from '../constants/System';

const views = Object.values(Views);

const getDefaultOptions = (): Options => ({
  topBar: {
    visible: false,
    height: 0,
  },
  layout: {
    orientation: ['portrait'],
    backgroundColor: Color.BACKGROUND,
    componentBackgroundColor: Color.BACKGROUND,
  },
  bottomTabs: {
    animate: true,
    drawBehind: true,
    titleDisplayMode: 'alwaysShow',
  },
  statusBar: {
    style: System.isOs ? 'dark' : 'light',
  },
});

export function setMainStack(): Promise<string> {
  Navigation.setDefaultOptions(getDefaultOptions());

  return Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ViewName.NEW_LIST,
            },
          },
        ],
      },
    },
  });
}

export function pushSingleView<T>(
  componentId: string,
  name: ViewNameType,
  viewProps: T | Record<string, never> = {},
): Promise<string> {
  return Navigation.push<T | Record<string, never>>(componentId, {
    component: {
      name,
      passProps: {
        ...viewProps,
      },
      options: {
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      },
    },
  });
}

export function popView(componentId: string): Promise<string> {
  return Navigation.pop(componentId);
}

export function registerViews(): void {
  views.forEach((view) => {
    Navigation.registerComponent(
      view.displayName as ReactText,
      () => view as ComponentType<NavigationComponentProps>,
    );
  });
}
