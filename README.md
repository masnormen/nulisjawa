# 🔥 React + Vite Frontend Template

This template can be used to kick-start a frontend project using React and TailwindCSS. It includes prettier, code linting, CSS framework, code output obfuscator, and even GitHub Actions flow that's ready to use and configure yourself.

It will work well especially if you use JetBrains Webstorm, because it takes care of `prettier` and `eslint` automatically. But with the right configuration, VSCode will work too.

## What's included:

`*: needs to be configured to use`

**Dev features**

- *Basic package.json file
- Vite (so you can use Rollup plugins)
- ESLint
- Prettier
- .editorconfig
- Uses yarn by default

**Frontend libraries**

- React 17+
- Axios for API fetching
- Day.js for easy date and time formatting
- TailwindCSS

**Deployment features**

- *GitHub Actions to upload to FTP
- Javascript-obfuscator plugin for Rollup

## Usage

- Degit/Clone this repository:
  ```shell
  $ degit https://github.com/masnormen/template-frontend
  ```
  or if you don't have degit available:
  
  ```shell
  $ git clone https://github.com/masnormen/template-frontend
  ```
- Install the packages:
  ```shell
  $ yarn install
  ```

- Edit `package.json`, `index.html`, and `.github/workflows/main.yml` according to your needs
