<script setup>
import PatientCard from './PatientCard.vue'
import { usePatientsStore } from '../stores/patients'
const patientsStore = usePatientsStore()
</script>

<template>
  <div>
    <h1>Lista de pacientes</h1>
    <div class="patient-list">
      <PatientCard v-for="patient in patientsStore.patients"
        :key="patient.id"
        :id="patient.id"
        :name="patient.nombre"
        :Lastname="patient.apellidoPaterno"
        :SecondLastname="patient.apellidoMaterno"
        :age="patient.edad"
      />
    </div>
  </div>
</template>

<style scoped>
.patient-list {
  display: grid;
  gap: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  max-height: 400px;
  overflow-y: auto;
  scroll-behavior: smooth;
}

h1 {
  padding: 1rem;
  color: var(--color-heading);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>