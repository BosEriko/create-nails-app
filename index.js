#!/usr/bin/env node
const degit = require('degit');
const path = require('path');

const args = process.argv.slice(2);
if (!args[0]) {
  console.error("Please specify a project name: npx create-nails-app my-app");
  process.exit(1);
}

const projectName = args[0];
const emitter = degit('BosEriko/nails', { cache: false, force: true, verbose: true });

emitter.clone(path.resolve(projectName))
  .then(() => {
    console.log(`✅ Project ${projectName} created!`);
    console.log(`cd ${projectName} && npm install`);
  })
  .catch(err => {
    console.error(err);
  });
