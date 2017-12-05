# Reproduction for a bug with Angular5 - dynamic module loading

Link of the issue: https://stackoverflow.com/questions/47342589/angular5-dynamic-component-loading-containing-material-component-in-template

# Install

```
git clone git@github.com:thyb/repro-dynamic-loading.git
cd repro-dynamic-loading
chmod +x setup.sh
./setup.sh
```

- first button works (dynamic import of a normal button)
- second button don't work (dynamic import of a material button)


# Start

After the install, if you want to restart the app, run `npm start`

# Build

Build: `npm build`

Watch mode: `npm build --watch
