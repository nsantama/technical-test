<script setup>
const props = defineProps(['specifications'])
import { useIndicationsStore } from '../stores/indications'

const indicationStore = useIndicationsStore()
</script>

<template>
  <div class="patient-specification-list">
    <h2>Indicaciones del paciente</h2>
    <div v-for="indication in indicationStore.indications" :key="indication.id">
      <p>{{ indication.indicacion }}</p>
      <p>Fecha de inicio: {{ indication.fechaInicio }}</p>
      <p>Fecha de fin: {{ indication.fechaFin }}</p>
      <p>Dosis: {{ indication.dosis }}</p>
      <p>Frecuencia: {{ indication.frecuencia }}</p>
    </div>
  </div>
</template>