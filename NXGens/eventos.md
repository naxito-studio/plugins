# Events & corrupted generators

NXGens includes two automatic engines that keep the economy alive: **random events** (server-wide temporary buffs) and the **corruption system** (malfunctions that force generator repairs).

---

## Random events

### What are they?

They are server-wide events that trigger on their own and affect every generator/sale during their duration. With `events.enabled: true` the engine:

1. Picks an event at random from the defined event list.
2. **Announces it in broadcast** to the whole server (optional: `events.broadcast`).
3. Applies the effect for the event's duration.
4. When it ends it disables it and schedules the next one according to its intervals (`min-interval-seconds` / `max-interval-seconds`, between 30 and 60 min by default).

### Manual control (staff)

```
/nxgens event info              # events active right now
/nxgens event start <event>     # starts an event manually
/nxgens event stop <event>      # stops it early
```

> Starting an event manually does not unschedule the automatic engine: both keep their own cycle.

---

## Corrupted generators

### What is corruption?

With `corrupted-generators` active, every cycle (`interval-minutes`, 60 min by default) the system picks a percentage (`chance-percentage`, 5% by default) of active generators and leaves them **corrupted** (out of service):

- The corrupted generator **stops producing** (drops no items).
- The **owner gets a warning** in chat + a sound (`notify-owner: true`).
- Its hologram reflects the failed state.

### Repair

The owner fixes the generator by paying:

- The **repair price specific to its tier** if they defined one in the editor…
- …or the global `default-repair-cost` (50.0 by default).

### Forcing a failure (staff)

To test the mechanic without waiting for the random cycle there is a dedicated admin command:

```
/nxgens corrupt <generator> [reason]
```

Requires `nxgens.admin.corrupt` — typically used by admins for gameplay tests or admin-driven controlled decay events.

---

## Recommended balancing

| Setting | Effect if you raise it | Effect if you lower it |
|---|---|---|
| `corrupted-generators.interval-minutes` | Fewer failures per hour | More frequent failures |
| `corrupted-generators.chance-percentage` | More broken generators per cycle | Fewer broken |
| `corrupted-generators.default-repair-cost` | Repairing costs more | Cheap repairs → nearly free mechanic |
| `events.min/max-interval-seconds` | Less frequent events | More frequent events |

> The event + corruption combination is what pushes players to spread generators across chunks, upgrade collectors with multipliers and buy ranks with sell bonuses — NXGens' economic loop.
