/*
 * Server metadata and instructions returned in the MCP initialize response.
 */

import type { Implementation } from "@modelcontextprotocol/sdk/types.js";

const ICON_BASE =
  "https://cloudinary-res.cloudinary.com/image/upload/docsite/brand-assets";

export const serverInfo: Omit<Implementation, "name" | "version"> = {
  title: "Cloudinary Structured Metadata",
  description:
    "Manage Cloudinary structured metadata fields, rules, and associated data.",
  websiteUrl: "https://cloudinary.com/documentation/cloudinary_llm_mcp",
  icons: [32, 96, 192].map((size) => ({
    src: `${ICON_BASE}/cloudinary_favicon_${size}x${size}.png`,
    mimeType: "image/png",
    sizes: [`${size}x${size}`],
  })),
};

export const instructions =
  `Cloudinary Structured Metadata: define the typed metadata fields (string, integer, date, enum, set) and conditional rules used to tag assets in a Cloudinary product environment.

- Fields are identified by external_id. Call list-metadata-fields first: get-metadata-field, update-metadata-field and delete-metadata-field need an existing external_id, and create-metadata-field fails if the external_id or label already exists.
- enum (single choice) and set (multiple choice) fields take their options from a datasource of {external_id, value} entries, up to 3000. Add, edit or reorder options with update-metadata-datasource-values; remove them with delete-metadata-datasource-values.
- A field can't be both mandatory and readonly_ui. Use validation to enforce ranges, lengths or regex patterns on values.
- Conditional rules make one field depend on another: when a condition on one field is met, enable or hide another field, activate specific options, apply a default value, or make it mandatory. Both fields must exist first; conditions refer to fields by external_id and to options by their datasource external_id.
- Values are set on assets through the Asset Management server: manage-asset-metadata, or the metadata parameter of upload-asset and asset-update.
- delete-metadata-field permanently deletes the field and all its associated data; confirm with the user first.
- Docs: https://cloudinary.com/documentation/structured_metadata.md and https://cloudinary.com/documentation/conditional_metadata_rules_api.md; all Cloudinary docs: https://cloudinary.com/documentation/llms.txt`;
