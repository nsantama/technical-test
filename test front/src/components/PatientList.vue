<script setup>
import PatientCard from './PatientCard.vue'
import { usePatientsStore } from '../stores/patients'
const patientsStore = usePatientsStore()
</script>

<template>
  <div class="patient-list">
    <h1>Lista de pacientes</h1>
    <PatientCard v-for="patient in patientsStore.patients"
      :key="patient.patientId"
      :patientId="patient.patientId"
      :patientName="patient.patientName"
      :patientLastName="patient.patientLastName"
      :patientAge="patient.patientAge"
    />
  </div>
</template>