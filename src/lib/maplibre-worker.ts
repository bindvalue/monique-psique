// src/lib/maplibre-setup.ts
import { setWorkerUrl } from 'maplibre-gl';

// Executa assim que o módulo é importado, ANTES de qualquer mapa ser criado.
setWorkerUrl('/maplibre/maplibre-gl-worker.mjs');

export {};