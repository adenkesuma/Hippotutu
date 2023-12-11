import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" },
      ]
    }
  ]
}
