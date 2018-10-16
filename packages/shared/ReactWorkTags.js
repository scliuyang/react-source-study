/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type WorkTag =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16;

export const FunctionalComponent = 0;
export const FunctionalComponentLazy = 1;
export const ClassComponent = 2;
export const ClassComponentLazy = 3;
// 不确定是函数或是class组件
export const IndeterminateComponent = 4; // Before we know whether it is functional or class
// 应该virtual dom树的根节点
export const HostRoot = 5; // Root of a host tree. Could be nested inside another node.
// createPortal 产生的virtual子树根节点
export const HostPortal = 6; // A subtree. Could be an entry point to a different renderer.
// vDom 组件，比如div
export const HostComponent = 7;
// virtual文本节点
export const HostText = 8;
export const Fragment = 9; // 片段，比如 [].map(()=>x)
export const Mode = 10;
// context api
export const ContextConsumer = 11;
export const ContextProvider = 12;
// ref
export const ForwardRef = 13;
export const ForwardRefLazy = 14;
// 貌似和性能相关的
export const Profiler = 15;
// ???
export const PlaceholderComponent = 16;
