export type Client = {
    id: string
    name: string
    notes?: string
    programId: string
}

export type Exercise = {
    name: string
    sets: number
    reps: number | string // e.g 12 of "30s" for planks
}

export type ProgramTemplate = {
  id: string
  clientId: string
  circuits: {
    circuitNumber: 1 | 2 | 3
    exercises: Exercise[]
  }[]
}

export type WorkoutLog = {
  date: string // ISO format
  clientId: string
  entries: {
    exercise: string
    set: number
    weight: number | null
    reps: number | string
    notes?: string
  }[]
}