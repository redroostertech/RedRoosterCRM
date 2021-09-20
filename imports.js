const express       = require('express');
const path          = require('path');
const session       = require('client-sessions');
const configs       = require('./configs.js');
const firebase      = require('./firebase.js');
const NodeCache     = require('node-cache');
const http          = require('http');
const AWS           = require('aws-sdk');

module.exports = {
    express:  express,
    path: path,
    session: session,
    configs: configs,
    firebase: firebase,
    nodeCache: NodeCache,
    http: http,
    aws: AWS
}