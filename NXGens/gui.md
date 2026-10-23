# GUI usage

NXGens is managed almost entirely through inventory menus. There are **three GUI flows**: the player shop, the Chunk Collector panel and the admin visual generator editor.

---

## Generator shop (`/genshop`)

The menu players use daily:

- Shows **every defined generator** with its icon, name, tier and price.
- **Left click**: buys 1 (charges through Vault and hands out the item if there is inventory space).
- If your economy is disabled, it works as a catalog (hands out for free).
- The whole layout (title, size, decoration buttons) is customizable in `menus.yml`.

---

## Chunk Collector panel

Interacting with a collector (or `/nxgens collector` over one) opens its panel:

- **Information**: owner, level, chunks covered, capacity and current usage, multiplier and auto-sell status.
- **Withdrawal**: collect items from the virtual storage into your inventory (respecting `trust-can-withdraw`).
- **Auto-sell**: toggles the collector's automatic selling.
- **Upgrades**: level up by paying the corresponding cost (raises capacity, chunk range or multiplier depending on the chosen upgrade).
- **Status hologram**: the collector shows its {placeholders} in the floating hologram above the block.

See [Generator System](generadores.md) for the full economic flow.

---

## Visual generator editor (`/nxgens editor`)

The editor lets you **manage the full list of generators without touching files**:

### Main list

Shows every defined generator with its icon and tier. From here:

- **New generator**: creates a blank definition.
- **Click on one**: opens the individual editor.

### Individual editor

A screen with buttons to adjust each property of the generator:

| Property | How it's edited |
|---|---|
| Name | Chat input (cancelled by typing `cancel`) |
| Tier / production interval | +/- buttons with per-click steps; shift for bigger jumps |
| Drops | Add/edit drop entries (item, amount and chance) with chat input |
| Purchase price (frame) | Price +/- buttons |
| Repair price | If malfunctions are enabled, the tier's specific repair cost |

### Test

The editor includes a **test mode**: it generates a sample drop so you can watch the production live without placing any generator in the world (`nxgens.admin.test`).

### Save and export

- Changes apply **hot** — new generators become available in `/genshop` immediately.
- `/nxgens duplicate <generator>` and `/nxgens delete <generator>` also operate on the editor's definitions.
- `/nxgens export` exports the definitions in a portable format.
- `/nxgens validate` checks that definitions are not corrupted after hand editing.

---

## Configuration editor (admin)

NXGens also includes **in-game editors** for the general configuration and the events (`nxgens.admin.edit` / `nxgens.admin.event`), following the same buttons + chat-input style as the generator editor. For big edits (long lists, multi-line hologram text) it's still more comfortable to edit `config.yml` and run `/nxgens reload`.

---

## Chat inputs

Every GUI flow uses the same mechanism: the plugin opens a chat session and **everything you type** goes into the corresponding field.

- Type the value and press Enter to confirm.
- Type `cancel` to abort with no changes.
- When you're done editing, `Esc` closes the menu.
