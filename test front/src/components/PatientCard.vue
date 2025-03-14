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
    <button @click="sendId">Ver especificaciones</button>
    <h2>{{ name }} {{ Lastname }} {{ SecondLastname }}</h2>
    <p>{{ age }} años</p>
  </div>
</template>