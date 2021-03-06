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
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface BuddyDeployerInterface extends ethers.utils.Interface {
  functions: {
    'executeBuddyDeploy(bytes)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'executeBuddyDeploy',
    values: [BytesLike]
  ): string

  decodeFunctionResult(
    functionFragment: 'executeBuddyDeploy',
    data: BytesLike
  ): Result

  events: {
    'Deployed(address,address,uint256,bool)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Deployed'): EventFragment
}

export class BuddyDeployer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: BuddyDeployerInterface

  functions: {
    executeBuddyDeploy(
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'executeBuddyDeploy(bytes)'(
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>
  }

  executeBuddyDeploy(
    contractInitCode: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'executeBuddyDeploy(bytes)'(
    contractInitCode: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  callStatic: {
    executeBuddyDeploy(
      contractInitCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'executeBuddyDeploy(bytes)'(
      contractInitCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    Deployed(
      _sender: string | null,
      _contract: string | null,
      withdrawalId: BigNumberish | null,
      _success: null
    ): EventFilter
  }

  estimateGas: {
    executeBuddyDeploy(
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'executeBuddyDeploy(bytes)'(
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    executeBuddyDeploy(
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'executeBuddyDeploy(bytes)'(
      contractInitCode: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>
  }
}
