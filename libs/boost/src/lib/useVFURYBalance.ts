import { useMemo } from 'react'

import { useNetworkAddresses } from '@apps/base/context/network'
import { useTokenSubscription } from '@apps/base/context/tokens'
import { BigDecimal } from '@apps/bigdecimal'

import type { EthereumMainnet } from '@apps/base/context/network'

export const useVFURYBalance = (): BigDecimal => {
  const networkAddresses = useNetworkAddresses<EthereumMainnet>()
  const stkFURY = useTokenSubscription(networkAddresses.ERC20.stkFURY)
  const stkBPT = useTokenSubscription(networkAddresses.ERC20.stkBPT)

  const balance = useMemo<BigDecimal | undefined>(() => {
    return stkFURY?.balance?.add(stkBPT?.balance ?? BigDecimal.ZERO)
  }, [stkBPT?.balance, stkFURY?.balance])

  return balance ?? BigDecimal.ZERO
}
