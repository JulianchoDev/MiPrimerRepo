# Tolá OP clasp project

The base setup of this project is explained in the following [blog post](https://david-barreto.com/google-app-script-local-development-tutorial/).

They started project is in [this repository](https://github.com/barretodavid/google-apps-script-starter).

## Development environment set up

Follow these instructions to get the project running in your machine

1. Install [clasp](https://github.com/google/clasp) globally in your machine:

```shell
npm i @google/clasp -g
```

2. Log in to your google account using this command:

```shell
clasp login
```

4.  Create an Apps Script project using your account. You can do it [from here](https://script.google.com/home) or following [these instructions](https://developers.google.com/apps-script/guides/projects?hl=en)
5.  Make sure to have the [Google Apps Script API setting](https://script.google.com/home/usersettings) `ON`

6.  Clone this repository in your local machine. In the folder in which you want to have the repo, run:

```shell
git clone [this repo url]
```

5. Install project dependencies

```shell
npm i
```

6. With the terminal pointing to your local repo, run:

```shell
npm run set-env
```

7. Copy the Apps Script project ID (you can get it in the "Project Settings" section in the left sidebar) and set it as the value for the `CLASP_SCRIPT_ID` environment variable in the `.env` file in the root of the project
8. Run

```shell
npm run init
```

9. Run

```shell
npm run deploy
```

10. You should now see the project code in the Apps Script project

## Testing code

1. Duplicate [this](https://docs.google.com/spreadsheets/d/16JH8oNQzK0NUmwslS21Z3WnpvirJCWg8NVTe2k6kjVI/edit#gid=1982867521) sheets template file (make sure you have editor permissions)
2. Open the Apps Script project linked to the duplicated sheets file
3. Add the initially created Apps Script project (the one created in the section above) as library to the duplicated sheets file. Make sure to set `HEAD (Development mode)` as version and `tm` as the library identifier
4. Add this code snippet in the sheets Apps Script `Code.gs` file

```js
// Adds menu actions to globalThis so they are available to use in custom menus
tm.initMenuActions(globalThis);

function onOpen() {
  // Adds custom menu to UI
  tm.doOnOpen();
}

// tf: tolá function
const tf = (funcName, ...args) => {
  return tm.functionsReducer(funcName, ...args);
};
```

5. You can now test that the sheets file and the Apps Script project are correctly linked by using the following formula in any sheet cell, it would return `Success`

```shell
=tf("test")
```
