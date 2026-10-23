# Comandos

NXGens tiene **tres comandos raíz** con alias:

| Comando | Alias |
|---|---|
| `/nxgens` | `/nxg`, `/gens` |
| `/genshop` | `/gshop`, `/generatorshop` |
| `/selldrops` | — |

---

## Resumen

| Comando | Descripción | Permiso requerido |
|---|---|---|
| `/nxgens help` | Muestra el menú de ayuda. | `nxgens.help` |
| `/nxgens version` | Muestra la versión del plugin e información del servidor. | `nxgens.version` |
| `/nxgens list` | Lista los generadores definidos. | `nxgens.list` |
| `/nxgens info <generador>` | Muestra los detalles de un generador. | `nxgens.info` |
| `/nxgens collector` | Gestión y entrega de Chunk Collectors. | `nxgens.collector` |
| `/nxgens trust <add\|list\|remove> <jugador>` | Da acceso a otros jugadores a tus colectores. | `nxgens.trust` |
| `/genshop` | Abre la tienda de generadores. | `nxgens.shop` |
| `/selldrops [hand]` | Vende los drops de generadores en tu inventario con tus multiplicadores. | `nxgens.selldrops` |
| `/nxgens editor` | Abre el editor visual de generadores. | `nxgens.admin.editor` |
| `/nxgens give <generador> [jugador]` | Entrega el ítem de un generador sin cobrarlo. | `nxgens.admin.give` |
| `/nxgens reload` | Recarga configuración, mensajes, menús y ranks. | `nxgens.admin.reload` |
| `/nxgens delete <generador>` | Elimina un generador definido. | `nxgens.admin.delete` |
| `/nxgens duplicate <generador>` | Duplica un generador definido. | `nxgens.admin.duplicate` |
| `/nxgens validate` | Verifica la integridad de los generadores definidos. | `nxgens.admin.validate` |
| `/nxgens multiplier <rango> <valor>` | Configura el multiplicador de ventas de un rango. | `nxgens.admin.multiplier` |
| `/nxgens slots <rango> <valor>` | Configura el máximo de generadores por rango. | `nxgens.admin.slots` |
| `/nxgens sellwand give <jugador> [usos]` | Entrega una Sellwand. | `nxgens.admin.sellwand` |
| `/nxgens event <start\|stop\|info> [evento]` | Controla los eventos aleatorios del servidor. | `nxgens.admin.event` |
| `/nxgens corrupt <generador> [razón]` | Fuerza una falla (corrupción) en un generador. | `nxgens.admin.corrupt` |
| `/nxgens export` | Exporta la definición de generadores del editor. | `nxgens.admin.export` |

> Los comandos administrativos funcionan desde consola salvo los que abren GUI (`/nxgens editor` solo funciona en el juego).

---

## Detalle de los comandos de jugador

### `/genshop`

Abre la [tienda de generadores](gui.md). Cada generador muestra su precio, tier y descripción; al comprar cuesta el dinero definido vía Vault. Si la economía está desactivada (`economy: enabled: false`), la tienda funciona como catálogo (entrega gratis el ítem al hacer clic).

---

### `/selldrops [hand]`

Vende todos los ítems de generación que tengas en el inventario, aplicando el **multiplicador de tu rango** (LuckPerms) y el multiplicador global (`economy.sell-multiplier`).

Con el modificador `hand` se vende solo el ítem que sostienes en la mano principal.

```
/selldrops
/selldrops hand
```

---

### `/nxgens trust <add|list|remove> <jugador>`

El sistema de confianza controla quién puede usar tus Chunk Collectors. Los jugadores con confianza pueden abrir el colector y (según `collectors.trust-can-withdraw` y `collectors.trust-can-sell`) retirar ítems o venderlos.

```
/gens trust add Steve
/gens trust list
/gens trust remove Steve
```

---

## Detalle de los comandos administrativos

### `/nxgens editor`

Abre el [editor visual de generadores](gui.md): crear, duplicar, editar y probar generadores directamente en el juego, sin reiniciar el servidor ni tocar archivos.

---

### `/nxgens multiplier <rango> <valor>`

Configura el **multiplicador de ganancias** del rango de LuckPerms indicado. Ese multiplicador se aplica al vender drops con `/selldrops` o con una Sellwand.

```
/nxgens multiplier vip 1.25
```

El valor se guarda en `plugins/NXGens/ranks.yml` y está limitado por `ranks.max-multiplier` (por defecto 100.0).

---

### `/nxgens slots <rango> <valor>`

Configura el **máximo de generadores** colocables por el rango indicado:

```
/nxgens slots vip 10
```

Se guarda en `ranks.yml` y el tope global es `ranks.max-slots` (por defecto 1000).

---

### `/nxgens event <start|stop|info> [evento]`

Arranca o detiene manualmente un [evento aleatorio](eventos.md) y consulta su estado. Sin argumentos muestra los eventos activos. Ten en cuenta que el propio motor de eventos también los lanza solos según sus intervalos configurados.

---

### `/nxgens corrupt <generador> [razón]`

Fuerza manualmente una **corrupción** (falla) en un generador: el mismo mecanismo que aplica el motor aleatorio de malfunciones — el generador deja de producir hasta que su dueño paga la reparación. Útil para probar la mecánica sin esperar al ciclo aleatorio.

---

### `/nxgens give <generador> [jugador]`

Entrega el ítem del generador definido (sin cobrarlo) al jugador objetivo o a ti mismo. Utiliza **el mismo ítem** que el jugador recibe al comprar en `/genshop` o colocarlo con `/nxgens give`.

---

### `/nxgens validate`

Revisa la integridad de los generadores definidos (materiales, tier, drops y precios) y reporta cualquier definición corrupta o inválida. Útil después de editar `generators.yml` a mano o importar definiciones.

---

### `/nxgens reload`

Recarga en caliente la configuración (`config.yml`), los mensajes, los menús y los ranks. **No** recarga definiciones de generadores si tu editor está abierto — guarda y cierra en la GUI primero.
