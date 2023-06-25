import type { LegacyPoolType } from './types'

export const getTokenIcon = (type: LegacyPoolType) => ({ uni: 'UNI-V2', bal: 'BAL', vfury: 'FURY' }[type])

export const getColor = (type: LegacyPoolType) => ({ uni: '#FF007A', bal: '#CFD4FF', vfury: '#CFD4FF' }[type])
