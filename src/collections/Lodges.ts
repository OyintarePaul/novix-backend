import { CollectionConfig } from "payload/types";

const Lodges: CollectionConfig = {
  slug: "lodges",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Lodge Name (e.g Dorcas Lodge)",
    },
  ],
};

export default Lodges;
