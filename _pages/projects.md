---
title: "tonykero's projects"
permalink: projects/
layout: project
---

# TODO Projects

| Projects          | Description                                       | Type                  | Status                                                | Features                                                                  | Projects involved                                         |
| :---              | :---                                              | :---                  | :---:                                                 | :---                                                                      | :---                                                      |
| Moe               | Machine-Learning, Neural Networks & stuff         | Library               | :arrows_counterclockwise:                             | Metaheuristics, NN, Parallelism & GPGPU                                   | C++14                                                     |
| [Compote](compote)| Unified JIT Compiling and Execution               | Library               | :bulb:                                                | C, LLVM IR, WASM Generation <br> LLVM IR Compilation to CPUs, GPUs, Web   | Clang, Flang, LLVM, libFuzzer, LLVM-SPIRV, Binaryen, V8   |
| Metasm            | Assembly-like language implemented using Compote  | Library               | :arrows_counterclockwise:                             | Stack-based syntax                                                        | Compote                                                   |
| libp2p            | Truly serverless & decentralized network          | Library               | :bulb:                                                | TCP/UDP Transfer, IRC/XMPP/SIP Signalling + DNS, PCP/NATPMP Mapping       | re, miniupnp, libpcp, libstrophe                          |
| CellMata          | Cellular Automatas Visualization tool             | Runtime               | :arrows_counterclockwise:                             | 1D/2D, Tile type, Rule type, Parallelism + GPGPU                          | SFML, ImGui                                               |
| WHAT              | Lightweight Hashing Tool                          | Runtime               | :arrows_counterclockwise:                             | Hashing algorithms, password manager                                      | SFML, ImGui, cryptopp                                     |
| TheTwitchCorner   | an Enhanced TwitchApp-like app                    | Runtime               | :arrows_counterclockwise: :put_litter_in_its_place:   | Parametrable opacity, Grid positioning                                    | CEF, sqlite, CURL, cpr                                    |
| Logging Library   | VT100, Multi-[Thread, Process] safe               | Library               | :bulb: :put_litter_in_its_place:                      | Thread and process safe, formatting                                       | fmt                                                       |
| libgpgpu          | C++ GPGPU Library                                 | Library               | :bulb:                                                | Bolt & Thrust, OpenGL & Vulkan compute shaders wrapping                   | Bolt, Thrust, POCL, OpenGL, Vulkan                        |
| libcompute        | Distributed Computing Library                     | Library               | :bulb: :put_litter_in_its_place:                      | AMQP Server & Client, gpgpu, p2p                                          | libp2p                                 |
| ezpdf             | PDF Extraction, Conversion, Analysis Factory      | Library + Runtime     | :bulb:                                                | Text, Table, images extraction, Tesseract OCR integration, xlsl,          | PDF.js, electron, vuejs, vuetify,                         |
|                   |                                                   |                       |                                                       |                                                                           |                                                           |

:soon: non-public  
:arrows_counterclockwise: In development  
:bulb: No coding started  
:put_litter_in_its_place: Will probably abort the project

These are my demos showing off features from my project or some technical aspects.

| Demo                          | Description                               | Related Projects                                      |
| :---                          | :---                                      | :---                                                  |
| The Standalone                | Self-[Learning, Optimizing, Driving] Car  | Moe, Metasm, Urho3D                                   |
| TMBot                         | TrackMania Stadium autonomous driving bot | Tensorflow.js, OpenPlanet, Detour                     |
| Circuitry                     | PCB Layout Generation                     | Moe, Metasm, Urho3D, Rust, WASM                       |
| Reverse                       | Cellular Automatas preimaging             | Moe                                                   |