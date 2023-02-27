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
  },```
