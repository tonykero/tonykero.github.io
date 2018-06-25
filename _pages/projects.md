---
title: "tonykero's projects"
permalink: projects/
layout: project
---

# TODO Projects

| Projects          | Description                                       | Type                      | Status                                                | Features                                                                  | Projects involved                                         |
| :---              | :---                                              | :---                      | :---:                                                 | :---                                                                      | :---                                                      |
| [Compote](compote)| Unified JIT Compiling and Execution               | Library                   | :bulb:                                                | C, LLVM IR, WASM Generation <br> LLVM IR Compilation to CPUs, GPUs, Web   | Clang, Flang, LLVM, libFuzzer, LLVM-SPIRV, Binaryen, V8   |
| Metasm            | Assembly-like language implemented using Compote  | Library                   | :arrows_counterclockwise:                             | Stack-based syntax                                                        | Compote                                                   |
| libmh             | Moe remake, Metaheuristics, cellular automatas    | Library                   | :bulb:                                                | Metaheuristics, Cellular Automatas Parallelism & GPGPU                    | rayon, Compote, Rust                                      |
| libp2p            | Truly serverless & decentralized network          | Library                   | :bulb:                                                | TCP/UDP Transfer, IRC/XMPP/SIP Signalling + DNS, PCP/NATPMP Mapping       | re, miniupnp, libpcp, libstrophe                          |
| TheTwitchCorner   | an Enhanced TwitchApp-like app                    | Runtime                   | :arrows_counterclockwise: :put_litter_in_its_place:   | Parametrable opacity, Grid positioning                                    | CEF, sqlite, CURL, cpr                                    |
| libcompute        | Distributed Computing Library                     | Library                   | :bulb: :put_litter_in_its_place:                      | AMQP Server & Client, gpgpu, p2p                                          | libp2p                                 |
| ezpdf             | PDF Extraction, Conversion, Analysis Factory      | Library + Runtime         | :bulb:                                                | Text, Table, images extraction, Tesseract OCR integration, xlsl,          | PDF.js, electron, vuejs, vuetify,                         |
| nomnoml2          | nomnoml remake                                    | Library + Website + App   | :arrows_counterclockwise:                             | Parsing, rendering, demo                                                  | TypeScript, electron, vuejs                               |
| Jambon            | Game Engine                                       | Library                   | :bulb:                                                | 2D,3D,4D Rendering & Physics, ecs, audio, window & inputs, scripting      | Rust, nphysics, specs, rodio, winit, gfx-rs               |

:soon: non-public  
:arrows_counterclockwise: In development  
:bulb: No coding started  
:put_litter_in_its_place: Will probably abort the project

These are my demos showing off features from my project or some technical aspects.

| Demo                          | Description                               | Related Projects                                      |
| :---                          | :---                                      | :---                                                  |
| The Standalone                | Self-[Learning, Optimizing, Driving] Car  | Moe, Metasm, Urho3D                                   |
| TMBot                         | TrackMania Stadium autonomous driving bot | Tensorflow.js, OpenPlanet, Detour                     |
| Circuitry                     | PCB Layout Generation                     | Rust, gfx-rs, ggez                                    |
| Reverse                       | Cellular Automatas preimaging             | Moe                                                   |