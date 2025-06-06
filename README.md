# Fetch MCP Server

![fetch mcp logo](logo.jpg)

*This fork adds possiblity to send JSON requests with defined method (by default it always sends GET request) and body (for non-GET requests). Also it is outputting raw HTTP response when it throws an error, so LLM has more context and can perform better. This is something that was missing in original version and I find this useful for improved feedback loop during backend development*

This MCP server provides functionality to fetch web content in various formats, including HTML, JSON, plain text, and Markdown.

## Components

### Tools

- **fetch_html**
  - Fetch a website and return the content as HTML
  - Input:
    - `url` (string, required): URL of the website to fetch
    - `headers` (object, optional): Custom headers to include in the request
  - Returns the raw HTML content of the webpage

- **fetch_json**
  - Fetch a JSON file from a URL
  - Input:
    - `url` (string, required): URL of the JSON to fetch
    - `headers` (object, optional): Custom headers to include in the request
    - `method` (string, optional): HTTP method to use for the request
    - `body` (object, optional): Optional body to include in the request. It is transformed to string under the hood.
  - Returns the parsed JSON content

- **fetch_txt**
  - Fetch a website and return the content as plain text (no HTML)
  - Input:
    - `url` (string, required): URL of the website to fetch
    - `headers` (object, optional): Custom headers to include in the request
  - Returns the text content of the webpage with HTML tags, scripts, and styles removed

- **fetch_markdown**
  - Fetch a website and return the content as Markdown
  - Input:
    - `url` (string, required): URL of the website to fetch
    - `headers` (object, optional): Custom headers to include in the request
  - Returns the content of the webpage converted to Markdown format

### Resources

This server does not provide any persistent resources. It's designed to fetch and transform web content on demand.

## Getting started

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the server: `npm run build`

### Usage

To use the server, you can run it directly:

```bash
npm start
```

This will start the Fetch MCP Server running on stdio.

### Usage with Desktop App

To integrate this server with a desktop app, add the following to your app's server configuration:

```json
{
  "mcpServers": {
    "fetch": {
      "command": "node",
      "args": [
        "{ABSOLUTE PATH TO FILE HERE}/dist/index.js"
      ]
    }
  }
}
```

## Features

- Fetches web content using modern fetch API
- Supports custom headers for requests
- Provides content in multiple formats: HTML, JSON, plain text, and Markdown
- Uses JSDOM for HTML parsing and text extraction
- Uses TurndownService for HTML to Markdown conversion

## Development

- Run `npm run dev` to start the TypeScript compiler in watch mode
- Use `npm test` to run the test suite

## License

This project is licensed under the MIT License.
