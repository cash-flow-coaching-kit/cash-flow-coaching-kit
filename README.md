This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

The project' node version is managed by [nvm](https://github.com/nvm-sh/nvm). If you do not already, install nvm.

To use the correct node/npm version for the project, run `nvm use`. If you get an error, you may need to install the correct version. Simply run `nvm install`.

After you have done that, run [`yarn`](https://yarnpkg.com/) to install all of the project dependencies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Committing

The project is setup to use conventional commits and a git alias was automatically added after the `yarn` command was run. When you are ready to make a commit. Run `git cz` and follow the steps to construct your commit message.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Component structure

```
Component
- README.md
- Component.tsx
- index.ts
- _partials
  - subcomponent.tsx
  - anothercomponent.tsx
  - index.ts
- _config
  - shape.ts
  - utilities.ts
  - machine.ts
  - styles.ts
- _tests
  - Component.test.tsx
- Element
  - Element.tsx
  - index.ts
```
