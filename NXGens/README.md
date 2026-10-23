<div align="center">

  ![NXGens Logo](/nxgens.png)

</div>

# NXGens

**NXGens** is a generators and Chunk Collectors plugin for Minecraft, built for economy-style servers such as prison, skyblock and gens. It combines tiered generators with automatic production, virtual Chunk Collectors with auto-sell, sellwands, rank multipliers and a visual generator editor — everything configurable from inside the game.

---

## What is it for?

If your server wants an economy built around active farms — where players buy and place generators of different tiers, farm the drops into Chunk Collectors, sell them with rank multipliers and compete for the best plots — NXGens delivers the complete system as a drop-in plugin, ready to start and manage from the game.

---

## What can you do with NXGens?

- **Tiered generators** with automatic production, per-tier delays, holograms and an in-inventory shop (GUI) with per-generator prices.
- **Chunk Collectors**: place collectors that gather drops from every generator within a chunk range (3×3 by default), with **scheduled auto-sell**, virtual storage and an **upgrade system** (capacity, chunk range and sell multiplier).
- **Sell with rank advantage**: `/selldrops` and **sellwands** apply the player's rank multiplier (LuckPerms) on top of prices.
- **Visual generator editor** (GUI): create, duplicate, edit and test generators without touching files, with export and import.
- **Slot-based performance**: per-player generator limits (configurable per rank) and collector limits through permissions.
- **Random events**: configurable server-wide events that multiply sales / generator spawns (announced in broadcast) with configurable intervals.
- **Corrupted generators**: a malfunction engine — generators can break down and request a repair (with a configurable cost) to keep the economy alive.
- **Trust system**: give/trust access to other players' collectors with `/gens trust`, with configurable withdraw/sell permissions for trusted players.
- **Full holograms** above generators and collectors with their own placeholders (DecentHolograms / FancyHolograms / display entities).
- **Sellwand** with glow, action bar and hierarchical multipliers (player rank × collector multiplier).

---

## Requirements

| Requirement | Notes |
|---|---|
| Minecraft Paper | Recommended. Spigot may work as an alternative. Version 1.20.x or higher |
| Java | 17 or 21 |
| Vault | Optional but **recommended** — for the economy system (purchases, sales, upgrades) |
| PlaceholderAPI | Optional — enables the `%nxgens_%` placeholders |
| LuckPerms | Optional — per-rank multipliers and slots |
| DecentHolograms / FancyHolograms | Optional — hologram provider (falls back to internal `display` entities) |

> ⚠️ NXGens **uses a licensing system**: it requires a license key in `config.yml` to work (automatically injected when downloading from BuiltByBit).

---

## Guide contents

- [Installation](instalacion.md)
- [Commands](comandos.md)
- [Permissions](permisos.md)
- [Generator System](generadores.md)
- [GUI Usage](gui.md)
- [Events & Corrupted Generators](eventos.md)
- [Configuration — config.yml](configuracion/config-yml.md)
- [PlaceholderAPI](placeholders.md)
- [FAQ](faq.md)
