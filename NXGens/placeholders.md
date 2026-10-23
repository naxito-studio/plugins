# PlaceholderAPI

NXGens registers the `nxgens` expansion in [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) to expose every player's **generator slots** and **collector statistics**.

---

## Requirements

| Requirement | Notes |
|---|---|
| PlaceholderAPI | Mandatory — NXGens only hooks in if it's present |
| `integrations.placeholderapi: true` | Enabled by default in `config.yml` |

---

## Available placeholders

All placeholders use the `%nxgens_<placeholder>%` format and resolve for the player they are resolved against (in scoreboards, tablist, PAPI holograms, etc.):

### Generator slots

| Placeholder | Value |
|---|---|
| `%nxgens_slots_used%` | Generators placed by the player (aliases: `%nxgens_placed%`, `%nxgens_generators_placed%`) |
| `%nxgens_slots_max%` | Maximum generators the player can place (alias: `%nxgens_max_slots%`) — shows `∞` if unlimited |
| `%nxgens_slots_remaining%` | Remaining slots (alias: `%nxgens_slots_left%`) |
| `%nxgens_slots_formatted%` | Combined, e.g. `12/50` |

### Chunk Collectors

| Placeholder | Value |
|---|---|
| `%nxgens_collectors_placed%` | Collectors placed by the player (alias: `%nxgens_collectors_used%`) |
| `%nxgens_collectors_max%` | The player's collector limit (resolved from their `nxgens.collector.limit.*` permissions) |
| `%nxgens_collectors_remaining%` | Remaining collectors to place |
| `%nxgens_collectors_formatted%` | Combined, e.g. `1/3` |

> For **offline** players the limits are resolved with the default values in `config.yml` (not through permissions), because permissions are only evaluated for online players.

---

## Usage in other plugins

| Plugin | Example |
|---|---|
| Scoreboards | `%nxgens_slots_formatted%` to show active farms |
| TAB / NametagEdit | Show slots in the tab |
| DecentHolograms / FancyHolograms | Holograms with last-production stats |
| Chat format | Dynamic prefixes based on stats |

---

## Internal hologram placeholders

NXGens' native holograms also have **their own placeholders** (configurable in `config.yml`); these don't go through PAPI:

| Collector placeholders | Returns |
|---|---|
| `{owner}` | Owner's name (or `"Unknown"` if missing) |
| `{level}` | Collector's upgrade level |
| `{chunk_range}` / `{chunk_area}` | Chunk range / total covered area |
| `{stored}` / `{capacity}` | Stored stacks / total capacity |
| `{percent}` | % fullness |
| `{tier}` | Collector tier |
| `{multiplier}` | Collector's sell multiplier |
| `{autosell}` | Auto-sell status |

| Generator placeholders | Returns |
|---|---|
| `{name}` | Generator name |
| `{tier}` | Generator tier |
| `{next_production}` | Countdown to the next production |
| `{owner}` | Owner's name |
