---
title: "Compote"
---

# Compote

## Table of Contents 

---

* [Overview](#overview)
* [Features](#features)
* [Dependencies](#deps)
* [Might be](#might)
* [Builder](#builder)
* [Compiler](#compiler)
* [Launcher](#launcher)

---

## Overview
{: #overview}

Compote will essentially be a huge wrapper around major compiler infrastructures, providing an unified API to build, compile and run code at runtime.

## Features
{: #features}

Compote allows you to generate LLVM IR and WebAssembly Code (hopefully C too)

Then can compile LLVM IR to Native ISAs, GPUs (NVPTX, AMDGCN, SPIR V) but also asm.js and WebAssembly

Finally Compote provides an execution engine to run any compiled module; from js, WebAssembly, GPUs

<canvas src="/assets/nomnoml/compote-flow.nomnoml" class="canvas-nomnoml"></canvas>


## Dependencies
{: #deps}

* Builder
    * Binaryen
    * LLVM
* Compiler
    * LLVM
    * LLVM-SPIRV
    * Emscripten
    * Binaryen
* Launcher
    * V8
    * WAVM
    * Vulkan
    * ROCR-Runtime
    * CUDA Driver

## Might be
{: #might}

* Inputs
    * Clang
    * Flang
    * shaderc
* Launching
    * ChakraCore
    * OpenGL
* Optimizations
    * Polly
    * souper
* Validity
    * libFuzzer
    * klee
    * Z3

This could provide Compote to: 
* Compile C,C++,OpenCL,CUDA,Fortran,glsl,hlsl,spirv sources
* Run glsl compute shader
* Add optimizations passes
* Check validity of compiled sources

## Builder
{: #builder}

The Builder should provide an API to build modules, internally calling WebAssembly Binaryen, or LLVM IR Builder APIs and generating corresponding code.

Should provide an internal C Builder.

## Compiler
{: #compiler}

The Compiler API should provide compiling and transpiling features from its dependencies (e.g GLSL to SPIR V with shaderc, or Fortran to NVPTX with Flang and LLVM).

It should also provides optimization passes.

## Launcher
{: #launcher}

The Launcher API should be reponsible for running modules, for the host CPU architecture, but also for GPUs through NVPTX, AMDGCN assemblers and SPIR V Compute Shaders, the API should be wrapping around V8 and WAVM to allow running compiled modules to asm.js, and running WebAssembly through JavaScript or through LLVM IR.

The API should also provide reports for coverage and other statistics, and for validating behaviors.