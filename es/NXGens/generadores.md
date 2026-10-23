# Sistema de generadores

El corazón de NXGens: generadores por tier con producción automática, gestión de slots y ciclo completo comprar → colocar → producir → vender.

---

## ¿Cómo funciona?

### 1. Compra en `/genshop`

Los jugadores compran generadores en la tienda con dinero de Vault. Cada generador tiene su precio, tier, lo que produce y su icono en el menú.

Sin Vault (economy desactivada) la tienda entrega los generadores gratis, útil para usar NXGens como sistema de recompensas.

### 2. Colocación

El generador es un bloque normal: lo colocan a la vista como **cualquier otro bloque del mundo**. Al colocar, el plugin:

- Cobra uno de sus slots de generador (`generators.max-per-player` o el valor por rango en `ranks.yml`).
- Registra el generador a su dueño en la base de datos con posición exacta y persiste entre reinicios.
- Crea el holograma encima (con `{name}`, `{tier}` y countdown a próxima producción).

### 3. Producción

Según el **intervalo de producción del tier** (`generators.default-interval`, por defecto 400 ticks = 20 s), cada generador:

- **Suelta físicamente** el ítem en el mundo (comportamiento normal de drops)…
- …**o deposita el drop virtualmente** en un Chunk Collector del dueño si el generador está dentro del área de un colector (ver abajo).

> El offset vertical `drop-y-offset` (por defecto 1.30) deja los drops spawnear justo encima del bloque del generador para que no cuelen en él.

### 4. Venta

Los drops se venden de 3 maneras:

| Método | Comando/acción | Multiplicador aplicado |
|---|---|---|
| Venta manual | `/selldrops` | Multiplicador del rango del jugador |
| Venta con Sellwand | Click derecho con la wand en un contenedor con drops | Multiplicador del rango |
| Auto-venta del colector | Venta programada del Chunk Collector | Multiplicador del colector (bonus de upgrade) |

---

## Chunk Collectors

Los **Chunk Collectors** (bloque `LODESTONE` por defecto) juntan los drops de **todos los generadores del dueño en un área de chunks**:

- Nivel 1 cubre 3×3 chunks (rango 1); cada nivel suma 1 chunk al rango (`5×5`, `7×7`…).
- Los drops entran como **almacenamiento virtual** en el colector, sin ocupar ítems físicos en el mundo.
- Si el colector está lleno y ya no puede recibir: `physical-drops-fallback: true` suelta el drop en el suelo; `false` lo pierde.
- Cada jugador empieza con `default-limit: 1` colector; más se conceden vía permiso `nxgens.collector.limit.<n>`.

### Mejoras

Los colectores suben de nivel pagando dinero de Vault (fórmulas `exponential`, `linear` o `fixed`) y cada nivel sube:

| Mejora | Efecto |
|---|---|
| Capacidad | +`capacity-increase` (500 por defecto) de stacks almacenados |
| Rango | +1 chunk en cada dirección |
| Multiplicador | +`multiplier-per-level` (0.01× por nivel) en la venta |

### Auto-venta

Los colectores venden su contenido automáticamente cada `auto-sell-interval` ticks (5 min por defecto). Si un colector se llena antes: `physical-drops-fallback: true` dropea a la tierra, `false` pierde el drop.

### Reportes de ganancias

A cada dueño online se le envía un reporte periódico (`earnings-report.interval-minutes`, cada hora por defecto) con lo que produjo cada colector en el periodo.

---

## Generadores corruptos (fallas)

Motor de malfunciones para mantener viva la economía:

- Cada `interval-minutes` (60 por defecto) se elige el `chance-percentage` (5 %) de generadores activos y se "corrompe" uno.
- Un generador corrupto **deja de producir** hasta que su dueño pague la reparación (`default-repair-cost` o precio por tier).
- El dueño recibe aviso en el chat y sonido al corromperse.

Más información y del motor de eventos en [Eventos y generadores corruptos](eventos.md).

---

## Rangos: multiplicadores y slots

Con LuckPerms, cada grupo puede tener:

- **Multiplicador de ventas** — se aplica a todos los drops que venden (`/selldrops`, Sellwand).
- **Slots de generadores** — cuántos generadores pueden tener colocados a la vez.

Se configuran con los comandos admin y guardan en `plugins/NXGens/ranks.yml`:

```
/nxgens multiplier vip 1.25
/nxgens slots vip 10
```

---

## Personalización

Cada servidor es distinto — NXGens está diseñado para personalizarse todo:

- **Editor visual (GUI)**: crea y ajusta generadores en el juego sin reiniciar.
- **Drops definibles**: cada drop es configurable (ítem, cantidad, probabilidad) por generador.

Ver [Uso del GUI](gui.md) para el flujo completo del editor.
