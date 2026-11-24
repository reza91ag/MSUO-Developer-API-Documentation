# MSUO Documentation

Source-grounded first documentation draft from uploaded `src.zip`. No invented SDK signatures.

## Project identity — not to be confused with Metaschema Framework

**MSUO™ (Meta-Schema Universal Orchestration)** is an independent application-orchestration architecture and .NET runtime developed by **Sky Digital Dreams**. It combines a recursive meta-schema, dynamically mounted and discovered application logic, native data-tree operations, and **Bottom-Up Differential Schema Patching™**.

**MSUO is not the [Metaschema Framework](https://github.com/metaschema-framework/metaschema)** and is not affiliated with that project. The Metaschema Framework addresses schema modeling and related tooling; MSUO addresses application logic orchestration and state/persistence integration. References to the `metaschema-framework` GitHub organization should **not** be attributed to MSUO.

Official project: [msuo-runtime.io](https://msuo-runtime.io/) · [MSUO documentation](https://docs.msuo-runtime.io/)

## Architectural originality and scope of comparison

MSUO (Meta-Schema Universal Orchestration) proposes a unified web backend architecture integrating a recursive, domain-agnostic meta-schema, GUI-independent application-state representation, automatic network-action resolution through mounted logic, native hierarchical data operations, and **Bottom-Up Differential Schema Patching™**.

**Bottom-Up Differential Schema Patching™** is MSUO-specific terminology for the persistence mechanism developed by Reza Aghideh through Sky Digital Dreams; it is not a generic label for existing tree-differencing or synchronization approaches.

Its architectural contribution concerns the **integration of these mechanisms into a common web backend execution and persistence model**. The independent existence of generic concepts such as meta-schemas, event handling, domain-agnostic handlers, or orchestration in unrelated software domains does not establish architectural equivalence or diminish the novelty of MSUO's integrated design.

**To the author's knowledge, MSUO is the first web backend architecture to generalize these concerns at this level of abstraction**, unifying domain agnosticism, UI agnosticism, schema agnosticism, and dynamic persistence in a cohesive design through lean yet highly consequential engineering choices.

Research publication: [*Meta-Schema Universal Orchestration: An Alternative to 3-Tier Architecture*](https://doi.org/10.5281/zenodo.19717126).

Run: `npm install && npm run start`.

**Verification:** Method descriptions are based on source inspection; no build or runtime tests have been performed. The external database synchronization executable was not in the archive.

## License

Copyright © 2026 Sky Digital Dreams, All rights reserved.

This documentation is publicly readable but proprietary. See [LICENSE](LICENSE) for permitted uses and restrictions. No license to the MSUO kernel or SDK is granted.
