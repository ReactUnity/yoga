/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @Generated by gentest/gentest.rb from gentest/fixtures/YGDisplayTest.html

var Yoga = Yoga || require("../../sources/entry-" + process.env.TEST_ENTRY);

it("display_none", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setDisplay(Yoga.DISPLAY_NONE);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(0 === root_child1.getComputedWidth(), "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(0 === root_child1.getComputedHeight(), "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(0 === root_child1.getComputedWidth(), "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(0 === root_child1.getComputedHeight(), "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("display_none_fixed_size", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(20);
    root_child1.setHeight(20);
    root_child1.setDisplay(Yoga.DISPLAY_NONE);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(0 === root_child1.getComputedWidth(), "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(0 === root_child1.getComputedHeight(), "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(0 === root_child1.getComputedWidth(), "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(0 === root_child1.getComputedHeight(), "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("display_none_with_margin", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, 10);
    root_child0.setMargin(Yoga.EDGE_TOP, 10);
    root_child0.setMargin(Yoga.EDGE_RIGHT, 10);
    root_child0.setMargin(Yoga.EDGE_BOTTOM, 10);
    root_child0.setWidth(20);
    root_child0.setHeight(20);
    root_child0.setDisplay(Yoga.DISPLAY_NONE);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(0 === root_child0.getComputedWidth(), "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(0 === root_child0.getComputedHeight(), "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(0 === root_child0.getComputedWidth(), "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(0 === root_child0.getComputedHeight(), "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(100 === root_child1.getComputedWidth(), "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(100 === root_child1.getComputedHeight(), "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("display_none_with_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexShrink(1);
    root_child0.setFlexBasis("0%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setFlexShrink(1);
    root_child1.setFlexBasis("0%");
    root_child1.setDisplay(Yoga.DISPLAY_NONE);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setFlexGrow(1);
    root_child1_child0.setFlexShrink(1);
    root_child1_child0.setFlexBasis("0%");
    root_child1_child0.setWidth(20);
    root_child1.insertChild(root_child1_child0, 0);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root_child2.setFlexShrink(1);
    root_child2.setFlexBasis("0%");
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(50 === root_child0.getComputedWidth(), "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(0 === root_child1.getComputedWidth(), "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(0 === root_child1.getComputedHeight(), "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(0 === root_child1_child0.getComputedLeft(), "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")");
    console.assert(0 === root_child1_child0.getComputedTop(), "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")");
    console.assert(0 === root_child1_child0.getComputedWidth(), "0 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")");
    console.assert(0 === root_child1_child0.getComputedHeight(), "0 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")");

    console.assert(50 === root_child2.getComputedLeft(), "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(0 === root_child2.getComputedTop(), "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(50 === root_child2.getComputedWidth(), "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(100 === root_child2.getComputedHeight(), "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(50 === root_child0.getComputedLeft(), "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(50 === root_child0.getComputedWidth(), "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(0 === root_child1.getComputedWidth(), "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(0 === root_child1.getComputedHeight(), "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    console.assert(0 === root_child1_child0.getComputedLeft(), "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")");
    console.assert(0 === root_child1_child0.getComputedTop(), "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")");
    console.assert(0 === root_child1_child0.getComputedWidth(), "0 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")");
    console.assert(0 === root_child1_child0.getComputedHeight(), "0 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")");

    console.assert(0 === root_child2.getComputedLeft(), "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")");
    console.assert(0 === root_child2.getComputedTop(), "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")");
    console.assert(50 === root_child2.getComputedWidth(), "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")");
    console.assert(100 === root_child2.getComputedHeight(), "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("display_none_with_position", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setPosition(Yoga.EDGE_TOP, 10);
    root_child1.setDisplay(Yoga.DISPLAY_NONE);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(0 === root_child1.getComputedWidth(), "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(0 === root_child1.getComputedHeight(), "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(0 === root_child1.getComputedWidth(), "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(0 === root_child1.getComputedHeight(), "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("display_none_with_position_absolute", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setWidth(100);
    root_child0.setHeight(100);
    root_child0.setDisplay(Yoga.DISPLAY_NONE);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(0 === root_child0.getComputedWidth(), "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(0 === root_child0.getComputedHeight(), "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(0 === root_child0.getComputedWidth(), "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(0 === root_child0.getComputedHeight(), "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
