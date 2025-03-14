import { defineStore } from 'pinia'

export const usePatientsStore = defineStore('patients', {
  state: () => {
    return { patients: [] }
  },
  
  actions: {
    fetch() {
      try {
        fetch('http://127.0.0.1:5001/technical-test-hicapps/us-central1/listaPacientes')
          .then(response => response.json())
          .then(data => {
            const newData = [];
            for (let patient in data) {
              newData.push({
                id: patient,
                ...data[patient]
              });
            }
            this.patients = newData;
          });
      } catch (error) {
        console.error('Error fetching patients', error);
      }
    },
  },
})