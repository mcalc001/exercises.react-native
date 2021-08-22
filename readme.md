# Stadion FC React Native app

Stadion has started its own Football club so that it can participate in some friendly matches with some well known clubs.

Of course, you can't be a real football club unless you have your own native app, so we've decided to build our own.

The exercise you'll be embarking on will implement a feature of the app.

We'll explain what that is soon, but first we'll help you get your bearings by giving you a brief overview of the architecture of the application.

> **Note:**  you're about to be given a top level overview of the app structure as a whole. To give you a bit of context as to the scope of the exercise, the only files you'll be expected to work with are in the **fixtures** module. The specifics of this will follow.

## App architecture

A Stadion developer has already scaffolded the app out, and so far we have setup:

- A boiler plate React Native project using Typescript.
- [React Navigation](https://github.com/react-navigation/react-navigation) for routing
- [Redux](https://redux.js.org) for state management
  - With [Typesafe actions](https://github.com/piotrwitek/typesafe-actions) for better typing support
- [Styled Components](https://www.styled-components.com) for component building
- A small API module which uses mock data for the time being and some timeouts to simulate loading latency.

The general layout and bootstrapping of the application follows some fairly common patterns, so if you start navigating the code from `App.tsx`, you should hopefully find some familiarity with the structure.

### File Structure

The file and folder structure, whilst not so big yet, has started to layout what could be considered a good foundation for modularisation and separation of concerns.

| Path                     | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| `./src`                  | Most of the app related source code resides in this directory. |
| `./src/modules`          | This directory is the home for all the modules in the application. Modules contain all the UI and state concerns for a given "vertical" in the app. See more in the Modules section. |
| `./src/modules/fixtures` | The **fixtures** module. Contains all code related to the fixtures section in the app. |
| `./src/modules/home`     | The **home** module. Contains all code related to the fixtures section in the app. |
| `./src/modules/profile`  | The **profile** module. Contains all code related to the fixtures section in the app. **** |
| `./src/modules/store`    | The **store** module. Contains all code related to the fixtures section in the app |
| `./src/core`             | Common code that the modules share.                          |
| `./src/core/api`         | The aforementioned API and mock data is in this folder.      |
| `./src/core/components`  | This folder contains components that are shared or common to all the modules in the application. Typically, this only includes very generic components that aren't related to any one specific module. |
| `./src/store`            | Setup code for redux.                                        |
| `./src/types`            | Type declarations to extend Typescript.                      |

## Modules

The modules correspond pretty much one for one with the bottom tab navigation of the app.

Each module at a minimum has:

- Some screens
- Some componens
- An `actions.ts` file that contains all the actions for a module.
- A `reducer.ts` file that contains the reducer that handles the actions in the `actions.ts`
- A `thunks.ts` file that contains asynchronous behaviours, such as fetching data from servers.

The only module currently in development is the **fixtures** module, and this is the module within which you'll be working.

## Your task

A

## 