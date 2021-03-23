# monorepo-lerna-publish-npm-experiment

Experimenting with monorepos using lerna and publishing it to npm.

## Notes

The attributes such as **directories**, **files**, **typings**, **publishConfig** and **main** in each `package.json` file under `/packages/*` are important. They control what will be pushed to **NPM** and what will be the entry point for our library (**main** and **typings** attributes);

## Publishing

Create a free organization at `npmjs.com`.

Login to that organization from terminal:

```sh
npm login --scope=your_organization_name
```

From terminal, run the `publish` npm script from our root `package.json`:

```sh
npm run publish
```

Lerna should guide you through the publishing process.

If all goes well, you'll see a message at the end.

> lerna success published 3 packages
