import { defineStore } from 'pinia'

export const useIndicationsStore = defineStore('indications', {
  state: () => {
    return { indications: [] }
  },

  actions: {
    // fetch?
    fetch(patientId) {
      console.log('Received patientId:', patientId);
      const newData = [
        {
          indicacion: "Tomar medicamento A cada 8 horas",
          fechaInicio: "2023-10-01",
          fechaFin: "2023-10-07",
          dosis: "1 tableta",
          frecuencia: "cada 8 horas"
        },
        {
          indicacion: "Tomar medicamento B cada 12 horas",
          fechaInicio: "2023-10-01",
          fechaFin: "2023-10-07",
          dosis: "1 tableta",
          frecuencia: "cada 12 horas"
        }
      ];
      this.indications = newData;
    },
  },
})