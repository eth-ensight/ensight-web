'use client'

import { useConfig, useConnection, useEnsAvatar, useEnsName } from 'wagmi'
import { disconnect } from 'wagmi/actions'

export function Connection() {
  const config = useConfig()
  const { address, status } = useConnection()

  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({
    name: ensName ?? undefined,
  })

  const isConnected = status === 'connected'

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {isConnected && address && (
        <div>{ensName ? `${ensName} (${address})` : address}</div>
      )}

      <button
        onClick={() => disconnect(config)}
        disabled={!isConnected}
      >
        Disconnect
      </button>
    </div>
  )
}
