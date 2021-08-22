# Stadion FC React Native app

Stadion has started its own Football club in order to participate in some friendly matches with some well known clubs.

Of course, you can't be a real football club unless you have your own native app, so Stadion has started to build it's own.

## App architecture

The app has already been scaffolded out, and so far we have setup:

- A boiler plate React Native project using Typescript.
- [React Navigation](https://github.com/react-navigation/react-navigation) for routing
- [Redux](https://redux.js.org) for state management
  - With [Typesafe actions](https://github.com/piotrwitek/typesafe-actions) for better typing support

A fairly basic file structure has also been created in order to create a good foundation for modularisation.

| Path                     | Description                                                  |      |
| ------------------------ | ------------------------------------------------------------ | ---- |
| `./src`                  | Most of the app related source code resides in this directory. |      |
| `./src/modules`          | This directory is the home for all the modules in the application. Modules contain all the UI and state concerns for a given "vertical" in the app. Typically modules correspond fairly closely to the core navigation structure of the app. |      |
| `./src/modules/fixtures` | The **fixtures** module. Contains all code related to the fixtures section in the app. **This is the module which you will be working with.** |      |
| `./src/modules/home`     | The **home** module. Contains all code related to the fixtures section in the app. **You can completely ignore this module.** |      |
| `./src/modules/profile`  | The **profile** module. Contains all code related to the fixtures section in the app. **You can completely ignore this module.** |      |
| `./src/modules/store`    | The **store** module. Contains all code related to the fixtures section in the app. **You can completely ignore this module.** |      |
| `./src/core`             | Common code that the modules share.                          |      |
| `./src/store`            | Setup code for redux. **You don't need to worry about what's in here, but feel free to check it out** |      |
| `./src/types`            | Type declarations to extend Typescript.                      |      |

