<script setup>
const props = defineProps(['specifications'])
import { useIndicationsStore } from '../stores/indications'

const indicationStore = useIndicationsStore()
</script>

<template>
  <div class="patient-specification-list">
    <h2>Indicaciones del paciente</h2>
    <div v-for="specification in indicationStore.indications" :key="specification.indicacion">
      <p>{{ specification.indicacion }}</p>
      <p>Fecha de inicio: {{ specification.fechaInicio }}</p>
      <p>Fecha de fin: {{ specification.fechaFin }}</p>
      <p>Dosis: {{ specification.dosis }}</p>
      <p>Frecuencia: {{ specification.frecuencia }}</p>
    </div>
  </div>
</template>