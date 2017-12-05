cd addon
npm install && npm run build:core
cd ../addon-material
npm install && npm run build:core
cd ../main-app
npm install && npm run build && npm run start