# Contributing - WIP

I would really love for you to contribute to **ngx-ribbon** and help make it better, forever!

Here are the instructions on how to develop locally:

### 1. Clone the repository master

```bash
$ git clone https://github.com/slashand/ngx-ribbon.git
```

### 2. Install the dependencies

Go inside the repo folder

```bash
 $ npm install
```

### 3. Running sample application

PLEASE NOTE: For your convenience during development you can simply run `npm start` or if you like putting in extra work follow the steps below.

The `src` folder contains an sample application of how you can use `ngx-ribbon`. You can, also, create whatever http.patch method you desire to update the json file in the sample application. The type of icons and commands you choose are based on your development use case.

`src/assets/ribbon-data/quick-access-toolbar-data.json` contains data for the quick access toolbar.
API locations are: http://localhost:3000/button and http://localhost:3000/quickaccess

The following will occur when you run `npm install` or `yarn`.

A. Install fake server json-server from https://github.com/typicode/json-server

```bash
$ npm install json-server --save-dev
```

B. After installing `json-server` typing the following at the prompt will load the api:

```bash
$ json-server src/assets/ribbon-data/quick-access-toolbar-data.json
```

C. Open another prompt/shell and start the app:

```bash
ng serve
```

### 4. Making changes

Create a new branch specific to the change you are making.

Examples:

`fix/mobile-responsiveness`
`feat/add-material-theme`

### 5. Build the ngx-ribbon package

**@ngx-ribbon/lib** only dependency is Angular. Try to keep it that way. If you think a feature is good for ngx-ribbon then let us talk about it. I'm sure that might be the case. Better yet, show me.

A. Build the core package using the command

```bash
npm run build:lib
```

Open to edit `lib/package.json`, and replace `"VERSION"`, to valid version, e.g. `1.0.1`

B. Register it, Link it

```bash
npm link build/core
```

Now **@ngx-ribbon/lib** is linked, we can build the other packages without errors.

### 6. Build all the packages

```bash
npm run build
```

### 7. Submit your PR
