/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Films = "Films",
	Personnes = "Personnes",
	Roles = "Roles",
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type FilmsRecord = {
	created?: IsoDateString
	dateSortie?: IsoDateString
	duree?: number
	id: string
	langue?: string
	producteur?: RecordIdString
	roles?: RecordIdString[]
	scenaristes?: RecordIdString[]
	synopsis?: string
	titre?: string
	updated?: IsoDateString
}

export enum PersonnesNationaliteOptions {
	"FR" = "FR",
	"US" = "US",
	"UK" = "UK",
	"CA" = "CA",
}

export enum PersonnesProfessionOptions {
	"acteur" = "acteur",
	"scenariste" = "scenariste",
	"realisateur" = "realisateur",
	"producteur" = "producteur",
}
export type PersonnesRecord = {
	created?: IsoDateString
	dateDeces?: IsoDateString
	dateNaissance?: IsoDateString
	id: string
	lieuNaissance?: string
	nationalite?: PersonnesNationaliteOptions
	nom?: string
	prenom?: string
	profession?: PersonnesProfessionOptions[]
	updated?: IsoDateString
}

export type RolesRecord = {
	acteur?: RecordIdString
	created?: IsoDateString
	id: string
	nomRole?: string
	updated?: IsoDateString
}

export type AuthoriginsRecord = {
	collectionRef: string
	created?: IsoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated?: IsoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated?: IsoDateString
}

export type MfasRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	method: string
	recordRef: string
	updated?: IsoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated?: IsoDateString
}

export type SuperusersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export type UsersRecord = {
	avatar?: string
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	name?: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type FilmsResponse<Texpand = unknown> = Required<FilmsRecord> & BaseSystemFields<Texpand>
export type PersonnesResponse<Texpand = unknown> = Required<PersonnesRecord> & BaseSystemFields<Texpand>
export type RolesResponse<Texpand = unknown> = Required<RolesRecord> & BaseSystemFields<Texpand>
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Films: FilmsRecord
	Personnes: PersonnesRecord
	Roles: RolesRecord
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Films: FilmsResponse
	Personnes: PersonnesResponse
	Roles: RolesResponse
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Films'): RecordService<FilmsResponse>
	collection(idOrName: 'Personnes'): RecordService<PersonnesResponse>
	collection(idOrName: 'Roles'): RecordService<RolesResponse>
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
