import { useEffect, useMemo, useState } from 'react'
import BlockCard from '../components/BlockCard'
import { sha256 } from '../utils/hash'

const INITIAL_BLOCK_1 = {
  data: 'Arbitrum rollup batch #1',
  nonce: 0,
  previousHash: 'GENESIS',
  hash: 'Calculating...',
  valid: false,
  mining: false,
}

const INITIAL_BLOCK_2 = {
  data: 'User transaction settled',
  nonce: 0,
  hash: '',
  valid: false,
  mining: false,
}

function Simulator() {
  const [block1, setBlock1] = useState(INITIAL_BLOCK_1)
  const [block2, setBlock2] = useState(INITIAL_BLOCK_2)

  const block2PreviousHash = useMemo(
    () => (block1.hash && block1.hash !== 'Calculating...' ? block1.hash : 'Waiting for Block 1 hash'),
    [block1.hash],
  )

  useEffect(() => {
    let cancelled = false

    const syncBlock1Hash = async () => {
      const hash = await sha256(`${block1.data}${block1.nonce}${block1.previousHash}`)
      const valid = hash.startsWith('00')

      if (!cancelled) {
        setBlock1((prev) => (prev.hash === hash && prev.valid === valid ? prev : { ...prev, hash, valid }))
      }
    }

    syncBlock1Hash()

    return () => {
      cancelled = true
    }
  }, [block1.data, block1.nonce, block1.previousHash])

  useEffect(() => {
    let cancelled = false

    const initializeBlock2Hash = async () => {
      if (block2.hash || !block1.hash || block1.hash === 'Calculating...') return

      const hash = await sha256(`${block2.data}${block2.nonce}${block1.hash}`)
      if (!cancelled) {
        setBlock2((prev) => ({ ...prev, hash }))
      }
    }

    initializeBlock2Hash()

    return () => {
      cancelled = true
    }
  }, [block1.hash, block2.data, block2.nonce, block2.hash])

  useEffect(() => {
    let cancelled = false

    const validateBlock2 = async () => {
      if (!block1.hash || block1.hash === 'Calculating...') {
        setBlock2((prev) => ({ ...prev, valid: false }))
        return
      }

      const expected = await sha256(`${block2.data}${block2.nonce}${block2PreviousHash}`)
      const valid = block2.hash === expected && block2.hash.startsWith('00') && block2PreviousHash === block1.hash

      if (!cancelled) {
        setBlock2((prev) => (prev.valid === valid ? prev : { ...prev, valid }))
      }
    }

    validateBlock2()

    return () => {
      cancelled = true
    }
  }, [block1.hash, block2.data, block2.nonce, block2.hash, block2PreviousHash])

  const mineBlock = async (blockNumber) => {
    if (blockNumber === 1) {
      if (block1.mining) return
      setBlock1((prev) => ({ ...prev, mining: true }))

      let nonce = block1.nonce

      while (true) {
        const hash = await sha256(`${block1.data}${nonce}${block1.previousHash}`)
        setBlock1((prev) => ({ ...prev, nonce, hash }))

        if (hash.startsWith('00')) {
          break
        }

        nonce += 1

        // Yield to the event loop so nonce updates are visible during mining.
        if (nonce % 20 === 0) {
          await new Promise((resolve) => setTimeout(resolve, 0))
        }
      }

      setBlock1((prev) => ({ ...prev, mining: false }))
      return
    }

    if (block2.mining) return
    setBlock2((prev) => ({ ...prev, mining: true }))

    let nonce = block2.nonce

    while (true) {
      const hash = await sha256(`${block2.data}${nonce}${block2PreviousHash}`)
      setBlock2((prev) => ({ ...prev, nonce, hash }))

      if (hash.startsWith('00')) {
        break
      }

      nonce += 1

      // Yield to the event loop so nonce updates are visible during mining.
      if (nonce % 20 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 0))
      }
    }

    setBlock2((prev) => ({ ...prev, mining: false }))
  }

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Interactive Block Simulator</h1>
        <p className="mt-2 text-slate-300">
          Hash formula: <span className="font-mono text-cyan-300">sha256(data + nonce + previousHash)</span>. Mine each
          block until the hash starts with <span className="font-mono text-cyan-300">00</span>.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <BlockCard
          title="Block 1"
          data={block1.data}
          nonce={block1.nonce}
          previousHash={block1.previousHash}
          hash={block1.hash}
          isValid={block1.valid}
          isMining={block1.mining}
          onDataChange={(value) => setBlock1((prev) => ({ ...prev, data: value }))}
          onNonceChange={(value) => setBlock1((prev) => ({ ...prev, nonce: value }))}
          onMine={() => mineBlock(1)}
        />

        <BlockCard
          title="Block 2"
          data={block2.data}
          nonce={block2.nonce}
          previousHash={block2PreviousHash}
          hash={block2.hash}
          isValid={block2.valid}
          isMining={block2.mining}
          onDataChange={(value) => setBlock2((prev) => ({ ...prev, data: value }))}
          onNonceChange={(value) => setBlock2((prev) => ({ ...prev, nonce: value }))}
          onMine={() => mineBlock(2)}
        />
      </section>
    </div>
  )
}

export default Simulator
