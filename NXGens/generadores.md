# Generator system

The heart of NXGens: tiered generators with automatic production, slot management and the full buy → place → produce → sell cycle.

---

## How does it work?

### 1. Buy in `/genshop`

Players buy generators in the shop with Vault money. Each generator has its price, tier, what it produces and its icon in the menu.

Without Vault (economy disabled) the shop hands out generators for free — useful for using NXGens as a reward system.

### 2. Placement

The generator is a normal block: it is placed in plain sight like **any other world block**. When placed, the plugin:

- Charges one of its generator slots (`generators.max-per-player` or the per-rank value in `ranks.yml`).
- Registers the generator to its owner in the database with its exact position, persisting across restarts.
- Creates the hologram above it (with `{name}`, `{tier}` and a countdown to the next production).

### 3. Production

According to the **tier's production interval** (`generators.default-interval`, 400 ticks = 20 s by default), each generator:

- **Physically drops** the item into the world (normal drop behavior)…
- …**or deposits the drop virtually** into the owner's Chunk Collector if the generator sits inside a collector's area (see below).

> The vertical offset `drop-y-offset` (1.30 by default) makes drops spawn just above the generator block so they don't clip into it.

### 4. Selling

Drops are sold in 3 ways:

| Method | Command/action | Multiplier applied |
|---|---|---|
| Manual sale | `/selldrops` | Player's rank multiplier |
| Selling with a Sellwand | Right-click the wand on a container with drops | Rank multiplier |
| Collector auto-sell | Scheduled Chunk Collector sale | Collector multiplier (upgrade bonus) |

---

## Chunk Collectors

**Chunk Collectors** (the `LODESTONE` block by default) gather drops from **every generator owned by the player within a chunk area**:

- Level 1 covers 3×3 chunks (range 1); each level adds 1 chunk to the range (`5×5`, `7×7`…).
- Drops go into the collector as **virtual storage**, without occupying physical items in the world.
- If the collector is full and can't receive any more: `physical-drops-fallback: true` drops the item on the ground; `false` loses it.
- Each player starts with `default-limit: 1` collector; more are granted through the `nxgens.collector.limit.<n>` permission.

### Upgrades

Collectors level up by paying Vault money (with `exponential`, `linear` or `fixed` formulas) and each level raises:

| Upgrade | Effect |
|---|---|
| Capacity | +`capacity-increase` (500 by default) stored stacks |
| Range | +1 chunk in every direction |
| Multiplier | +`multiplier-per-level` (0.01× per level) when selling |

### Auto-sell

Collectors sell their contents automatically every `auto-sell-interval` ticks (5 min by default). If a collector fills up first: `physical-drops-fallback: true` drops items on the ground, `false` loses the drop.

### Earnings reports

Every online owner periodically receives a report (`earnings-report.interval-minutes`, hourly by default) with what each collector produced in that period.

---

## Corrupted generators (failures)

A malfunction engine to keep the economy alive:

- Every `interval-minutes` (60 by default) the engine picks a `chance-percentage` (5%) of active generators and "corrupts" one.
- A corrupted generator **stops producing** until its owner pays the repair (`default-repair-cost` or a per-tier price).
- The owner gets a chat warning and a sound when it corrupts.

More about the engine and events in [Events & Corrupted Generators](eventos.md).

---

## Ranks: multipliers and slots

With LuckPerms, each group can have:

- **Sell multiplier** — applied to every drop they sell (`/selldrops`, Sellwand).
- **Generator slots** — how many generators they may have placed at once.

These are configured with the admin commands and saved in `plugins/NXGens/ranks.yml`:

```
/nxgens multiplier vip 1.25
/nxgens slots vip 10
```

---

## Customization

Every server is different — NXGens is designed so everything can be customized:

- **Visual editor (GUI)**: create and adjust generators in game without restarting.
- **Configurable drops**: every drop is configurable (item, amount, chance) per generator.

See [GUI Usage](gui.md) for the full editor flow.
