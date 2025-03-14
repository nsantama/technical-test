<script setup>
import PatientList from './components/PatientList.vue'
import PatientSpecificationList from './components/PatientSpecificationList.vue'
import { usePatientsStore } from './stores/patients'

const patientsStore = usePatientsStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <p>Posibles instrucciones para la app</p>
    </div>
  </header>
  
  <main>
    <button @click="patientsStore.fetch">Listar pacientes</button>
    <PatientList/>
    <PatientSpecificationList/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
