## UI Test Automation Framework created to test a banking application webpage using Cypress

## Prerequites 

Following softwares will need to be available or should be downloaded and install on your PC/Mac to run this project 

- node :  https://nodejs.org/en/download/
- Cypress : https://www.cypress.io/
- TypeScript: https://www.typescriptlang.org/#installation
- npm : https://www.npmjs.com/get-npm
- Microsoft Edge (Only for crossbrowser test commands) - https://www.microsoft.com/en-us/edge
- Firefox (Only for crossbrowser test commands) - https://www.mozilla.org/en-US/firefox/new/

## Usage

```
npm run cypress:e2e  // Run end to end tests in headless mode (Preferred for CICD)
npm run cypress:e2e-ui // Run end to end tests in Cypress UI mode
BROWSER=chrome npm run cypress:e2e-crossbrowser // Run end to end tests in headless mode on Chrome
BROWSER=chrome npm run cypress:e2e-crossbrowser-ui // Run end to end tests in UI mode on Chrome
BROWSER=edge npm run cypress:e2e-crossbrowser // Run end to end tests in headless mode on Edge
BROWSER=edge npm run cypress:e2e-crossbrowser-ui // Run end to end tests in UI mode on Edge
BROWSER=firefox npm run cypress:e2e-crossbrowser // Run end to end tests in headless mode on Firefox
BROWSER=firefox npm run cypress:e2e-crossbrowser-ui // Run end to end tests in UI mode on Firefox
DEVICE=iPhoneX npm run cypress:e2e-mobile // Run end to end tests in headless mode on iPhoneXR viewport
DEVICE=iPhoneX npm run cypress:e2e-mobile-ui // Run end to end tests in UI mode on iPhoneXR viewport
DEVICE=samsungS10 npm run cypress:e2e-mobile // Run end to end tests in headless mode on samsungS10 viewport
DEVICE=samsungS10 npm run cypress:e2e-mobile-ui // Run end to end tests in UI mode on samsungS10 viewport
DEVICE=ipad-mini npm run cypress:e2e-mobile // Run end to end tests in headless mode on ipad-mini viewport
DEVICE=ipad-mini npm run cypress:e2e-mobile-ui // Run end to end tests in UI mode on ipad-mini viewport
    
```

## Change log

| Version | Summary                      |
| ------- | -----------------------------|
| 1.0.0   | Initial Framework            |
