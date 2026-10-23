# Configuración — config.yml

Documento de referencia de `plugins/NXGens/config.yml`. Tras cualquier cambio corre `/nxgens reload`.

---

## Licencia y keys

```yaml
license-key: "XXXX-XXXX-XXXX-XXXX-XXXX"
```

Clave de licencia obligatoria. En descargas de BuiltByBit viene inyectada automáticamente; en venta directa el comprador la pega aquí.

---

## General

```yaml
general:
  prefix: "&8[&6NXGens&8]&r "
  debug: false
  language: "en"
  check-updates: true
```

| Clave | Descripción |
|---|---|
| `prefix` | Prefijo de todos los mensajes del plugin (colores legacy) |
| `debug` | Mensajes de depuración en consola |
| `language` | Idioma de mensajes: `en`, `es`, `pt`, `fr` (archivo `lang/messages_<idioma>.yml`) |
| `check-updates` | Aviso de nueva versión en el arranque |

---

## Almacenamiento

```yaml
storage:
  type: "sqlite"          # "sqlite" o "mysql"
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

SQLite por defecto (cero configuración). Para bases de datos grandes usa MySQL: copia los datos de la pestaña Databases de Pterodactyl (host, usuario y contraseña). Aquí se guardan generadores colocados, colectores, ventas y logs de transacciones.

---

## Generadores

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

| Clave | Descripción |
|---|---|
| `max-per-player` | Generadores simultáneos por jugador sin rango especial |
| `default-interval` | Ticks entre producciones compartidas (400 = 20 s) |
| `allow-break` | Permitir romper generadores a su dueño |
| `return-on-break` | Devolver el ítem del generador al romperlo |
| `world-restriction` / `allowed-worlds` | Restringir colocación a mundos específicos |
| `physical-drops-fallback` | `true` = si el colector está lleno el drop cae al suelo; `false` = se pierde |
| `drop-y-offset` | Altura de spawn del drop encima del generador (evita colisión con el bloque) |

---

## Generadores corruptos (fallas)

```yaml
corrupted-generators:
  enabled: true
  interval-minutes: 60
  chance-percentage: 5.0
  default-repair-cost: 50.0
  notify-owner: true
```

| Clave | Descripción |
|---|---|
| `enabled` | Motor de malfunciones aleatorias |
| `interval-minutes` | Cada cuánto corre el chequeo de corrupción (60 = cada hora) |
| `chance-percentage` | % de generadores activos que se corrompen por ciclo (5.0 = 5%) |
| `default-repair-cost` | Costo de reparación si el tier no define el suyo |
| `notify-owner` | Aviso en chat + sonido al dueño cuando se corrompe |

Ver [Eventos y generadores corruptos](../eventos.md).

---

## Colectores

```yaml
collectors:
  enabled: true
  block-material: LODESTONE
  display-name: "Chunk Collector"
  default-capacity: 1000
  auto-sell-interval: 6000
```

| Clave | Descripción |
|---|---|
| `block-material` | Bloque que representa el colector |
| `default-capacity` | Capacidad inicial (stacks de ítems) |
| `auto-sell-interval` | Ticks entre ventas automáticas (6000 = 5 min) |

### Límites

```yaml
  limits:
    default-limit: 1   # más vía nxgens.collector.limit.<n>; * = unlimited
```

### Reporte de ganancias

```yaml
  earnings-report:
    enabled: true
    interval-minutes: 60
    only-if-earned: true
```

Reporte periódico a los dueños online con lo que ganó cada colectors en el periodo (solo si ganó algo, con `only-if-earned`).

### Confianza

```yaml
  trust-can-withdraw: true
  trust-can-sell: false
```

Qué pueden hacer los jugadores con acceso al colector (`/gens trust add`): retirar ítems y/o venderlos.

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

| Clave | Descripción |
|---|---|
| `cost-formula` | Cómo escala el precio: `exponential` = base × multiplicador^(nivel−1); `linear` = base × nivel; `fixed` = base siempre |
| `cost-multiplier` | Factor de encarecimiento por nivel (2.0 = cada nivel cuesta el doble del anterior) |
| `max-level` | Nivel máximo (0 = sin tope) |
| `base-multiplier` / `multiplier-per-level` | Multiplicador de venta inicial y bonus por nivel |

### Cobertura de chunks

```yaml
  chunks:
    base-range: 1      # nivel 1 = 1 chunk por dirección (3×3 = 9 chunks)
    range-per-level: 1 # cada nivel suma 1 chunk al rango
```

---

## Eventos aleatorios

```yaml
events:
  enabled: true
  broadcast: true
  min-interval-seconds: 1800
  max-interval-seconds: 3600
```

Anunciar el inicio/fin en broadcast y delay entre eventos (30–60 min por defecto). Ver [Eventos y generadores corruptos](../eventos.md).

---

## Rangos (LuckPerms)

```yaml
ranks:
  max-multiplier: 100.0
  max-slots: 1000
```

Topes de seguridad para `/nxgens multiplier` y `/nxgens slots`. Los valores por rango se guardan y administran en `plugins/NXGens/ranks.yml` — **no los edites a mano** mientras el plugin corre.

---

## Sellwands

```yaml
sellwands:
  material: "BLAZE_ROD"
  glow: true
  action-bar: true
```

Ítem de la Sellwand, efecto de brillo y notificación en action bar al vender.

---

## Economía

```yaml
economy:
  enabled: true
  use-vault: true
  sell-multiplier: 1.0
  currency-format: "$#,##0.00"
  min-transaction: 0.01
```

| Clave | Descripción |
|---|---|
| `enabled` | Compras/ventas/upgrades activos |
| `use-vault` | Usar Vault como proveedor |
| `sell-multiplier` | Multiplicador global de venta (1.0 = precio normal) |
| `currency-format` | Formato del dinero en mensajes |
| `min-transaction` | Mínimo por transacción |

---

## Hologramas

```yaml
holograms:
  enabled: true
  provider: "auto"     # auto | decentholograms | fancyholograms | display
  update-interval: 40
  y-offset: 1.15
```

`provider` elige el proveedor: `auto` prueba DecentHolograms → FancyHolograms → display entities internos. Las líneas admiten colores legacy (`&6`) y los placeholders internos documentados más abajo.

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

Ver todos los placeholders internos en [PlaceholderAPI](../placeholders.md).

---

## Integraciones y rendimiento

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

| Clave | Descripción |
|---|---|
| `batch-size` | Generadores procesados por tick (baja si hay lag) |
| `async-database` | Consultas a DB asincrónicas (no tocar) |
| `cache-duration` | Segundos de caché de datos frecuentes |
| `max-concurrent-queries` | Tope de consultas concurrentes |

---

## Logs y auditoría

```yaml
logging:
  transactions: true
  admin-actions: true
  errors: true
  retention-days: 30
  console-level: "INFO"
```

Registro de transacciones económicas, acciones de admins, errores, retención (días; 0 = ilimitado, no recomendado) y nivel de consola.
