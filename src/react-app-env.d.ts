/// <reference types="react-scripts" />
declare module "fake-indexeddb"
declare module "fake-indexeddb/lib/FDBKeyRange"
declare module "whatwg-fetch"

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

type MathHOF = (n: number) => number

type NumToStrHOF = (n: number) => string

type StrToStrHOF = (s: string) => string

type StrToNumHOF = (s: string) => number

type InputChange = ChangeEvent<HTMLInputElement>

type MouseButtonEvent = MouseEvent<HTMLButtonElement>

// #region Extend Dexie interface
// declare module 'dexie' {
//   // Extend methods on db
//   interface Dexie {
//     export(options?: ExportOptions): Promise<Blob>;
//     import(blob: Blob, options?: ImportOptions): Promise<void>;
//   }
//   interface DexieConstructor {
//     import(blob: Blob, options?: StaticImportOptions): Promise<Dexie>;
//   }
// }
//#endregion
