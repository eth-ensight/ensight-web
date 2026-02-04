import * as React from 'react'
import { useConfig, useConnection, useEnsAvatar, useEnsName } from 'wagmi'
import { disconnect } from 'wagmi/actions'

export function Connection() {
  const config = useConfig()
  const { address, status } = useConnection() // v3 replacement for useAccount :contentReference[oaicite:2]{index=2}

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
        onClick={() => disconnect(config)} // actions come from wagmi/actions :contentReference[oaicite:3]{index=3}
        disabled={!isConnected}
      >
        Disconnect
      </button>
    </div>
  )
}
