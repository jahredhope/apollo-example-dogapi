/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLQuery {
  _empty?: string;
  cats?: Array<GQLCat>;
  breed?: GQLBreed;
  breeds?: Array<GQLBreed>;
  dogs?: Array<GQLDog>;
}

/**
 * Why would you want cats?
 */
export interface GQLCat {
  imageUrl: string;
}

export interface GQLBreed {
  name: string;
  dogs?: Array<GQLDog>;
}

export interface GQLDog {
  breedId: string;
  breed?: GQLBreed;
  imageUrl: string;
}

export interface GQLMutation {
  _empty?: string;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  Query?: GQLQueryTypeResolver;
  Cat?: GQLCatTypeResolver;
  Breed?: GQLBreedTypeResolver;
  Dog?: GQLDogTypeResolver;
  Mutation?: GQLMutationTypeResolver;
}
export interface GQLQueryTypeResolver<TParent = undefined> {
  _empty?: QueryTo_emptyResolver<TParent>;
  cats?: QueryToCatsResolver<TParent>;
  breed?: QueryToBreedResolver<TParent>;
  breeds?: QueryToBreedsResolver<TParent>;
  dogs?: QueryToDogsResolver<TParent>;
}

export interface QueryTo_emptyResolver<TParent = undefined, TResult = string | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface QueryToCatsResolver<TParent = undefined, TResult = Array<GQLCat> | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface QueryToBreedArgs {
  breed: string;
}
export interface QueryToBreedResolver<TParent = undefined, TResult = GQLBreed | null> {
  (parent: TParent, args: QueryToBreedArgs, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface QueryToBreedsArgs {
  limit?: number;
}
export interface QueryToBreedsResolver<TParent = undefined, TResult = Array<GQLBreed> | null> {
  (parent: TParent, args: QueryToBreedsArgs, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface QueryToDogsArgs {
  breed: string;
  limit?: number;
}
export interface QueryToDogsResolver<TParent = undefined, TResult = Array<GQLDog> | null> {
  (parent: TParent, args: QueryToDogsArgs, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface GQLCatTypeResolver<TParent = GQLCat> {
  imageUrl?: CatToImageUrlResolver<TParent>;
}

export interface CatToImageUrlResolver<TParent = GQLCat, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface GQLBreedTypeResolver<TParent = GQLBreed> {
  name?: BreedToNameResolver<TParent>;
  dogs?: BreedToDogsResolver<TParent>;
}

export interface BreedToNameResolver<TParent = GQLBreed, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface BreedToDogsArgs {
  limit?: number;
}
export interface BreedToDogsResolver<TParent = GQLBreed, TResult = Array<GQLDog> | null> {
  (parent: TParent, args: BreedToDogsArgs, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface GQLDogTypeResolver<TParent = GQLDog> {
  breedId?: DogToBreedIdResolver<TParent>;
  breed?: DogToBreedResolver<TParent>;
  imageUrl?: DogToImageUrlResolver<TParent>;
}

export interface DogToBreedIdResolver<TParent = GQLDog, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface DogToBreedResolver<TParent = GQLDog, TResult = GQLBreed | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface DogToImageUrlResolver<TParent = GQLDog, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface GQLMutationTypeResolver<TParent = undefined> {
  _empty?: MutationTo_emptyResolver<TParent>;
}

export interface MutationTo_emptyResolver<TParent = undefined, TResult = string | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}
