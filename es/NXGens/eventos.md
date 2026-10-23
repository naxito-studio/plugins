# Eventos y generadores corruptos

NXGens incluye dos motores automáticos que mantienen la economía viva: los **eventos aleatorios** (buffs temporales para todo el servidor) y el **sistema de corrupción** (malfunciones que obligan a reparar generadores).

---

## Eventos aleatorios

### ¿Qué son?

Son eventos server-wide que se activan solos y afectan a todos los generadores/ventas durante su duración. Con `events.enabled: true` el motor:

1. Elige un evento al azar de la lista de eventos definida.
2. Lo **anuncia en broadcast** al servidor completo (opcional: `events.broadcast`).
3. Aplica el efecto por la duración del evento.
4. Al finalizar lo desactiva y programa el siguiente según intervalos (`min-interval-seconds` / `max-interval-seconds` por defecto entre 30 y 60 min).

### Control manual (staff)

```
/nxgens event info              # eventos activos ahora
/nxgens event start <evento>    # arranca un evento manualmente
/nxgens event stop <evento>     # lo detiene antes de tiempo
```

> Arrancar un evento manual no desprograma el motor automático: ambos siguen su propio ciclo.

---

## Generadores corruptos

### ¿Qué es la corrupción?

Con `corrupted-generators` activo, cada ciclo (`interval-minutes`, 60 min por defecto) el sistema elige un porcentaje (`chance-percentage`, 5 % por defecto) de los generadores activos y los deja **corruptos** (fuera de servicio):

- El generador corrupto **deja de producir** (no suelta drops).
- El **dueño recibe un aviso** en chat + sonido (`notify-owner: true`).
- Su holograma reflejará el estado de falla.

### Reparación

El dueño arregla el generador pagando:

- El **precio de reparación específico de su tier** si lo definió en el editor….
- …o el `default-repair-cost` global (50.0 por defecto).

### Forzar una falla (staff)

Para probar la mecánica sin esperar al ciclo aleatorio hay un comando admin específico:

```
/nxgens corrupt <generador> [razón]
```

Requiere `nxgens.admin.corrupt` — típicamente lo usan admins para tests de gameplay o eventos administrados de degradación controlada.

---

## Balance recomendado

| Ajuste | Efecto si subes | Efecto si bajas |
|---|---|---|
| `corrupted-generators.interval-minutes` | Menos fallas por hora | Fallas más frecuentes |
| `corrupted-generators.chance-percentage` | Más generadores rotos por ciclo | Menos rotos |
| `corrupted-generators.default-repair-cost` | Reparar cuesta más | Reparación barata → mecánica casi gratis |
| `events.min/max-interval-seconds` | Eventos menos seguidos | Eventos más seguidos |

> La combinación event + corrupción es lo que empuja a los jugadores a repartir generadores por chunks, subir colectores con multiplicador y comprar rangos con bonus de venta — el loop económico de NXGens.
