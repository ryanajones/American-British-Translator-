const chai = require('chai');
const chaiHttp = require('chai-http');

const { assert } = chai;
const server = require('../server.js');

chai.use(chaiHttp);

const Translator = require('../components/translator.js');

suite('Functional Tests', () => {});
