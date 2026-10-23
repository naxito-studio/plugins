# FAQ

Answers to the most common issues and questions about NXGens.

---

## Licensing

### The server says "License key not configured"

Paste your key into `license-key` in `config.yml` and restart. If you bought it on BuiltByBit, the key is already injected into the downloaded jar.

### "Could not connect to the license server"

Your Minecraft server failed to reach the license server. Check your host's outbound internet and firewall. Validation is retried on the next startup or `/nxgens reload`.

### "IP limit reached (1/1)"

Each license is bound to the **first IP** that verifies it. If you migrate hosts or change IPs, request an **IP reset** from support — it's restored with one click in the admin panel.

### What if my key is declared invalid?

The plugin suspends its features (it doesn't load generators or collectors) until the key is valid again. It does not delete data: your generator database stays intact.

---

## Generators

### How many generators can a player have?

`generators.max-per-player` (50 by default). A different per-rank cap is set with `/nxgens slots <rank> <value>`.

### My generators disappeared after a restart

Placed generators are registered at their exact position in the database. If you used WorldEdit or /setblock to move/replace the block, the position no longer matches and the record is lost. Always place generators with the plugin's item.

### Are drops physical or virtual items?

By default **physical** (the item drops above the generator). If the owner's Chunk Collector is in the area, the drop goes **virtually** into the collector. With `physical-drops-fallback: true` a full collector doesn't lose drops (they fall to the ground); with `false` they are lost.

### Production feels slow with many generators

The engine processes generators in batches (`performance.batch-size`, 100 per tick) and the database runs asynchronously — it's sized for large farms. If you notice lag, lower `batch-size` and raise `cache-duration`.

---

## Collectors

### Can several players share a collector?

Yes, with the trust system: `/gens trust add <player>` lets others open your collector. Withdrawal (`trust-can-withdraw: true`) and selling (`trust-can-sell: false`) are configured separately.

### How many collectors can a player place?

1 by default (`collectors.limits.default-limit`). More via the `nxgens.collector.limit.2`, `.3`, … permissions, or unlimited with `nxgens.collector.limit.*`.

### The chunk area looks wrong

The base range is 1 chunk in every direction (3×3, 9 chunks) with the default configuration. Level upgrades go to 5×5, 7×7 and so on — the collector's hologram shows the real area (`{chunk_area}`).

### Does the collector break with a pickaxe?

When broken it **returns to the inventory** with its contents and configuration intact (`nxgens.collector.break` permission). It's intentional: no drops are lost.

---

## Economy

### Nobody can buy or sell

Check:
1. `economy.enabled: true` in config.yml
2. `use-vault: true` and **Vault installed** with an economy provider (EssentialsX, CMI…)
3. That your balance covers the generator's price in `/genshop`

### Prices don't match what I defined in the editor

`economy.sell-multiplier` (1.0 by default) adjusts all sales globally. Also check your rank's multiplier: `/selldrops` always announces in chat the total and the applied multiplier — active collector bonuses can be confused with the base price.

---

## Holograms

### Holograms don't appear

1. Confirm `holograms.enabled: true`
2. `provider: "auto"` tries DecentHolograms → FancyHolograms → internal display entities. If you use a specific one, set its name in the provider.
3. Check the hologram's `y-offset` if it's hidden inside the block.

### Can I customize the hologram lines?

Yes, fully: `holograms.lines` (generators) and `holograms.collector.lines` (collectors) accept legacy colors + the internal placeholders `{owner}`, `{stored}`, etc. documented in [PlaceholderAPI → internal placeholders](placeholders.md).

---

## Editing and administration

### I changed `config.yml` and nothing happens

Remember `/nxgens reload` after every change.

### Can generators be edited without files?

Yes: `/nxgens editor`, entirely in game — create, edit, duplicate and test generators without touching YAML. See [GUI Usage](gui.md).

### Do the placeholders work in chat and scoreboards?

NXGens exposes placeholders through PAPI (`%nxgens_*%`) that any PlaceholderAPI-compatible plugin can consume (scoreboards, TAB, chat format…).
