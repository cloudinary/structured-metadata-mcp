# Cloudinary Structured Metadata MCP Server


<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Cloudinary Structured Metadata MCP Server](#cloudinary-structured-metadata-mcp-server)
  * [Installation](#installation)
  * [Configuration](#configuration)
  * [Authentication](#authentication)
  * [Available Tools](#available-tools)
* [Development](#development)
  * [Building from Source](#building-from-source)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start Installation [installation] -->
## Installation

<details>
<summary>MCP Bundle (Desktop Extension)</summary>

Install the MCP server as a Desktop Extension using the pre-built [`mcp-server.mcpb`](./mcp-server.mcpb) file:

Simply drag and drop the [`mcp-server.mcpb`](./mcp-server.mcpb) file onto Claude Desktop to install the extension.

The MCP bundle package includes the MCP server and all necessary configuration. Once installed, the server will be available without additional setup.

> [!NOTE]
> MCP bundles provide a streamlined way to package and distribute MCP servers. Learn more about [Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions).

</details>

<details>
<summary>Cursor</summary>

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=CloudinarySMD&config=eyJtY3BTZXJ2ZXJzIjp7IkNsb3VkaW5hcnlTTUQiOnsiY29tbWFuZCI6Im5weCIsImFyZ3MiOlsiQGNsb3VkaW5hcnkvc3RydWN0dXJlZC1tZXRhZGF0YS1tY3AiLCJzdGFydCIsIi0tc2VydmVyLWluZGV4IiwiLi4uIiwiLS1yZWdpb24iLCIuLi4iLCItLWFwaS1ob3N0IiwiLi4uIiwiLS1hcGkta2V5IiwiLi4uIiwiLS1hcGktc2VjcmV0IiwiLi4uIiwiLS1vYXV0aDIiLCIuLi4iLCItLWNsb3VkLW5hbWUiLCIuLi4iXX19fQ==)

Or manually:

1. Open Cursor Settings
2. Select Tools and Integrations
3. Select New MCP Server
4. If the configuration file is empty paste the following JSON into the MCP Server Configuration:

```json
{
  "mcpServers": {
    "CloudinarySMD": {
      "command": "npx",
      "args": [
        "@cloudinary/structured-metadata-mcp",
        "start",
        "--server-index",
        "...",
        "--region",
        "...",
        "--api-host",
        "...",
        "--api-key",
        "...",
        "--api-secret",
        "...",
        "--oauth2",
        "...",
        "--cloud-name",
        "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Claude Code CLI</summary>

```bash
claude mcp add @cloudinary/structured-metadata-mcp npx @cloudinary/structured-metadata-mcp start -- --server-index ... --region ... --api-host ... --api-key ... --api-secret ... --oauth2 ... --cloud-name ...
```

</details>
<details>
<summary>Windsurf</summary>

Refer to [Official Windsurf documentation](https://docs.windsurf.com/windsurf/cascade/mcp#adding-a-new-mcp-plugin) for latest information

1. Open Windsurf Settings
2. Select Cascade on left side menu
3. Click on `Manage MCPs`. (To Manage MCPs you should be signed in with a Windsurf Account)
4. Click on `View raw config` to open up the mcp configuration file.
5. If the configuration file is empty paste the full json
```
{
  "mcpServers": {
    "CloudinarySMD": {
      "command": "npx",
      "args": [
        "@cloudinary/structured-metadata-mcp",
        "start",
        "--server-index",
        "...",
        "--region",
        "...",
        "--api-host",
        "...",
        "--api-key",
        "...",
        "--api-secret",
        "...",
        "--oauth2",
        "...",
        "--cloud-name",
        "..."
      ]
    }
  }
}
```
</details>
<details>
<summary>VS Code</summary>

Refer to [Official VS Code documentation](https://code.visualstudio.com/api/extension-guides/ai/mcp) for latest information

1. Open [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)
1. Search and open `MCP: Open User Configuration`. This should open mcp.json file
2. If the configuration file is empty paste the full json
```
{
  "mcpServers": {
    "CloudinarySMD": {
      "command": "npx",
      "args": [
        "@cloudinary/structured-metadata-mcp",
        "start",
        "--server-index",
        "...",
        "--region",
        "...",
        "--api-host",
        "...",
        "--api-key",
        "...",
        "--api-secret",
        "...",
        "--oauth2",
        "...",
        "--cloud-name",
        "..."
      ]
    }
  }
}
```

</details>
<details>
<summary>Claude Desktop</summary>
Claude Desktop doesn't yet support SSE/remote MCP servers.

You need to do the following
1. Open claude Desktop
2. Open left hand side pane, then click on your Username
3. Go to `Settings`
4. Go to `Developer` tab (on the left hand side)
5. Click on `Edit Config`
Paste the following config in the configuration

```json
{
  "mcpServers": {
    "CloudinarySMD": {
      "command": "npx",
      "args": [
        "@cloudinary/structured-metadata-mcp",
        "start",
        "--server-index",
        "...",
        "--region",
        "...",
        "--api-host",
        "...",
        "--api-key",
        "...",
        "--api-secret",
        "...",
        "--oauth2",
        "...",
        "--cloud-name",
        "..."
      ]
    }
  }
}
```

</details>


<details>
<summary> Stdio installation via npm </summary>
To start the MCP server, run:

```bash
npx @cloudinary/structured-metadata-mcp start --server-index ... --region ... --api-host ... --api-key ... --api-secret ... --oauth2 ... --cloud-name ...
```

For a full list of server arguments, run:

```
npx @cloudinary/structured-metadata-mcp --help
```

</details>
<!-- End Installation [installation] -->

## Configuration

### Environment Variables

The MCP server supports the following environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name | Yes |
| `CLOUDINARY_API_KEY` | Your Cloudinary API key | Yes |
| `CLOUDINARY_API_SECRET` | Your Cloudinary API secret | Yes |
| `CLOUDINARY_URL` | Complete Cloudinary URL (alternative to individual vars) | No |

### CLOUDINARY_URL Format

You can use a single `CLOUDINARY_URL` instead of individual variables:

```bash
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

<!-- Start Authentication [security] -->
## Authentication

The MCP server uses your Cloudinary API key and secret for authentication:

```json
{
  "env": {
    "CLOUDINARY_CLOUD_NAME": "demo",
    "CLOUDINARY_API_KEY": "123456789012345",
    "CLOUDINARY_API_SECRET": "abcdefghijklmnopqrstuvwxyz12"
  }
}
```

<!-- End Authentication [security] -->

## Available Tools

The MCP server exposes Cloudinary's Structured Metadata API as tools. Use your AI application to discover and invoke the available tools for managing metadata fields and rules.

### Usage Examples

#### Example 1: Manage Metadata Fields

```
1. List fields: "Show me all metadata fields in my account"
2. Create field: "Create a metadata field named 'category' of type 'enum' with values 'product,service,other'"
3. Get field: "Get details for the metadata field 'category'"
4. Update field: "Update the 'category' field to add a new value 'subscription'"
5. Delete field: "Delete the metadata field 'old_field'"
```

#### Example 2: Manage Field Datasources

```
1. Search datasource: "Search for values in the 'category' field datasource"
2. Update datasource: "Add a new value 'enterprise' to the 'category' field datasource"
3. Delete datasource entry: "Remove the value 'old_value' from the 'category' field"
4. Restore datasource: "Restore a deleted datasource entry for field 'category'"
```

#### Example 3: Manage Metadata Rules

```
1. List rules: "Show all metadata rules configured in my account"
2. Create rule: "Create a metadata rule to auto-tag assets in folder 'products' with category 'product'"
3. Update rule: "Update metadata rule [rule-id] to change the target folder"
4. Delete rule: "Delete metadata rule [rule-id]"
```

#### Example 4: Reorder Metadata Fields

```
1. Reorder single field: "Move the 'priority' metadata field to position 2"
2. Reorder multiple fields: "Reorder metadata fields: set 'category' to position 1, 'priority' to position 2"
```

# Development

## Building from Source

### Prerequisites
- Node.js v20 or higher
- npm, pnpm, bun, or yarn

### Build Steps

```bash
# Clone the repository
git clone https://github.com/cloudinary/structured-metadata-mcp.git
cd structured-metadata-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Run locally
npm start
```

### Project Structure

```
structured-metadata-mcp/
├── src/
│   ├── hooks/              # Custom authentication hooks
│   ├── mcp-server/         # MCP server implementation
│   │   ├── server.ts       # Main server (auto-generated)
│   │   └── tools/          # Generated tool wrappers
│   ├── funcs/              # API function implementations
│   └── models/             # Type definitions
├── .github/
│   └── workflows/          # CI/CD workflows
└── .speakeasy/             # Speakeasy configuration
```

## Contributions

While we value contributions to this MCP Server, the code is generated programmatically. Any manual changes to generated files will be overwritten on the next generation.

**What you can contribute:**
- ✅ Custom hooks in `src/hooks/`
- ✅ Documentation improvements
- ✅ Bug reports and feature requests

**Generated files (do not edit):**
- ❌ `src/mcp-server/server.ts`
- ❌ `src/mcp-server/tools/*.ts`
- ❌ `src/funcs/*.ts`
- ❌ `src/models/*.ts`

We look forward to hearing your feedback. Feel free to open a PR or issue with a proof of concept and we'll do our best to include it in a future release.

---

### MCP Server Created by [Speakeasy](https://www.speakeasy.com/?utm_source=structured-metadata-mcp&utm_campaign=mcp-typescript)

<!-- Placeholder for Future Speakeasy SDK Sections -->
