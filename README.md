Reproduce:

This command print a file URL:

```shell
node index.test.js
```

Run with jest throw a `Cannot find module...` error:

```shell
set NODE_OPTIONS=--experimental-vm-modules
jest
```
