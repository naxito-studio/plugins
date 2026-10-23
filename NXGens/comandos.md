# Commands

NXGens has **three root commands** with aliases:

| Command | Aliases |
|---|---|
| `/nxgens` | `/nxg`, `/gens` |
| `/genshop` | `/gshop`, `/generatorshop` |
| `/selldrops` | — |

---

## Overview

| Command | Description | Required permission |
|---|---|---|
| `/nxgens help` | Shows the help menu. | `nxgens.help` |
| `/nxgens version` | Shows the plugin version and server info. | `nxgens.version` |
| `/nxgens list` | Lists the defined generators. | `nxgens.list` |
| `/nxgens info <generator>` | Shows the details of a generator. | `nxgens.info` |
| `/nxgens collector` | Chunk Collector management and delivery. | `nxgens.collector` |
| `/nxgens trust <add\|list\|remove> <player>` | Gives other players access to your collectors. | `nxgens.trust` |
| `/genshop` | Opens the generator shop. | `nxgens.shop` |
| `/selldrops [hand]` | Sells generator drops in your inventory with your multipliers. | `nxgens.selldrops` |
| `/nxgens editor` | Opens the visual generator editor. | `nxgens.admin.editor` |
| `/nxgens give <generator> [player]` | Hands out a generator's item for free. | `nxgens.admin.give` |
| `/nxgens reload` | Reloads config, messages, menus and ranks. | `nxgens.admin.reload` |
| `/nxgens delete <generator>` | Deletes a defined generator. | `nxgens.admin.delete` |
| `/nxgens duplicate <generator>` | Duplicates a defined generator. | `nxgens.admin.duplicate` |
| `/nxgens validate` | Checks the integrity of the defined generators. | `nxgens.admin.validate` |
| `/nxgens multiplier <rank> <value>` | Sets a rank's sell multiplier. | `nxgens.admin.multiplier` |
| `/nxgens slots <rank> <value>` | Sets the generator cap for a rank. | `nxgens.admin.slots` |
| `/nxgens sellwand give <player> [uses]` | Hands out a Sellwand. | `nxgens.admin.sellwand` |
| `/nxgens event <start\|stop\|info> [event]` | Controls the server's random events. | `nxgens.admin.event` |
| `/nxgens corrupt <generator> [reason]` | Forces a failure (corruption) on a generator. | `nxgens.admin.corrupt` |
| `/nxgens export` | Exports the editor's generator definitions. | `nxgens.admin.export` |

> Admin commands work from console except those that open a GUI (`/nxgens editor` only works in game).

---

## Player commands in detail

### `/genshop`

Opens the [generator shop](gui.md). Each generator shows its price, tier and description; buying charges the money defined through Vault. If the economy is disabled (`economy: enabled: false`), the shop works as a catalog (it hands out the item for free on click).

---

### `/selldrops [hand]`

Sells every generator drop in your inventory, applying **your rank's multiplier** (LuckPerms) and the global multiplier (`economy.sell-multiplier`).

With the `hand` modifier only the item in your main hand is sold.

```
/selldrops
/selldrops hand
```

---

### `/nxgens trust <add|list|remove> <player>`

The trust system controls who can use your Chunk Collectors. Trusted players can open the collector and (depending on `collectors.trust-can-withdraw` and `collectors.trust-can-sell`) withdraw items or sell them.

```
/gens trust add Steve
/gens trust list
/gens trust remove Steve
```

---

## Admin commands in detail

### `/nxgens editor`

Opens the [visual generator editor](gui.md): create, duplicate, edit and test generators directly in game, without restarting the server or touching files.

---

### `/nxgens multiplier <rank> <value>`

Sets the **sell multiplier** of the given LuckPerms rank. That multiplier applies when selling drops with `/selldrops` or with a Sellwand.

```
/nxgens multiplier vip 1.25
```

The value is saved in `plugins/NXGens/ranks.yml` and is capped by `ranks.max-multiplier` (100.0 by default).

---

### `/nxgens slots <rank> <value>`

Sets the **maximum number of generators** a given rank may place:

```
/nxgens slots vip 10
```

It is saved in `ranks.yml` and the global cap is `ranks.max-slots` (1000 by default).

---

### `/nxgens event <start|stop|info> [event]`

Manually starts or stops a [random event](eventos.md) and checks its status. Without arguments it lists the active events. Keep in mind that the event engine itself also runs them on its own schedule.

---

### `/nxgens corrupt <generator> [reason]`

Manually forces a **corruption** (failure) on a generator: the same mechanism the random malfunction engine applies — the generator stops producing until its owner pays the repair. Useful for testing the mechanic without waiting for the random cycle.

---

### `/nxgens give <generator> [player]`

Hands out the item of the defined generator (for free) to the target player or to you. It uses **the same item** a player receives when buying in `/genshop`.

---

### `/nxgens validate`

Checks the integrity of the defined generators (materials, tier, drops and prices) and reports any corrupted or invalid definition. Useful after editing `generators.yml` by hand or importing definitions.

---

### `/nxgens reload`

Hot-reloads the configuration (`config.yml`), messages, menus and ranks. It does **not** reload generator definitions while your editor is open — save and close in the GUI first.
