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
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface ArbBLSInterface extends ethers.utils.Interface {
  functions: {
    'getPublicKey(address)': FunctionFragment
    'register(uint256,uint256,uint256,uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'getPublicKey', values: [string]): string
  encodeFunctionData(
    functionFragment: 'register',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string

  decodeFunctionResult(
    functionFragment: 'getPublicKey',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'register', data: BytesLike): Result

  events: {}
}

export class ArbBLS extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ArbBLSInterface

  functions: {
    getPublicKey(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>

    'getPublicKey(address)'(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>

    register(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'register(uint256,uint256,uint256,uint256)'(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  getPublicKey(
    addr: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>

  'getPublicKey(address)'(
    addr: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>

  register(
    x0: BigNumberish,
    x1: BigNumberish,
    y0: BigNumberish,
    y1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'register(uint256,uint256,uint256,uint256)'(
    x0: BigNumberish,
    x1: BigNumberish,
    y0: BigNumberish,
    y1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    getPublicKey(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>

    'getPublicKey(address)'(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>

    register(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'register(uint256,uint256,uint256,uint256)'(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    getPublicKey(addr: string, overrides?: CallOverrides): Promise<BigNumber>

    'getPublicKey(address)'(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    register(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'register(uint256,uint256,uint256,uint256)'(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    getPublicKey(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getPublicKey(address)'(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    register(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'register(uint256,uint256,uint256,uint256)'(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
