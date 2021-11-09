import {ModuleApp} from '@owd-client/core/index';

import devLogsConfig from '~/../config/dev-logs/config';
import devLogsStore from './store'

// window components
import WindowDevLogs from "./windows/WindowDevLogs.vue";

export default class DevLogsModule extends ModuleApp {
  setup() {
    return {
      name: "dev-logs",
      singleton: true,
      config: devLogsConfig,
      windows: [
        {
          component: WindowDevLogs,
          name: "WindowDevLogs",
          title: "Dev logs",
          icon: {
            name: "mdi-text",
            size: "23px"
          },
          size: {
            width: 448,
            height: 300
          },
          position: {
            x: -1,
            y: 0,
            z: 0
          }
        }
      ]
    }
  }

  setupStore() {
    return devLogsStore
  }
}