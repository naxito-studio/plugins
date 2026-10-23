# Preguntas frecuentes

Respuestas a los problemas y dudas más comunes sobre NXGens.

---

## Licencias

### El servidor dice "License key not configured"

Coloca tu clave en `license-key` del `config.yml` y reinicia. Si compraste en BuiltByBit, la clave viene ya inyectada en el jar descargado.

### "Could not connect to the license server"

Falla la conexión del servidor de Minecraft al servidor de licencias. Revisa la salida a internet del hosting y el firewall. La validación se reintenta en el siguiente arranque o `/nxgens reload`.

### "Límite de IPs alcanzado (1/1)"

Cada licencia queda ligada a la **primera IP** que la verifica. Si migras de hosting o cambias de IP, pide un **reset de IP** al soporte — en el panel de administración se restablece en un click.

### ¿Qué pasa si mi clave se declara inválida?

El plugin suspende sus funciones (no carga generadores ni colectores) hasta que la clave sea válida de nuevo. No borra datos: tu base de datos de generadores persiste intacta.

---

## Generadores

### ¿Cuántos generadores puede tener un jugador?

`generators.max-per-player` (50 por defecto). Por rango se configura distinto con `/nxgens slots <rango> <valor>`.

### Mis generadores desaparecieron tras un reinicio

Los colocados se registran a la posición exacta en la DB. Si usaste WorldEdit o /setblock para mover/remplazar el bloque, la posición ya no coincide y se pierde el registro. Coloca siempre los generadores con el ítem del plugin.

### ¿Los drops son ítems físicos o virtuales?

Por defecto **físicos** (suelta el ítem encima del generador). Si hay un Chunk Collector del dueño en el área, entra **virtualmente** al colector. Con `physical-drops-fallback: true` un colector lleno no pierde el drop (cae al suelo); con `false` se pierde.

### La producción se siente lenta con muchos generadores

El motor procesa generadores por lotes (`performance.batch-size`, 100 por tick) y la base de datos va asincrónica — está dimensionado para granjas grandes. Si notas lag, baja `batch-size` y sube `cache-duration`.

---

## Colectores

### ¿Pueden varios jugadores compartir un colector?

Sí, con el sistema de confianza: `/gens trust add <jugador>` permite que otros abran tu colector. Retiro (`trust-can-withdraw: true`) y venta (`trust-can-sell: false`) se configuran por separado.

### ¿Cuántos colectores puede colocar un jugador?

1 por defecto (`collectors.limits.default-limit`). Más con permisos `nxgens.collector.limit.2`, `.3`, … o ilimitado con `nxgens.collector.limit.*`.

### El área de chunks parece incorrecta

El rango base es 1 chunk en cada dirección (3×3, 9 chunks) con la configuración por defecto. En upgrades de nivel se van a 5×5, 7×7 y así sucesivamente — los hologramas del colector te muestran el área real (`{chunk_area}`).

### ¿Se rompe el colector con pico?

Al romperlo **vuelve al inventario** con su contenido y config intacto (permiso `nxgens.collector.break`). Es intencional: los drops no se pierden.

---

## Economía

### No se puede comprar ni vender

Verifica:
1. `economy.enabled: true` en config.yml
2. `use-vault: true` y **Vault instalado** con un proveedor de economía (EssentialsX, CMI…)
3. Que tu dinero sea suficiente para el precio del generador en `/genshop`

### Los precios no coinciden con lo que definí en el editor

`economy.sell-multiplier` (por defecto 1.0) ajusta globalmente las ventas. Revisa también el multiplicador de tu rango: `/selldrops` siempre te anuncia en el chat el total y el multiplicador aplicado — si hay bonus de colector activos pueden confundir con el precio base.

---

## Hologramas

### No aparecen los hologramas

1. Confirma `holograms.enabled: true`
2. `provider: "auto"` intenta DecentHolograms → FancyHolograms → display entities internos. Si usas uno específico, define su nombre en el provider.
3. Revisa el `y-offset` del holograma si está escondido dentro del bloque.

### ¿Puedo personalizar las líneas del holograma?

Sí, entera: `holograms.lines` (generadores) y `holograms.collector.lines` (colectores) aceptan colores legacy + los placeholders internos `{owner}`, `{stored}`, etc. documentados en [PlaceholderAPI → placeholders internos](placeholders.md).

---

## Edición y administración

### Hice cambios en `config.yml` y no pasan nada

Recuerda `/nxgens reload` tras cada cambio.

### ¿Se puede editar generadores sin archivos?

Sí: `/nxgens editor` totalmente en el juego — crea, edita, duplica y prueba generadores sin tocar YAML. Ver [Uso del GUI](gui.md).

### ¿Es compatible con los placeholders en el chat y el scoreboard?

NXGens expone placeholders por PAPI (`%nxgens_*%`) que cualquier plugin compatible con PlaceholderAPI puede consumir (scoreboards, TAB, chat format…).
