/// <reference types="react-scripts" />
declare module "fake-indexeddb"
declare module "fake-indexeddb/lib/FDBKeyRange"

// Type definition for a `.reduce` method
type ReducerHOF<A = any[], C = any> = (
	accumulator: A,
	current: C,
	index: number
) => A

// Type definition for a `.map` method
type MapHOF<C = any, R = any[]> = (current: C, index: number) => R

// Type definition for a `.filter` method
type FilterHOF<C = any> = (current: C, index: number) => boolean
