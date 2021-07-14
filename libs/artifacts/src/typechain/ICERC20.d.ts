/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ICERC20Interface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "balanceOfUnderlying(address)": FunctionFragment;
    "exchangeRateStored()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "redeemUnderlying(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOfUnderlying",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeRateStored",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "redeemUnderlying",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRateStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemUnderlying",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICERC20 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ICERC20Interface;

  functions: {
    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOfUnderlying(
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchangeRateStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      mintAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfUnderlying(
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    mintAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemUnderlying(
    redeemAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfUnderlying(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfUnderlying(
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfUnderlying(
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchangeRateStored(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      mintAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}