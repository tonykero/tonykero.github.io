---
title: "tonykero's projects"
permalink: projects/
layout: project
---

# TODO Pro

| Projects          | Description                                       | Type      | Status                                                | Features                                                                  | Projects involved                                         |
| :---              | :---                                              | :---      | :---:                                                 | :---                                                                      | :---                                                      |
| Moe               | Machine-Learning, Neural Networks & stuff         | Library   | :arrows_counterclockwise:                             | Metaheuristics, NN, Parallelism & GPGPU                                   | C++14                                                     |
| [Compote](compote)| Unified JIT Compiling and Execution               | Library   | :bulb:                                                | C, LLVM IR, WASM Generation <br> LLVM IR Compilation to CPUs, GPUs, Web   | Clang, Flang, LLVM, libFuzzer, LLVM-SPIRV, Binaryen, V8   |
| Metasm            | Assembly-like language implemented using Compote  | Library   | :arrows_counterclockwise:                             | Stack-based syntax                                                        | Compote                                                   |
| Jambon            | 2D Game Engine (w/[Soft, Rigid]-Physics)          | Library   | :bulb:                                                | GUI + Rendering + Rigid and Soft body physics                             | Box2D, [SFML, BGFX], ImGui                                |
| libp2p            | Truly serverless & decentralzied network          | Library   | :bulb:                                                | TCP/UDP Transfer, IRC/XMPP/SIP Signalling + DNS, PCP/NATPMP Mapping       | re, miniupnp, libpcp, libstrophe                          |
| CellMata          | Cellular Automatas Visualization tool             | Runtime   | :arrows_counterclockwise:                             | 1D/2D, Tile type, Rule type, Parallelism + GPGPU                          | SFML, ImGui                                               |
| WHAT              | Lightweight Hashing Tool                          | Runtime   | :arrows_counterclockwise:                             | Hashing algorithms, password manager                                      | SFML, ImGui, cryptopp                                     |
| TheTwitchCorner   | an Enhanced TwitchApp-like app                    | Runtime   | :arrows_counterclockwise: :put_litter_in_its_place:   | Parametrable opacity, Grid positioning                                    | CEF, sqlite, CURL, cpr                                    |
| Logging Library   | VT100, Multi-[Thread, Process] safe               | Library   | :bulb: :put_litter_in_its_place:                      | Thread and process safe, formatting                                       | fmt                                                       |
| libgpgpu          | C++ GPGPU Library                                 | Library   | :bulb:                                                | Bolt & Thrust, OpenGL & Vulkan compute shaders wrapping                   | Bolt, Thrust, POCL, OpenGL, Vulkan                        |
| MPI-like          | C++ Interprocess Library                          | Library   | :bulb: :put_litter_in_its_place:                      | Shared memory, Communication speed, inter process mutex                   | Boost.Interprocess, libuv                                 |

:soon: non-public  
:arrows_counterclockwise: In development  
:bulb: No coding started  
:put_litter_in_its_place: Will probably abort the project

These are demos showing off features from my projects

| Demo                          | Description                               | Related Projects      |
| :---                          | :---                                      | :---                  |
| The Standalone                | Self-[Learning, Optimizing, Driving] Car  | Moe, Metasm, Jambon   |
| Circuitry                     | PCB Layout Generation                     | Moe, Metasm, Jambon   |
| Reverse                       | Cellular Automatas preimaging             | Moe                   |