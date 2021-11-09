# Dev Logs module for OWD Client
> Development logs for your Open Web Desktop client

<p>
    <img src="media/demo.png" alt="OWD Dev logs module demo" />
</p>

<p>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" /></a>
    <a href="https://github.com/owdproject/owd-client"><img src="https://img.shields.io/badge/owd-client-3A9CB6" /></a>
    <a href="https://github.com/topics/owd-modules"><img src="https://img.shields.io/badge/owd-modules-888" /></a>
    <a href="https://hacklover.net/patreon"><img src="https://img.shields.io/badge/become-a%20patron-orange" alt="Become a Patron" /></a>
    <a href="https://hacklover.net/discord"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Join us on Discord" /></a>
</p>

## Overview
Enhance your work by showing some cool development logs

## Quick install
- Move to your client folder, then
  ```
  # Install this module with Npm
  npm install https://github.com/hacklover/owd-app-dev-logs
  
  # Or using Yarn
  yarn add https://github.com/hacklover/owd-app-dev-logs
  ```
- Define this module in `owd-client/client.extensions.ts`
  ```js
  import AboutModule from "@owd-client/core/src/modules/app/about";
  import DebugModule from "@owd-client/core/src/modules/app/debug";
  import DevLogsModule from "owd-app-dev-logs/client";

  export default {
    app: {
      modules: [
        AboutModule,
        DebugModule,
        DevLogsModule,
      ]
    },
    ...
  ```

## Compatibility
- Open Web Desktop client v2.0.0-beta.3

## License
This project is released under the [MIT License](LICENSE)