import { defineStore } from 'pinia'

export const usePatientsStore = defineStore('patients', {
  state: () => {
    return { patients: [] }
  },
  
  actions: {
    fetch() {
    const newData = [
      { patientId: '1', patientName: 'Juan', patientLastName: 'Perez', patientAge: 30 },
      { patientId: '2', patientName: 'Maria', patientLastName: 'Gomez', patientAge: 25 },
      { patientId: '3', patientName: 'Pedro', patientLastName: 'Garcia', patientAge: 40 },
      { patientId: '4', patientName: 'Ana', patientLastName: 'Jimenez', patientAge: 35 },
      { patientId: '5', patientName: 'Luis', patientLastName: 'Rodriguez', patientAge: 28 },
    ];
      this.patients = newData;
    },
  },
})