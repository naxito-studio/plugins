# Configuration — config.yml

Reference document for `plugins/NXGens/config.yml`. After any change run `/nxgens reload`.

---

## License and keys

```yaml
license-key: "XXXX-XXXX-XXXX-XXXX-XXXX"
```

Mandatory license key. In BuiltByBit downloads it comes injected automatically; with direct sales the buyer pastes it here.

---

## General

```yaml
general:
  prefix: "&8[&6NXGens&8]&r "
  debug: false
  language: "en"
  check-updates: true
```

| Key | Description |
|---|---|
| `prefix` | Prefix of all plugin messages (legacy colors) |
| `debug` | Debug messages in console |
| `language` | Message language: `en`, `es`, `pt`, `fr` (file `lang/messages_<language>.yml`) |
| `check-updates` | New version warning on startup |

---

## Storage

```yaml
storage:
  type: "sqlite"          # "sqlite" or "mysql"
  sqlite:
    file: "nxgens.db"
  mysql:
    host: "localhost"
    port: 3306
    database: "nxgens"
    username: "root"
    password: ""
    pool-size: 10
    use-ssl: false
    table-prefix: "nxgens_"
```

SQLite by default (zero configuration). For large databases use MySQL: copy the credentials from the Databases tab in Pterodactyl (host, user and password). Placed generators, collectors, sales and transaction logs are stored here.

---

## Generators

```yaml
generators:
  max-per-player: 50
  default-interval: 400
  allow-break: true
  return-on-break: true
  world-restriction: false
  allowed-worlds:
    - "world"
    - "world_nether"
    - "world_the_end"
  physical-drops-fallback: true
  drop-y-offset: 1.30
```

| Key | Description |
|---|---|
| `max-per-player` | Simultaneous generators per player without a special rank |
| `default-interval` | Ticks between shared productions (400 = 20 s) |
| `allow-break` | Allow the owner to break their generators |
| `return-on-break` | Return the generator item when broken |
| `world-restriction` / `allowed-worlds` | Restrict placement to specific worlds |
| `physical-drops-fallback` | `true` = if the collector is full the drop falls to the ground; `false` = it's lost |
| `drop-y-offset` | Drop spawn height above the generator (avoids colliding with the block) |

---

## Corrupted generators (failures)

```yaml
corrupted-generators:
  enabled: true
  interval-minutes: 60
  chance-percentage: 5.0
  default-repair-cost: 50.0
  notify-owner: true
```

| Key | Description |
|---|---|
| `enabled` | Random malfunction engine |
| `interval-minutes` | How often the corruption check runs (60 = hourly) |
| `chance-percentage` | % of active generators corrupted per cycle (5.0 = 5%) |
| `default-repair-cost` | Repair cost if the tier doesn't define its own |
| `notify-owner` | Chat warning + sound to the owner when corrupted |

See [Events & Corrupted Generators](../eventos.md).

---

## Collectors

```yaml
collectors:
  enabled: true
  block-material: LODESTONE
  display-name: "Chunk Collector"
  default-capacity: 1000
  auto-sell-interval: 6000
```

| Key | Description |
|---|---|
| `block-material` | Block that represents the collector |
| `default-capacity` | Initial capacity (item stacks) |
| `auto-sell-interval` | Ticks between auto-sells (6000 = 5 min) |

### Limits

```yaml
  limits:
    default-limit: 1   # more via nxgens.collector.limit.<n>; * = unlimited
```

### Earnings report

```yaml
  earnings-report:
    enabled: true
    interval-minutes: 60
    only-if-earned: true
```

Periodic report to online owners with what each collector earned in the period (only if it earned something, with `only-if-earned`).

### Trust

```yaml
  trust-can-withdraw: true
  trust-can-sell: false
```

What players with access to the collector (`/gens trust add`) can do: withdraw items and/or sell them.

### Upgrades

```yaml
  upgrades:
    capacity-increase: 500
    cost-formula: "exponential"    # exponential | linear | fixed
    base-cost: 500.0
    cost-multiplier: 2.0
    max-level: 50
    base-multiplier: 1.00
    multiplier-per-level: 0.01
```

| Key | Description |
|---|---|
| `cost-formula` | How the price scales: `exponential` = base × multiplier^(level−1); `linear` = base × level; `fixed` = base always |
| `cost-multiplier` | Price increase factor per level (2.0 = each level costs twice the previous one) |
| `max-level` | Maximum level (0 = no cap) |
| `base-multiplier` / `multiplier-per-level` | Initial sell multiplier and bonus per level |

### Chunk coverage

```yaml
  chunks:
    base-range: 1      # level 1 = 1 chunk per direction (3×3 = 9 chunks)
    range-per-level: 1 # each level adds 1 chunk to the range
```

---

## Random events

```yaml
events:
  enabled: true
  broadcast: true
  min-interval-seconds: 1800
  max-interval-seconds: 3600
```

Announce start/end in broadcast and delay between events (30–60 min by default). See [Events & Corrupted Generators](../eventos.md).

---

## Ranks (LuckPerms)

```yaml
ranks:
  max-multiplier: 100.0
  max-slots: 1000
```

Safety caps for `/nxgens multiplier` and `/nxgens slots`. Per-rank values are stored and managed in `plugins/NXGens/ranks.yml` — **don't edit it by hand** while the plugin is running.

---

## Sellwands

```yaml
sellwands:
  material: "BLAZE_ROD"
  glow: true
  action-bar: true
```

Sellwand item, glow effect and action bar notification when selling.

---

## Economy

```yaml
economy:
  enabled: true
  use-vault: true
  sell-multiplier: 1.0
  currency-format: "$#,##0.00"
  min-transaction: 0.01
```

| Key | Description |
|---|---|
| `enabled` | Purchases/sales/upgrades active |
| `use-vault` | Use Vault as the provider |
| `sell-multiplier` | Global sell multiplier (1.0 = normal price) |
| `currency-format` | Money format in messages |
| `min-transaction` | Minimum per transaction |

---

## Holograms

```yaml
holograms:
  enabled: true
  provider: "auto"     # auto | decentholograms | fancyholograms | display
  update-interval: 40
  y-offset: 1.15
```

`provider` picks the provider: `auto` tries DecentHolograms → FancyHolograms → internal display entities. Lines accept legacy colors (`&6`) and the internal placeholders documented below.

```yaml
  collector:
    enabled: true
    y-offset: 1.15
    unknown-owner: "Unknown"
    lines:
      - "&#00F5FF&l▸ Chunk Collector"
      - ...
```

```yaml
  lines:
    - "&6{name}"
    - "&7TIER: &e{tier}"
    - "&7Production: &a{next_production}"
```

See all internal placeholders in [PlaceholderAPI](../placeholders.md).

---

## Integrations and performance

```yaml
integrations:
  placeholderapi: true
  vault: true

performance:
  batch-size: 100
  async-database: true
  cache-duration: 300
  max-concurrent-queries: 10
```

| Key | Description |
|---|---|
| `batch-size` | Generators processed per tick (lower it if there's lag) |
| `async-database` | Async database queries (leave as is) |
| `cache-duration` | Seconds of cache for frequent data |
| `max-concurrent-queries` | Cap on concurrent queries |

---

## Logging and audit

```yaml
logging:
  transactions: true
  admin-actions: true
  errors: true
  retention-days: 30
  console-level: "INFO"
```

Logging of economic transactions, admin actions, errors, retention (days; 0 = unlimited, not recommended) and console level.
