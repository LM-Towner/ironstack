import type { WorkoutLog } from '@/types'

export const dummyLogs: WorkoutLog[] = [
  {
    date: '2025-05-20',
    clientId: 'client-001',
    entries: [
      { exercise: 'Goblet Squat', set: 1, weight: 40, reps: 10 },
      { exercise: 'Goblet Squat', set: 2, weight: 40, reps: 10 },
      { exercise: 'Incline Row', set: 1, weight: 30, reps: 12 },
      { exercise: 'Incline Row', set: 2, weight: 30, reps: 12 },
    ],
  },
  {
    date: '2025-05-20',
    clientId: 'client-002',
    entries: [
      { exercise: 'Step-up', set: 1, weight: 20, reps: 10 },
      { exercise: 'Push-up', set: 1, weight: null, reps: 12 },
    ],
  },
]
