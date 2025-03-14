<script setup>
import PatientList from './components/PatientList.vue'
import PatientSpecificationList from './components/PatientSpecificationList.vue'
import { usePatientsStore } from './stores/patients'
import { ref } from 'vue'
const count = ref(0)
const patientsStore = usePatientsStore()


const fetchPatients = () => {
  console.log('Fetching patients...');
  patientsStore.fetch();
  count.value = patientsStore.patients.length;
}

</script>

<template>
  <header>
    <div class="wrapper">
      <p>Posibles instrucciones para la app</p>
    </div>
  </header>
  
  <main>
    <button @click="fetchPatients">Listar pacientes {{ count }}</button>
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
