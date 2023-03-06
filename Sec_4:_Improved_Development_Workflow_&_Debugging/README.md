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
---

# 45 : Using Nodemon for Autorestarts.

installed nodemon using the below cmd
 "" sudo npm install -g nodemon ""
---

# 46 : Global & Local npm Packages
In the last lecture, we added nodemon as a local dependency to our project.

- The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run npm install in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.

- The attached course code snippets also are shared in that way, hence you need to run npm install in the extracted packages to be able to run my code!

- I showed that nodemon app.js would not work in the terminal or command line because we don't use local dependencies there but global packages.

- You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): npm install -g nodemon would do the trick. Specifically the -g flag ensures that the package gets added as a global package which you now can use anywhere on your machine, directly from inside the terminal or command prompt.


---

# 47 : Understanding different Error Types

1.  Syntax Errors:
        Syntax errors occur when there is a mistake in the way that the code is written. These errors are usually caught by the compiler or interpreter during the compilation or parsing phase of the program. Syntax errors prevent the program from running at all.
        Example of a syntax error in Node.js:

        ```js
        console.lo("Hello, world!");
        ```
        This code will produce a syntax error because the correct syntax for the console.log function is console.log() and not console.lo().


2.  Runtime Errors:
        Runtime errors occur when the program is running and encounter an unexpected condition or behavior that was not accounted for in the code. These errors can cause the program to crash or produce unexpected results.
        Example of a runtime error in Node.js:

        ```js
        let a = 10;
        let b = 0;
        let c = a / b;
        console.log(c);
        ```
        This code will produce a runtime error because it is attempting to divide by zero, which is not a valid mathematical operation.


3.  Logical Errors:
        Logical errors occur when the program runs without any syntax or runtime errors, but produces incorrect results due to a flaw in the logic of the program. These errors can be difficult to detect and fix, as the program is technically running correctly, but producing unexpected results.
        Example of a logical error in Node.js:

        ```js
        function calculateSum(array) {
        let sum = 0;
        for (let i = 1; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
        }

        let numbers = [1, 2, 3, 4, 5];
        console.log(calculateSum(numbers));
        ```
        This code will produce a logical error because the for loop starts at index 1 instead of index 0, causing the first element of the array to be skipped in the summation.

---

# 48 : Fixing and Finding Syntax errors 

1. syntax errors are very easy to find and fix .
2. if you r using good project setup then likely the IDE/visual studio code automatically shows you red sweggly lines below the error.

---

# 49 : Dealing with runtime errors

1. runtime errors are the errors above syntax errors and they crash the running app while we try to start the app.
2. runtime error message is shown in the terminal where our app is running and thats where we can find the line number and all the imp notes for resolving that perticular error.

# 50 : Logical errors 

1. logical errors are the one errors that do not spit out error msgs on to the console or terminal.
2. BUt , they just cause our application not to work in the way that we were expecting it to be working.
3. steps to use debugger :
    - quit the project if it is running 
    - setup breakpoints where you want your app to stop once you start.
    - choose the app.js/root file 
    - then go to "Run" option on the vscode top menu and choose start debugging.
    - after that use the app and reach the process where you want to lookup in to the code.
    - and then the debugger on vscode will start the app and stop when it reaches the breakpoint.
    - after that you can hover at the variables and then see that the value inside your variables is now shown when you hover.
    - if you want to see all the variables and all the scopes and closures etc you can choose the debug console option in the view option in the vscodes top menu.
    - you can also use the watch option on the debug view on the left side and write a perticular variable name that you want to debug and see specifically:
    - you can also see the call stack and all the breakpoints and also edit your breakpoints. from right there. 


---

# 51 : Using the debugger

1. you can use the debug console terminal's last line as a realtime nodejs/js scripts compilor type of thing that is very helpful.
2. like someVariable.split("=")   this will give the result right at the runtime in the debugger.

---

# 52 : Restarting the debugger Automatically After Editing our app

1.  in this we will get to know how can we use the debugger more robustly so that if we change any file in our project 

2. So on the run option of vs codes top menu you can see "Add configuration" option which you have to click and vscode will create a vscode config file inside the vscode folder which got just now created .
3. nav to that config file inside the .vscode folder and the config file will be named as launch.json (choose nodejs while adding the configuration).
4. the launch.json was like this : 
```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${file}"
        }
    ]
}
```
BUT WE CHANGED IT TO :
```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            // this will start debugger all the time from the app.js as we have to start the server before grtting into anything.
            "program": "${workspaceFolder}/app.js",
            // this restarts the debugger
            "restart": true,
            // this is defaultly to node but we have to write nodemon instead of node
            "runtimeExecutable": "nodemon",
            // this below uses the integrated terminal as the consle  and shows all the logs which we log
            "console": "integratedTerminal",
        }
    ]
}
```