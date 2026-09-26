# Gala de Talentos y Fe — Decimotercer Sábado

Sistema gráfico de producción en vivo para controlar el programa de la gala desde el navegador.

## Vistas

- **Panel principal:** selecciona y envía cada segmento a la pantalla pública.
- **Pantalla pública:** salida limpia 16:9 para el proyector.
- **Ensayo:** entorno separado para practicar sin alterar la salida en vivo.
- **Media local:** fotos, video especial de Meily y fondos del evento.

## Uso en GitHub Pages

Abre la página publicada y usa **ABRIR DISPLAY** desde el panel. El panel y la pantalla pública deben permanecer abiertos en el mismo navegador para sincronizarse automáticamente.

Los cambios realizados durante la gala se guardan en ese navegador mediante almacenamiento local.

## Desarrollo local

```bash
npm install
npm run dev
```

Para comprobar la versión estática de GitHub Pages:

```bash
npm run build:pages
```
