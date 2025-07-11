# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

option(BUILD_SHARED_LIBS "Build shared libraries (DLLs) instead of static libraries" OFF)

cmake_minimum_required(VERSION 3.13...3.26)
project(yogacore)
set(CMAKE_VERBOSE_MAKEFILE on)

if(TARGET yogacore)
    return()
endif()

include(CheckIPOSupported)

set(YOGA_ROOT ${CMAKE_CURRENT_SOURCE_DIR}/..)
include(${YOGA_ROOT}/cmake/project-defaults.cmake)


file(GLOB SOURCES CONFIGURE_DEPENDS
    ${CMAKE_CURRENT_SOURCE_DIR}/*.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/**/*.cpp)

if(BUILD_SHARED_LIBS)
  if(WIN32)
    add_library(yogacore MODULE ${SOURCES})
  else()
    add_library(yogacore SHARED ${SOURCES})
  endif()
else()
  add_library(yogacore STATIC ${SOURCES})
endif()

# Yoga conditionally uses <android/log> when building for Android
if (ANDROID)
    target_link_libraries(yogacore log)
endif()

check_ipo_supported(RESULT result)
if(result)
  set_target_properties(yogacore PROPERTIES
    CMAKE_INTERPROCEDURAL_OPTIMIZATION true)
endif()

target_include_directories(yogacore
    PUBLIC
    $<BUILD_INTERFACE:${YOGA_ROOT}>
    $<INSTALL_INTERFACE:${CMAKE_INSTALL_PREFIX}/include/yoga>)
