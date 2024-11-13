import { envs } from "../env"

export function mode(batchs: any[]): number {
    if (batchs.length <= 0)
        return 0

    const freq: Record<number, number> = {}
    for (let index = 0; index < batchs.length; index++) {
        const batch = batchs[index]
        if (freq[batch.total]) {
            freq[batch.total] += 1
            continue
        }

        freq[batch.total] = 1
    }

    const totals = Object.keys(freq)
    const max = Math.max(...Object.values(freq))
    if (max === 1)
        return parseInt(totals[0])
    
    for (let index = 0; index < totals.length; index++) {
        if (freq[totals[index]] === max)
            return parseInt(totals[index])
    }
}

export function mean(batchs: any[]): number {
    if (batchs.length <= 0) 
        return 0
    return batchs.reduce((total, batch) => total+batch.total, 0)/batchs.length
}

export function median(batchs: any[]): number {
    if (batchs.length <= 0)
        return 0
    
    const sorted = batchs
        .map(batch => batch.total)
        .sort((n1, n2) => n1 - n2)

    if (sorted.length%2 === 0) {
        return (sorted[sorted.length/2]+sorted[sorted.length/2-1])/2
    }

    return sorted[Math.floor(sorted.length/2)]
}

export function isAnomally(expected: number, received: number): boolean {
    const PERCENTAGE_WANTED = envs.percentageWanted
    const addedPercentageOverExpected = PERCENTAGE_WANTED/100*expected+expected
    if (received > addedPercentageOverExpected) {
        return true
    }
    return false
}