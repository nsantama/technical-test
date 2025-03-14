<script setup>
const props = defineProps(['specifications'])
import { useIndicationsStore } from '../stores/indications'

const indicationStore = useIndicationsStore()
</script>

<template>
  <div>
    <h2>Indicaciones del paciente</h2>
    <div class="patient-indication-list">
      <div class="patient-indication" v-for="indication in indicationStore.indications" :key="indication.id">
        <h3>{{ indication.indicacion }} {{ indication.frecuencia }}</h3>
        <p>{{ indication.fechaInicio }} / {{ indication.fechaFin }} | Dosis: {{ indication.Dosis }} | Frecuencia: {{  indication.frecuencia }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.patient-indication-list {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  max-height: 400px;
  overflow-y: auto;
  scroll-behavior: smooth;
}
h2 {
  padding: 1rem;
  color: var(--color-heading);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.patient-indication {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.patient-indication h3 {
  margin-bottom: 0.5rem;
  font-weight: bold;
}
</style>