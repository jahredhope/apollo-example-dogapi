import { GQLResolver } from "../generated-schema-types";

export default {
  Query: {
    cats(_parent, _args) {
      // Why would you want cats?
      return [
        {
          imageUrl: "no"
        }
      ];
    }
  }
} as GQLResolver;
