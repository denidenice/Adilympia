import { cn } from '../../util'

describe('cn should join class names', () => {
    it('cn should join var args class names', () => {
        expect(cn('foo', 'bar', 'baz')).toEqual('foo bar baz')
    })

    it('cn should join an array of class names', () => {
        expect(cn(...['foo', 'bar', 'baz'])).toEqual('foo bar baz')
    })
})
