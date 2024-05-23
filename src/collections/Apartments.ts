import { CollectionConfig } from "payload/types";

const Accommodations: CollectionConfig = {
  slug: "accommodations",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "lodge",
      type: "relationship",
      relationTo: "lodges",
    },
  ],
};

export default Accommodations;
