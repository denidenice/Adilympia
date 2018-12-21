export const noOp = () => {
    /* no-op */
}

/**
 * Convenience method to join multiple class names.
 *
 * Example Usage:
 *
 * `cn('foo', 'bar', 'baz')`
 * `cn(...['foo', 'bar', 'baz'])`
 *
 */
export const cn = (...classNames: string[]) => classNames.join(' ')
