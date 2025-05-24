import type { ProgramTemplate } from '@/types'

export const dummyPrograms: ProgramTemplate[] = [
  {
    id: 'program-001',
    clientId: 'client-001',
    circuits: [
      {
        circuitNumber: 1,
        exercises: [
          { name: 'Goblet Squat', sets: 4, reps: 10 },
          { name: 'Incline Row', sets: 4, reps: 12 },
        ],
      },
      {
        circuitNumber: 2,
        exercises: [
          { name: 'Deadlift', sets: 3, reps: 8 },
          { name: 'Plank', sets: 3, reps: '30s' },
        ],
      },
      {
        circuitNumber: 3,
        exercises: [
          { name: 'Reverse Lunge', sets: 3, reps: 10 },
          { name: 'KB Swing', sets: 3, reps: 15 },
          { name: 'Lat Pulldown', sets: 3, reps: 12 },
        ],
      },
    ],
  },
  {
    id: 'program-002',
    clientId: 'client-002',
    circuits: [
      {
        circuitNumber: 1,
        exercises: [
          { name: 'Step-up', sets: 4, reps: 10 },
          { name: 'Push-up', sets: 4, reps: 12 },
        ],
      },
      {
        circuitNumber: 2,
        exercises: [
          { name: 'Hip Thrust', sets: 3, reps: 10 },
          { name: 'Side Plank', sets: 3, reps: '30s' },
        ],
      },
      {
        circuitNumber: 3,
        exercises: [
          { name: 'Split Squat', sets: 3, reps: 8 },
          { name: 'Cable Row', sets: 3, reps: 12 },
          { name: 'Bike Sprint', sets: 3, reps: '20s' },
        ],
      },
    ],
  },
]
