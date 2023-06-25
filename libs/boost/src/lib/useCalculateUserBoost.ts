/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useMemo } from 'react'

import { calculateBoost, getPriceCoeff } from './boost'
import { useVFURYBalance } from './useVFURYBalance'

import type { BoostedVaultState } from '@apps/data-provider'

export const useCalculateUserBoost = (vault?: BoostedVaultState): number => {
  const vFURYBalance = useVFURYBalance()
  const rawBalance = vault?.account?.rawBalance

  const boost = useMemo<number>(() => {
    if (!vault) return 1

    const priceCoeff = getPriceCoeff(vault)

    return calculateBoost(priceCoeff, rawBalance, vFURYBalance)
  }, [rawBalance, vFURYBalance, vault])

  // Fallback to 1x multiplier
  return boost ?? 1
}
