# Permissions

NXGens uses a hierarchical Bukkit-style permission system. The master permission `nxgens.admin` grants **full access** to every command and feature (it includes all the child permissions listed below).

> Defaults: player commands such as `/genshop`, `/selldrops`, basic collector usage and `/gens trust` are **enabled for everyone** (`default: true`), and every admin permission requires **OP** (`default: op`) until you assign them with LuckPerms or another manager.

---

## Player

| Permission | Description | Default |
|---|---|---|
| `nxgens.use` | Usage of the base `/nxgens` command. | op |
| `nxgens.help` | Usage of `/nxgens help`. | op |
| `nxgens.version` | Usage of `/nxgens version`. | op |
| `nxgens.list` | Usage of `/nxgens list`. | op |
| `nxgens.info` | Usage of `/nxgens info`. | op |
| `nxgens.shop` | Usage of `/nxgens shop` and `/genshop`. | **everyone** |
| `nxgens.selldrops` | Manual selling with `/selldrops`. | **everyone** |
| `nxgens.sellwand.use` | Using a Sellwand to sell containers. | **everyone** |
| `nxgens.trust` | Giving other players access to your collectors. | **everyone** |

---

## Collectors

| Permission | Description | Default |
|---|---|---|
| `nxgens.collector` | Usage of the `/nxgens collector` command. | op |
| `nxgens.collector.use` | Placing and interacting with Chunk Collectors. | op |
| `nxgens.collector.manage` | Managing collector blocks. | op |
| `nxgens.collector.break` | Removing your own collector (returns to your inventory with its contents). | op |
| `nxgens.collector.give` | Direct Chunk Collector delivery. | op |
| `nxgens.collector.logs` | Viewing a collector's transaction logs. | op |
| `nxgens.collector.bypass` | Staff: open and break other players' collectors without being trusted. | op |
| `nxgens.collector.limit.<number>` | Placeable collector limit (1, 2, 3…). | — |
| `nxgens.collector.limit.*` | Unlimited collectors. | op |

> Per-permission limits are combined with `collectors.limits.default-limit` (1 collector per player by default).

---

## Administration

| Permission | Description |
|---|---|
| `nxgens.admin` | **Master permission** — full access (includes every permission below). |
| `nxgens.admin.editor` | Usage of `/nxgens editor`. |
| `nxgens.admin.reload` | Usage of `/nxgens reload`. |
| `nxgens.admin.give` | Usage of `/nxgens give`. |
| `nxgens.admin.delete` | Usage of `/nxgens delete`. |
| `nxgens.admin.duplicate` | Usage of `/nxgens duplicate`. |
| `nxgens.admin.validate` | Usage of `/nxgens validate`. |
| `nxgens.admin.export` | Exporting generator definitions. |
| `nxgens.admin.multiplier` | Per-rank multipliers. |
| `nxgens.admin.slots` | Generator slots per rank. |
| `nxgens.admin.sellwand` | Sellwand delivery. |
| `nxgens.admin.collector` | Collector administration. |
| `nxgens.admin.event` | Start/stop/check events. |
| `nxgens.admin.corrupt` | Forcing malfunctions with `/nxgens corrupt`. |
| `nxgens.admin.create` | Creating generators. |
| `nxgens.admin.edit` | Editing generators. |
| `nxgens.admin.test` | Testing generators. |

`nxgens.editor` and `nxgens.sellwand.give` / `nxgens.collector.give` are direct aliases of their `admin` versions (kept for backward compatibility).

---

## LuckPerms examples

```
/lp group vip permission set nxgens.shop true
/lp group vip permission set nxgens.collector.limit.3 true
/lp group vip permission set nxgens.collector.use true
```

> **Sell multipliers** and **generator slots** per rank are not permissions: they are configured with `/nxgens multiplier <rank> <value>` and `/nxgens slots <rank> <value>`, and they apply to the LuckPerms group of the same name.
