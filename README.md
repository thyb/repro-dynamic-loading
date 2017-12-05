# Bug with Angular5/Material - dynamic module loading

Link of the issue: https://stackoverflow.com/questions/47342589/angular5-dynamic-component-loading-containing-material-component-in-template

# Install

```
git clone git@github.com:thyb/repro-dynamic-loading.git
cd repro-dynamic-loading
chmod +x setup.sh
./setup.sh
```

![Screenshot](https://raw.githubusercontent.com/thyb/repro-dynamic-loading/master/screen.png)

- first button works (dynamic import of a normal button)
- second button don't work (dynamic import of a material button)

# Start

After the install, if you want to restart the app, run `npm start` or `./node_modules/.bin/electron .`

# Build

Build: `npm build`

Watch mode: `npm build --watch`
