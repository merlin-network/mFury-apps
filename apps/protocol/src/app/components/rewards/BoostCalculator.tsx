import { useMemo } from 'react'

import { AssetInput } from '@apps/base/components/forms'
import { useTokenSubscription } from '@apps/base/context/tokens'
import { BigDecimal } from '@apps/bigdecimal'
import { calculateBoost, calculateVFURYForMaxBoost, getPriceCoeff, useVFURYBalance } from '@apps/boost'
import { DifferentialCountup } from '@apps/dumb-components'
import { Button, InfoMessage, Widget } from '@apps/dumb-components'
import { useBigDecimalInput } from '@apps/hooks'
// @ts-ignore
import { ReactComponent as ArrowsSvg } from '@apps/icons/double-arrow.svg'
// @ts-ignore
import { ReactComponent as GovSvg } from '@apps/icons/governance-icon.svg'
import { ViewportWidth } from '@apps/theme'
import styled from 'styled-components'

import type { BoostedVaultState } from '@apps/data-provider'
import type { FC } from 'react'

const GOVERNANCE_URL = 'https://staking.mstable.app/#/stake'

const BoostCountup = styled(DifferentialCountup)`
  font-weight: normal;
  font-size: 1.5rem;
`

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  min-width: 11.25rem;
  width: 100%;

  svg {
    width: 1rem;
    margin-right: 0.5rem;
  }

  > .preview svg {
    path,
    rect {
      fill: ${({ theme }) => theme.color.body};
    }
  }

  > .gov svg {
    path,
    rect {
      fill: ${({ theme }) => theme.color.white};
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: ${ViewportWidth.l}) {
    width: auto;
  }
`

const MultiplierBox = styled.div`
  border: 1px solid ${({ theme }) => theme.color.defaultBorder};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  width: 100%;
  justify-content: space-between;

  > div {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    > span:first-child {
      font-size: 1.125rem;
      font-weight: 500;
      color: ${({ theme }) => theme.color.body};
    }

    @media (min-width: ${ViewportWidth.m}) {
      > span:first-child {
        margin-right: 1rem;
      }
    }

    @media (min-width: ${ViewportWidth.l}) {
      max-width: 12.5rem;
      margin-right: 2rem;
      flex-direction: column;

      > span:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`

const CalculatorInputs = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  > div:first-child {
    margin-bottom: 0.5rem;
  }

  @media (min-width: ${ViewportWidth.m}) {
    flex-basis: 55%;
  }

  @media (min-width: ${ViewportWidth.l}) {
    flex-basis: 45%;
  }
`

const Equal = styled.div`
  display: none;

  @media (min-width: ${ViewportWidth.l}) {
    margin-right: 1rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.bodyAccent};
    display: inherit;
  }
`

const BoostAndActions = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  > *:first-child {
    margin-bottom: 0.5rem;
  }
`

const MultiplierContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;

  @media (min-width: ${ViewportWidth.l}) {
    margin-bottom: 0;
  }
`

const CalculatorActions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${ViewportWidth.m}) {
    flex-basis: 45%;
  }

  @media (min-width: ${ViewportWidth.l}) {
    justify-content: flex-end;
    flex-direction: row;
    flex-basis: 55%;
  }
`

const Container = styled(Widget)`
  gap: 1rem;

  > :last-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  > :last-child > div {
    gap: 2rem;
    display: flex;
    flex-direction: column;

    @media (min-width: ${ViewportWidth.m}) {
      flex-direction: row;
    }
  }
`

export const BoostCalculator: FC<{
  vault: BoostedVaultState
  apy?: number
  onClick?: () => void
  noBackButton?: boolean
}> = ({ apy, noBackButton, onClick, vault }) => {
  const {
    stakingToken: { address: inputAddress },
    isImusd,
  } = vault
  const vFURYBalance = useVFURYBalance()

  const inputToken = useTokenSubscription(inputAddress)
  const inputBalance = inputToken?.balance

  const defaultInputValue = isImusd ? BigDecimal.fromSimple(100) : BigDecimal.ONE

  const [vFURYValue, vFURYFormValue, setVfury] = useBigDecimalInput(vFURYBalance)
  const [inputValue, inputFormValue, setInput] = useBigDecimalInput(inputBalance?.simpleRounded !== 0 ? inputBalance : defaultInputValue)

  const boost = useMemo(() => {
    const priceCoeff = getPriceCoeff(vault)
    return {
      fromBalance: calculateBoost(priceCoeff, inputBalance, vFURYBalance),
      fromInputs: calculateBoost(priceCoeff, inputValue, vFURYValue),
    }
  }, [inputBalance, vFURYBalance, vault, inputValue, vFURYValue])

  return (
    <Container
      title="Earning Power Calculator"
      tooltip="Calculate your optimal FURY rewards multiplier"
      headerContent={
        noBackButton ? null : (
          <Button scale={0.7} onClick={onClick}>
            Back
          </Button>
        )
      }
    >
      <InfoMessage>
        <span>Use the calculator below to find your optimal FURY rewards multiplier</span>
      </InfoMessage>
      <div>
        <CalculatorInputs>
          <AssetInput
            addressOptions={[
              {
                address: 'vfury',
                balance: vFURYBalance,
                symbol: 'vFURY',
                custom: true,
              },
            ]}
            address={'vfury'}
            addressDisabled
            formValue={vFURYFormValue}
            handleSetAmount={setVfury}
          />
          <AssetInput address={inputAddress} addressDisabled formValue={inputFormValue} handleSetAmount={setInput} />
        </CalculatorInputs>
        <CalculatorActions>
          <MultiplierContainer>
            <Equal>=</Equal>
            <MultiplierBox>
              <div>
                <span>Multiplier</span>
                <BoostCountup end={boost.fromInputs} prev={boost.fromBalance} suffix="x" />
              </div>
              {apy && (
                <div>
                  <span>APY</span>
                  <BoostCountup end={apy * boost.fromInputs} prev={apy * boost.fromBalance} suffix="%" />
                </div>
              )}
            </MultiplierBox>
          </MultiplierContainer>
          <BoostAndActions>
            <StyledButton
              onClick={() => {
                if (inputValue) {
                  const priceCoeff = getPriceCoeff(vault)
                  const vFURYRequired = calculateVFURYForMaxBoost(inputValue, priceCoeff)
                  setVfury(vFURYRequired?.toFixed(2))
                }
              }}
            >
              <div className="preview">
                <ArrowsSvg />
                Preview Max
              </div>
            </StyledButton>
            <StyledButton
              highlighted
              onClick={() => {
                window.open(GOVERNANCE_URL)
              }}
            >
              <div className="gov">
                <GovSvg />
                Get vFURY
              </div>
            </StyledButton>
          </BoostAndActions>
        </CalculatorActions>
      </div>
    </Container>
  )
}
