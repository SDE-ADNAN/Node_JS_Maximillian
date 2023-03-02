## added the first project in './01-understanding-npm-scripts'

# 41 : Module introduction 

1. got to know that we will be learning about 
    - debugging our code 
    - making our development workflow more robust with help of some helpful tools.


---

# 42 : UnderStanding NPM scripts.

0. the command used to create a package.json file is "npm init" and hit enter after that it prompts us about various options and we have to choose the respective option as  our need.
1. the scripts section in package.json is where we define our aliases for some project development commands.
2. this is very helpfull for better development env. for the people working on that project.
3. for running the script we use "npm||space||scriptName" 
4. Here  below , we can see two scripts "start" and "start-server" of which "start" is a special command/keyword for npm package.jsons which run by the command "npm start" but on the other hand "start-server" will require "npm run start-server" as it is not a special keyword registered in npm's package.json and npm does'nt identifies it , that's why we require to use "npm run" before "start-server" .
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "start-server": "node app.js" 
}
```

---

# 43 : Installing ThirdParty Packages

 We require all of this components to run our development workflows;
- Local project
- < Your Project >
- Core Node Packages
- Dependencies (3rd party Node packages)
    - these are installed and managed by npm
    - they can be express , body-parser , etc.

For installing development dependencies we use npm commands :
- "npm install packageName --save" this will save the package as a production dependency.
- "npm install packageName --save-dev" this will save the package as a development dependency and says that we will use this package just for development and not for production.
- "npm install packageName -g" this specifies that this package will be installed as a global dependency and will be available all over the system where ever it is needed.

## We use nodemon to handle the task of restarting the server whenever we are making any file changes, and nodemon will handle this very well, the command to install nodemon is below

```shell
npm install nodemon --save
```

---

# 44 : Global Features vs Core Modules vs Third-Party Modules

The last lectures contained important concepts about available Node.js features and how to unlock them.

You can basically differentiate between:

Global features: Keywords like const or function but also some global objects like process

Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

Global features are always available, you don't need to import them into the files where you want to use them.

Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

Example:

```js
const fs = require('fs');
```

You can now use the fs object exported by the "fs" module.

Third-party Modules need to be installed (via npm install in the project folder) AND imported.

Example (which you don't need to understand yet - we'll cover this later in the course):
```js
// In terminal/ command prompt
npm install --save express-session
// In code file (e.g. app.js)
const sessions = require('express-session');
```