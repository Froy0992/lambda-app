# LAMBDA · Control de Campo

App para controlar equipo topográfico, maquinaria, cómputo, contratos, personal, mantenimiento y evidencia fotográfica. Funciona en computadora, iPhone y Android, y sin señal.

## Instalar en el celular
- **Android (Chrome):** abre el enlace de la app → menú ⋮ → "Instalar app".
- **iPhone (Safari):** abre el enlace → botón Compartir → "Agregar a inicio".

## Estado
- Los datos y usuarios se guardan en cada dispositivo.
- Siguiente fase: servidor para sincronizar entre dispositivos y usuarios.

## Control de Obras (`/obras`)

App separada, sin marca, para seguimiento de contratos de obra: avance físico vs. programado, estimaciones y su resumen (anticipo, amortización, IVA, saldo por estimar), convenios modificatorios, pendientes y acuerdos de minuta, bitácora con folio, evidencias con foto y GPS, y documentos (contratos, convenios, fianzas, planos).

- Enlace (con GitHub Pages activo): https://froy0992.github.io/lambda-app/obras/
- Funciona sin señal y se instala en el celular ("Agregar a pantalla de inicio").
- Tiempo real: en **Ajustes → Sincronización** se conecta a un proyecto gratuito de Supabase. El código SQL para prepararlo viene en esa misma pantalla.
