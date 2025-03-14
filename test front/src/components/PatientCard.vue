<script setup>
import { useIndicationsStore } from '../stores/indications'
const props = defineProps(['id', 'name', 'Lastname', 'SecondLastname', 'age'])
const indicationStore = useIndicationsStore()
const sendId = () => {
  indicationStore.fetch(props.id);
};
</script>

<template>
  <div class="patient-card">
    <button @click="sendId">Especificaciones</button>
    <div>
      <h2>{{ name }} {{ Lastname }} {{ SecondLastname }}</h2>
      <p>{{ age }} años</p>
    </div>
  </div>
</template>

<style scoped>
.patient-card {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
}

.patient-card button {
  padding: 0.5rem 1rem;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>