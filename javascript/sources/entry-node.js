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
const nbind = require('nbind');
const {bind, lib} = nbind.init(__dirname + '/../');
module.exports = Yoga(bind, lib);
export type { Yoga$Config, Yoga$Node } from './entry-common';
export type {
  Yoga$Align, Yoga$Direction, Yoga$Display, Yoga$Edge, Yoga$ExperimentalFeature, Yoga$FlexDirection, Yoga$Gutter, Yoga$Justify, Yoga$Overflow,
  Yoga$PositionType, Yoga$Unit, Yoga$Wrap
} from './YGEnums.js';


