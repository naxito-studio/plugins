# Permisos

NXGens usa un sistema de permisos jerárquico estilo Bukkit. El permiso maestro `nxgens.admin` otorga **acceso completo** a todos los comandos y funciones (incluye todos los permisos listados abajo como hijos).

> Por defecto: comandos de jugador como `/genshop`, `/selldrops`, el uso de colectores básicos y `/gens trust` están **activados para todos** (`default: true`), y todos los permisos administrativos requieren **OP** (`default: op`) hasta que los asignes con LuckPerms u otro gestor.

---

## Jugador

| Permiso | Descripción | Por defecto |
|---|---|---|
| `nxgens.use` | Uso del comando base `/nxgens`. | op |
| `nxgens.help` | Uso de `/nxgens help`. | op |
| `nxgens.version` | Uso de `/nxgens version`. | op |
| `nxgens.list` | Uso de `/nxgens list`. | op |
| `nxgens.info` | Uso de `/nxgens info`. | op |
| `nxgens.shop` | Uso de `/nxgens shop` y `/genshop`. | **todos** |
| `nxgens.selldrops` | Venta manual con `/selldrops`. | **todos** |
| `nxgens.sellwand.use` | Uso de una Sellwand para vender contenedores. | **todos** |
| `nxgens.trust` | Dar acceso a otros jugadores a tus colectores. | **todos** |

---

## Colectores

| Permiso | Descripción | Por defecto |
|---|---|---|
| `nxgens.collector` | Uso del comando `/nxgens collector`. | op |
| `nxgens.collector.use` | Colocar e interactuar con Chunk Collectors. | op |
| `nxgens.collector.manage` | Gestionar bloques de colectores. | op |
| `nxgens.collector.break` | Retirar el colector propio (vuelve al inventario con su contenido). | op |
| `nxgens.collector.give` | Entrega directa de chunk collectors. | op |
| `nxgens.collector.logs` | Ver los registros de transacciones de un colector. | op |
| `nxgens.collector.bypass` | Staff: abrir y romper colectores ajenos sin ser confiable. | op |
| `nxgens.collector.limit.<número>` | Límite de colectores colocables (1, 2, 3…). | — |
| `nxgens.collector.limit.*` | Colectores ilimitados. | op |

> Los límites por permiso se combinan con `collectors.limits.default-limit` (por defecto 1 colector por jugador).

---

## Administración

| Permiso | Descripción |
|---|---|
| `nxgens.admin` | **Permiso maestro** — todo el acceso (incluye todos los permisos siguientes). |
| `nxgens.admin.editor` | Uso de `/nxgens editor`. |
| `nxgens.admin.reload` | Uso de `/nxgens reload`. |
| `nxgens.admin.give` | Uso de `/nxgens give`. |
| `nxgens.admin.delete` | Uso de `/nxgens delete`. |
| `nxgens.admin.duplicate` | Uso de `/nxgens duplicate`. |
| `nxgens.admin.validate` | Uso de `/nxgens validate`. |
| `nxgens.admin.export` | Exportación de definiciones de generadores. |
| `nxgens.admin.multiplier` | Multiplicadores por rango. |
| `nxgens.admin.slots` | Slots de generadores por rango. |
| `nxgens.admin.sellwand` | Entrega de Sellwands. |
| `nxgens.admin.collector` | Administración de colectores. |
| `nxgens.admin.event` | Iniciar/detener/consultar eventos. |
| `nxgens.admin.corrupt` | Forzar malfunciones con `/nxgens corrupt`. |
| `nxgens.admin.create` | Crear generadores. |
| `nxgens.admin.edit` | Editar generadores. |
| `nxgens.admin.test` | Probar generadores. |

[`nxgens.editor` y `nxgens.sellwand.give` / `nxgens.collector.give`] son alias directos de las versiones `admin` (compatibilidad con configuraciones antiguas).

---

## Ejemplos con LuckPerms

```
/lp group vip permission set nxgens.shop true
/lp group vip permission set nxgens.collector.limit.3 true
/lp group vip permission set nxgens.collector.use true
```

> Los **multiplicadores de venta** y **slots de generadores** por rango no son permisos: se configuran con `/nxgens multiplier <rango> <valor>` y `/nxgens slots <rango> <valor>`, y se aplican al grupo de LuckPerms del mismo nombre.
