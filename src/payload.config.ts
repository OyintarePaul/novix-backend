import { buildConfig } from "payload/config";
import path from "path";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import Users from "./collections/Users";
import Apartments from "./collections/Apartments";
import Lodges from "./collections/Lodges";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Apartments, Lodges],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
});
