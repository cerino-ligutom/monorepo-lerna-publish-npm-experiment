# monorepo-lerna-publish-npm-experiment

Experimenting with monorepos using lerna and publishing it to npm.

## Notes

The attributes such as **directories**, **files**, **typings**, **publishConfig** and **main** in each `package.json` file under `/packages/*` are important. They control what will be pushed to **NPM** and what will be the entry point for our library (**main** and **typings** attributes);
