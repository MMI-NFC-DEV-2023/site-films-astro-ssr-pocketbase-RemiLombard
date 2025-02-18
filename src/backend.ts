import PocketBase from 'pocketbase'
import type { TypedPocketBase } from './pocketbase-typegen'

export const pb = new PocketBase("https://astro-ssr.remilombard.fr/") as TypedPocketBase