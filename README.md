# Books-app
This repo contains code for web bo0ks app.


## Requirements
* node `^12.18.2`
* yarn `^1.22.5` or npm `^6.14.15`

## Installation

After confirming that your environment meets the above [requirements](#requirements), you can create a new project:

```bash
$ git clone git@github.com:umairfarooq44/books-app.git
$ cd books-app
```

When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:8080`|
|`build`            |Builds the application to ./dist|
|`lint`             |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors|

### Problem solving Tasks

The problem solving tasks are in `tasks/` folder. To run the problems, please run:

```bash
$ node tasks/
```
There are consoles in `index.js` file which can be used to test on different inputs.