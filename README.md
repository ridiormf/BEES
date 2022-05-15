# Test project for BEES

This is a test project, focusing on using development tools for ReactJS with built-in tests and the use of TypeScript.

## First Things First

Before proceed you will need to update node_modules.
Run `yarn install` in your terminal pointing to project root.

## Run Project and Tests

Start project running the command `yarn start` on terminal pointing to project root.

With this your project should be opened in browser on address `localhost` port `3000`.

To test this project you can use `cypress` or `@testing-library/react`, with the following commands:

`cypress`: `yarn e2e` (make sure that your project is running on `localhost:3000`).
`@testing-library/react`: `yarn test`

## Folder Structure

The distribution of folders and files was designed as follows:

- **src**
- - \***\*tests\*\*** -> Test utils for `@testing-library/react`
- - **api** -> `apisauce` FetchApi calls and definitions
- - **assets** -> Application assets (images and icons)
- - - **png** -> Image assets
- - - **svg** -> Svg assets (icons)
- - **components** -> Atomic components to use.
- - - **_Component Folder_**
- - **features** -> Components that can be reused with more specific business features
- - - **_Feature folder_**
- - **navigation** -> Routes for `react-router-dom`
- - - **public** -> Public routes that user **don't** need to be logged.
- - - **protected** -> Protected routes that user need to be logged.
- - **pages** -> Application pages, like `Landing`, `Home` or `404`)
- - - **_Page Folder_**
- - **providers** -> React contexts with creation of providers, hooks and logics.
- - - **_Provider Folder_**
- - **theme** -> Theme creation for styling with `@stitches/react
- - **utils** -> Applications generic logic utils.

_Obs: Inside some of these folders there is a **tests** folder, for the centralization of test files for the `@testing-library/react`_

## Tools

Some os tools used in project:

`React context api`: Used to handle fetched data, user permission and some feedback utilities calls (like loading or error/success feedback).

## Libraries

Below is the list of the main libraries used and a description of usefulness and familiarity with me:

`apisauce`: It's motivation is to facilitate the use of `FetchApi` tools, using `axios` as a base and implementing new solutions. I often vary between using it and using `axios`, depending on project needs.

`@stitches/react`: Used to create custom themes for styling components for performance and logic reuse. 've never used this library, I chose to use it because I knew it was used at **BEES** and that I would have to adapt to the tool..

`@testing-library/react`: Used to do unit tests in the application. I was already familiar with Jest and implemented it on the Landing screen. I didn't have time to complete unit tests on all components.

`cypress`: End-to-end test for browser applications. Just like `@stitches/react`, I had never used it and I chose to know that it is used at **BEES**.

`react-router-dom`: Used to handle URL changes and related functionalities. I was planning to use it for creating "see more brewery info" but didn't have time.

## What Was Missing:

Some solutions I would like to have either finalized or implemented:

1.  Option to vew more breweries, querying for next pages and concatenating with the current list;
2.  Implement breweries query with the options accepted by the GET service;
3.  Finalize unit tests on all components, pages and functionalities;
4.  Finalize use tests with cypress;
5.  Comments over all components props to be helped by IDE, as I did in the utils folder functions;
6.  Implementation of text field feedback when user insert invalid name; and
7.  Fetch brewery info through ID and create a page to display this information.
