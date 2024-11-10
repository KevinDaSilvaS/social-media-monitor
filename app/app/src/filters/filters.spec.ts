import { isAnomally, mean, median, mode } from './filters'

describe('filters test suite', () => {
    describe('mode function', () => {
        it('should calculate the correct mode', () => {
            const batchs = [ 
                { total: 10 }, 
                { total: 5 }, 
                { total: 8 }, 
                { total: 3 }, 
                { total: 5 } 
            ]

            expect(mode(batchs)).toBe(5)
        })

        it('should calculate the mode when values are unique', () => {
            const batchs = [ 
                { total: 10 }, 
                { total: 5 }, 
                { total: 8 }, 
                { total: 3 }
            ]

            expect(mode(batchs)).toBe(3)
        })

        it('should calculate the mode when batchs are empty', () => {
            const batchs = []
            expect(mode(batchs)).toBe(0)
        })
    })

    describe('mean function', () => {
        it('should calculate the correct mean', () => {
            const batchs = [ 
                { total: 10 }, 
                { total: 5 }, 
                { total: 8 }, 
                { total: 3 }, 
                { total: 5 } 
            ]

            expect(mean(batchs)).toBe(6.2)
        })

        it('should calculate the mean when batch list is empty', () => {
            const batchs = []
            expect(mean(batchs)).toBe(0)
        })
    })

    describe('median function', () => {
        it('should calculate the correct median', () => {
            const batchs = [ 
                { total: 10 }, 
                { total: 5 }, 
                { total: 8 }, 
                { total: 3 }, 
                { total: 5 } 
            ]

            expect(median(batchs)).toBe(5)
        })

        it('should calculate the correct median when batch length is even', () => {
            const batchs = [ 
                { total: 10 }, 
                { total: 5 }, 
                { total: 8 }, 
                { total: 2 }, 
                { total: 3 }, 
                { total: 5 } 
            ]

            expect(median(batchs)).toBe(5)
        })

        it('should calculate the median when batch list is empty', () => {
            const batchs = []
            expect(median(batchs)).toBe(0)
        })
    })

    describe('isAnomally function', () => {
        it('should return true', () => {
            expect(isAnomally(10, 50)).toBe(true)
        })

        it('should return false', () => {
            expect(isAnomally(10, 11)).toBe(false)
        })
    })
})