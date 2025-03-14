<script setup>
import { useIndicationsStore } from '../stores/indications'
const props = defineProps(['patientId', 'patientName', 'patientLastName', 'patientAge'])
const indicationStore = useIndicationsStore()
const sendId = () => {
  console.log("sending...");
  indicationStore.fetch(props.patientId);
};
</script>

<template>
  <div class="patient-card">
    <button @click="sendId">Ver especificaciones</button>
    <h2>{{ patientName }} {{ patientLastName }}</h2>
    <p>{{ patientAge }} años</p>
  </div>
</template>