import { List as ImmutableList } from 'immutable'

export type PlayerId = string

export const PlayerIdNone: PlayerId = 'n/a' as PlayerId

export const BedNone: Bed = {
    id: PlayerIdNone,
    displayName: '',
}

export type Bed = Readonly<{
    id: PlayerId
    displayName: string
}>

export type Players = Readonly<{
    allBeds: ImmutableList<Bed>
}>
