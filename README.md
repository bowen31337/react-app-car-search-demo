## Available Scripts

This project is an "eject" version of create-react-app,but added with more features/changes below:
- Yarn package management
- Webpack upgraded to version 2
- move babel config from package.json to .bablesc
- multi-entries, code splitting, tree shaking on production
- add service-worker for production (Progressive Web Apps)

### To Do List
- Server Rendering

### Project Description
The widget is about the car search. the link of demo is [https://ns-gjigbhyuxp.now.sh](https://ns-gjigbhyuxp.now.sh)

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

After builds, You may also serve it locally with a static server:
``` js
yarn install -g pushstate-server
pushstate-server build
open http://localhost:9000
```

### `yarn run deploy-*`

### Deploy to Now server
```bash
yarn run deploy-now
```
For more infor on how to deploy app to Now server, please refer to this post:  [Zero Configuration Deployment for React app with Zeit Now](https://medium.com/@kawixiao/zero-configuration-deployment-for-react-apps-with-zeits-now-4f002be98c#.eyvj3mjdb)

### Deploy to Github page
```bash
yarn run deploy-gh
```
Please configure the 'homepage' in package.json before deploying.
