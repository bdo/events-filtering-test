// File required by `npm test` (see package.json)

process.env.TZ = 'Europe/Paris';

import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme());

global.expect = chai.expect;
global.React = React;
