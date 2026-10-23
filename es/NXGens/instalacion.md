# Instalación

Guía paso a paso para instalar NXGens en tu servidor de Minecraft Paper/Spigot.

---

## 1. Descarga el plugin

Descarga `NXGens-x.x.jar` desde [BuiltByBit](https://builtbybit.com) y colócalo en la carpeta `plugins/` de tu servidor.

> Si compraste el plugin en BuiltByBit, **la clave de licencia viene inyectada automáticamente** en el archivo descargado — verifica que el `config.yml` dentro del jar contenga ya una clave real en `license-key`.

---

## 2. Coloca la clave de licencia (venta directa)

Si obtuviste el plugin por venta directa (Discord, etc.), abre `plugins/NXGens/config.yml` y coloca tu clave:

```yaml
license-key: "XXXX-XXXX-XXXX-XXXX-XXXX"
```

Al primer arranque el plugin valida la clave contra el servidor de licencias y vincula la IP del servidor a tu licencia.

> ¿Tu clave está en otro IP y te da error `Límite de IPs alcanzado`? Pide un restablecimiento de IP al soporte oficial.

---

## 3. Instala las dependencias (opcionales)

| Plugin | Para qué sirve |
|---|---|
| [Vault](https://www.spigotmc.org/resources/vault.34315/) | Economía: comprar generadores, vender drops, upgrades de colectores |
| [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) | Placeholders `%nxgens_%` en scoreboards, tab y contenedores |
| [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/) | Multiplicadores y slots de generadores por rango |
| DecentHolograms o FancyHolograms | Proveedor de hologramas (si no usas ninguno, NXGens usa su renderizador interno con display entities) |

Coloca sus jars en `plugins/` junto al de NXGens.

---

## 4. Inicia el servidor

Arranca el servidor. En consola debes ver:

```
[NXGens] Licencia válida y autorizada
```

El plugin genera automáticamente:

- `plugins/NXGens/config.yml` — configuración principal
- `plugins/NXGens/menus.yml` — menús del inventario
- `plugins/NXGens/messages_en/es/pt/fr.yml` — mensajes en 4 idiomas
- `plugins/NXGens/ranks.yml` — multiplicadores y slots por rango
- `plugins/NXGens/storage/` — almacenamiento SQLite por defecto

---

## 5. Verifica la instalación

En el juego, como operador:

```
/nxgens version
/nxgens list
/genshop
```

Si `/genshop` abre el menú de compra con tu economía funcionando, está todo listo. También puedes usar `/nxgens validate` para verificar los generadores definidos si los editaste a mano.

---

## Problemas comunes

| Síntoma | Solución |
|---|---|
| `License key not configured` | Coloca tu clave en `license-key` del `config.yml` |
| `Unable to acquire a license key automatically` | La clave no se inyectó al descargar — contacta soporte con tu comprobante |
| `Could not connect to the license server` | Error de red del servidor de Minecraft — revisa el firewall o inténtalo de nuevo |
| Ningún comando funciona | Revisa que tu servidor sea Paper/Spigot 1.20+ y que el jar cargue en consola |
| Nada se vende / sin economía | Instala Vault y confirma que hay un proveedor de economía activo (EssentialsX, etc.) |
| Los hologramas no aparecen | Activa `holograms: enabled: true` o instala DecentHolograms/FancyHolograms |
