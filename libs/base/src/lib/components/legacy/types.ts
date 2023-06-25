export type LegacyPoolType = 'uni' | 'bal' | 'vfury'

export type LegacyContract = {
  address: string
  name: string
  info: string
  poolType: LegacyPoolType
}
