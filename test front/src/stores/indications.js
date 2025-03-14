import { defineStore } from 'pinia'
import queryString  from 'query-string'

export const useIndicationsStore = defineStore('indications', {
  state: () => {
    return { indications: [] }
  },

  actions: {
    fetch(patientId) {
      try {
        fetch('http://127.0.0.1:5001/technical-test-hicapps/us-central1/listaIndicacionesPaciente?' + queryString.stringify({ patientId }))
          .then(response => response.json())
          .then(data => {
            const newData = [];
            for (let indication in data) {
              newData.push({
                id: indication,
                ...data[indication]
              });
            }
            this.indications = newData;
          });
      } catch (error) {
        console.error('Error fetching indications', error);
      }
    },
  },
})