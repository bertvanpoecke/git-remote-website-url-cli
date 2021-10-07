# git-remote-website-url-cli

This tool returns the git remote website url for every provided commandline argument.

CLI wrapper around the [git-url-parse](https://github.com/IonicaBizau/git-url-parse) lib of [Ionică Bizău](https://github.com/IonicaBizau).

Used following guide to create this commandline tool: https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

## Install

```
npm install -g .
```

or

```
npm install -g git+https://github.com/bertvanpoecke/git-remote-website-url-cli.git
```

## Usage

```
git-remote-website-url https://bertvanpoecke@github.com/bertvanpoecke/git-remote-website-url-cli.git
git-remote-website-url git@github.com:bertvanpoecke/git-remote-website-url-cli.git
```