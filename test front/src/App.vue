<script setup>
import PatientList from './components/PatientList.vue'
import PatientSpecificationList from './components/PatientSpecificationList.vue'
import { usePatientsStore } from './stores/patients'

const patientsStore = usePatientsStore()
const loadDatabase = () => {
  try {
    fetch('http://localhost:5001/technical-test-hicapps/us-central1/populateDatabase')
  } catch (error) {
    console.error('error populating database', error)
  }
}
</script>

<template>
  <header>
    <h1>App test tecnico para Hicapps</h1>
    <p>
      Se necesita estar corriendo el emulador de firebase usando el comando 'firebase emulators:start', para luego cargar la base de datos con el boton correspondiente.
    </p>
    <div class="wrapper">
      <button @click="patientsStore.fetch">Listar pacientes</button>
      <button @click="loadDatabase">Cargar base de datos</button>
    </div>
  </header>
  
  <main>
    <PatientList/>
    <PatientSpecificationList/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

main {
  padding: var(--section-gap);
  padding-top: calc(var(--section-gap) / 3);
  padding-bottom: calc(var(--section-gap) / 3);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--section-gap);
}

@media (min-width: 1024px) {
  header {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    padding-left: calc(var(--section-gap) / 2);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    color: var(--color-heading)
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    padding-bottom: 1rem;
  }

  header button {
    padding: 0.5rem 1rem;
    background-color: var(--color-background-mute);
    color: var(--color-text);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
