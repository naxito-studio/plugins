# Installation

Step-by-step guide to install NXGens on your Minecraft Paper/Spigot server.

---

## 1. Download the plugin

Download `NXGens-x.x.jar` from [BuiltByBit](https://builtbybit.com) and drop it into your server's `plugins/` folder.

> If you purchased the plugin on BuiltByBit, **the license key is automatically injected** into the downloaded file — verify that the `config.yml` inside the jar already contains a real key in `license-key`.

---

## 2. Add the license key (direct sale)

If you obtained the plugin through a direct sale (Discord, etc.), open `plugins/NXGens/config.yml` and paste your key:

```yaml
license-key: "XXXX-XXXX-XXXX-XXXX-XXXX"
```

On the first startup the plugin validates the key against the license server and binds your server's IP to the license.

> Is your key bound to another IP and you get a `IP limit reached` error? Ask official support for an IP reset.

---

## 3. Install the dependencies (optional)

| Plugin | What it's for |
|---|---|
| [Vault](https://www.spigotmc.org/resources/vault.34315/) | Economy: buying generators, selling drops, collector upgrades |
| [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) | `%nxgens_%` placeholders in scoreboards, tab and containers |
| [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/) | Multipliers and generator slots per rank |
| DecentHolograms or FancyHolograms | Hologram provider (if you use neither, NXGens uses its internal display-entities renderer) |

Drop their jars into `plugins/` next to NXGens.

---

## 4. Start the server

Start the server. You should see in console:

```
[NXGens] License valid and authorized
```

The plugin automatically generates:

- `plugins/NXGens/config.yml` — main configuration
- `plugins/NXGens/menus.yml` — inventory menus
- `plugins/NXGens/messages_en/es/pt/fr.yml` — messages in 4 languages
- `plugins/NXGens/ranks.yml` — multipliers and slots per rank
- `plugins/NXGens/storage/` — SQLite storage by default

---

## 5. Verify the installation

In game, as an operator:

```
/nxgens version
/nxgens list
/genshop
```

If `/genshop` opens the purchase menu with your economy working, everything is ready. You can also run `/nxgens validate` to check the defined generators if you edited them by hand.

---

## Common problems

| Symptom | Solution |
|---|---|
| `License key not configured` | Paste your key into `license-key` in `config.yml` |
| `Unable to acquire a license key automatically` | The key was not injected on download — contact support with your proof of purchase |
| `Could not connect to the license server` | Minecraft server network error — check the firewall or try again |
| No commands work | Make sure your server is Paper/Spigot 1.20+ and that the jar loads in console |
| Nothing sells / no economy | Install Vault and confirm there is an active economy provider (EssentialsX, etc.) |
| Holograms don't appear | Enable `holograms: enabled: true` or install DecentHolograms/FancyHolograms |
