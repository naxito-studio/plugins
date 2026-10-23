# Uso del GUI

NXGens se administra casi por completo con menús de inventario. Hay **tres flujos de GUI**: la tienda para jugadores, el panel del Chunk Collector y el editor visual de generadores para administradores.

---

## Tienda de generadores (`/genshop`)

El menú que usan los jugadores a diario:

- Muestra **todos los generadores definidos** con su icono, nombre, tier y precio.
- **Clic izquierdo**: compra 1 (cobra con Vault y entrega el ítem si hay inventario).
- Si tu economía está desactivada, funciona como catálogo (entrega gratis).
- Todo el layout (título, tamaño, botones de decoración) se personaliza en `menus.yml`.

---

## Panel del Chunk Collector

Al interactuar con un colector (o `/nxgens collector` sobre uno) se abre su panel:

- **Información**: dueño, nivel, área de chunks en cobertura, capacidad y ocupación actual, multiplicador y estado de auto-venta.
- **Retiro**: recoger ítems del almacenamiento virtual al inventario (respetando `trust-can-withdraw`).
- **Auto-venta**:alternar la venta automática del colector.
- **Mejoras**: subir nivel pagando el costo correspondiente (aumenta capacidad, rango de chunks o multiplicador según la upgrade elegida).
- **Holograma de estado**: el colector muestra sus {placeholders} en el holograma flotante encima del bloque.

Ver [Sistema de generadores](generadores.md) para el flujo económico completo.

---

## Editor visual de generadores (`/nxgens editor`)

El editor permite **administrar la lista completa de generadores sin tocar archivos**:

### Lista principal

Muestra todos los generadores definidos con su icono y tier. Desde aquí:

- **Nuevo generador**: crea una definición en blanco.
- **Clic sobre uno**: entra al editor individual.

### Editor individual

Pantalla con botones para ajustar cada propiedad del generador:

| Propiedad | Cómo se edita |
|---|---|
| Nombre | Con input de chat (se cancela escribiendo `cancel`) |
| Tier / intervalo de producción | Botones +/- con ajuste por clicks y shift para pasos mayores |
| Drops | Agregar/editar entradas de drop (ítem, cantidad y probabilidad) con input de chat |
| Precio de compra (armazón) | Botones +/- de precio |
| Precio de reparación | Si tiene malfunciones, costo de reparación específico del tier |

### Probar

El editor incluye un **modo de prueba**: genera una muestra del drop para ver la producción en vivo sin colocar ningún generador en el mundo (`nxgens.admin.test`).

### Guardar y exportar

- Los cambios se aplican **en caliente** — los generadores nuevos quedan disponibles en `/genshop` de inmediato.
- `/nxgens duplicate <generador>` y `/nxgens delete <generador>` también operan sobre las definiciones del editor.
- `/nxgens export` exporta las definiciones en un formato portable.
- `/nxgens validate` revisa que las definiciones no estén corruptas después de editar a mano.

---

## Editor de configuración (admin)

NXGens también incluye **editores in-game** para la configuración general y los eventos (`nxgens.admin.edit` / `nxgens.admin.event`), siguiendo el mismo estilo de botones + input de chat del editor de generadores. Para ediciones grandes (listas largas, textos multi-línea del holograma) sigue siendo más cómodo editar `config.yml` y hacer `/nxgens reload`.

---

## Inputs de chat

Todos los flujos del GUI usan el mismo mecanismo: el plugin abre una sesión de chat y **todo lo que digas** va a parar al campo correspondiente.

- Escribe el valor y presiona Enter para confirmar.
- Escribe `cancel` para abortar sin cambios.
- Al terminar la edición, `Esc` para cerrar el menú.
