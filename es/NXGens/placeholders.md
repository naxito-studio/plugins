# PlaceholderAPI

NXGens registra la expansión `nxgens` en [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) para exponer los **slots de generadores** y las **estadísticas de colectores** de cada jugador.

---

## Requisitos

| Requisito | Notas |
|---|---|
| PlaceholderAPI | Obligatorio — NXGens se conecta solo si está presente |
| `integrations.placeholderapi: true` | Activo por defecto en `config.yml` |

---

## Placeholders disponibles

Todos los placeholders usan el formato `%nxgens_<placeholder>%` responden para el jugador sobre el que se resuelven (en scoreboards, tablist, hologramas con PAPI, etc.):

### Slots de generadores

| Placeholder | Valor |
|---|---|
| `%nxgens_slots_used%` | Generadores colocados por el jugador (alias: `%nxgens_placed%`, `%nxgens_generators_placed%`) |
| `%nxgens_slots_max%` | Máximo de generadores que puede colocar (alias: `%nxgens_max_slots%`) — usa `∞` si no tiene límite |
| `%nxgens_slots_remaining%` | Slots restantes (alias: `%nxgens_slots_left%`) |
| `%nxgens_slots_formatted%` | Combinado, ej. `12/50` |

### Chunk Collectors

| Placeholder | Valor |
|---|---|
| `%nxgens_collectors_placed%` | Colectores colocados por el jugador (alias: `%nxgens_collectors_used%`) |
| `%nxgens_collectors_max%` | Límite de colectores del jugador (se resuelve según sus permisos `nxgens.collector.limit.*`) |
| `%nxgens_collectors_remaining%` | Colectores restantes por colocar |
| `%nxgens_collectors_formatted%` | Combinado, ej. `1/3` |

> Para jugadores **offline** los límites se resuelven con los valores por defecto de `config.yml` (no vía permisos), porque los permisos solo se evalúan en jugadores conectados.

---

## Uso en otros plugins

| Plugin | Ejemplo |
|---|---|
| Scoreboards | `%nxgens_slots_formatted%` para mostrar granjas activas |
| TAB / NametagEdit | Mostrar slots en el tab |
| DecentHolograms / FancyHolograms | Hologramas con stats de última producción |
| Chat format | Prefix dinámicos por stats |

---

## Placeholders internos del holograma

Los hologramas nativos de NXGens tienen además **sus propios placeholders** (configurables en `config.yml`) movibles, no pasan por PAPI:

| Placeholders del colector | Devuelve |
|---|---|
| `{owner}` | Nombre del dueño (o `"Unknown"` si no existe) |
| `{level}` | Nivel de upgrade del colector |
| `{chunk_range}` / `{chunk_area}` | Rango en chunks / área total en cobertura |
| `{stored}` / `{capacity}` | Stacks almacenados / capacidad total |
| `{percent}` | % de ocupación |
| `{tier}` | Tier del colector |
| `{multiplier}` | Multiplicador de venta del colector |
| `{autosell}` | Estado de auto-venta |

| Placeholders del generador | Devuelve |
|---|---|
| `{name}` | Nombre del generador |
| `{tier}` | Tier del generador |
| `{next_production}` | Countdown a la próxima producción |
| `{owner}` | Nombre del dueño |
