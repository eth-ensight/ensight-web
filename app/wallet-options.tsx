'use client'

import { useConfig, useConnectors } from 'wagmi'
import { connect } from 'wagmi/actions'

export function WalletOptions() {
  const config = useConfig()
  const connectors = useConnectors()

  return connectors.map((connector) => (
    <button
      key={connector.uid}
      onClick={() => connect(config, { connector })}
    >
      {connector.name}
    </button>
  ))
}
