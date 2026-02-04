'use client'

import { WalletOptions } from './wallet-options'
import { Connection } from './wallet-connection'

export default function Page() {
  return (
    <main>
      <WalletOptions />
      <Connection />
    </main>
  )
}
