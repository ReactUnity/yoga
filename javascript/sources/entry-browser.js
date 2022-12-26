/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

const Yoga = require('./entry-common');
const nbind = require('../build/Release/nbind.js');

let ran = false;
let ret = null;

nbind({}, function(err, result) {
  if (ran) {
    return;
  }

  ran = true;

  if (err) {
    throw err;
  }

  ret = result;
});

if (!ran) {
  throw new Error(
    "Failed to load the yoga module - it needed to be loaded synchronously, but didn't",
  );
}

// $FlowFixMe ret will not be null here
module.exports = Yoga(ret.bind, ret.lib);

export type { Yoga$Config, Yoga$Node } from './entry-common';
export type {
  Yoga$Align, Yoga$Direction, Yoga$Display, Yoga$Edge, Yoga$ExperimentalFeature, Yoga$FlexDirection, Yoga$FlexWrap, Yoga$Gutter, Yoga$Justify, Yoga$Overflow,
  Yoga$PositionType, Yoga$Unit, Yoga$Wrap
} from './YGEnums.js';


