# MaikaDex Client

MaikaDex Client is a web application for reading manga, built on top of the [MangaDex API](https://api.mangadex.org/docs/). This client allows users to search, filter, and read manga seamlessly with a modern and intuitive user interface.

## Table of Contents
- [Getting Started](#getting-started)
- [Usage Instructions](#usage-instructions)
- [MangaDex API Terms of Use](#mangadex-api-terms-of-use)
- [Tiếng Việt](#tiếng-việt)

## Getting Started

### Prerequisites
- Node.js (v18.0 or newer recommended)
- npm or yarn

### Installation
1. Clone the repository and navigate to the client folder:
   ```bash
   cd maikaDexClient
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
To start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage Instructions
- **Home Page**: Browse the latest updates and featured manga.
- **Advanced Search**: Use the advanced search feature to filter manga by tags (Genres, Themes, Formats), publication demographic, status, and content rating. 
- **Reading**: Click on any manga to view its details. From the chapter list, you can toggle between different translated languages (e.g., English and Vietnamese) and start reading. Use the `Next` and `Prev` buttons to navigate between chapters.
- **Authentication**: You can register and log in to manage your profile and preferences.

## MangaDex API Terms of Use

This application acts as a third-party client and strictly utilizes the public **MangaDex API**. By using or modifying this project, you must adhere to MangaDex's Acceptable Use Policy:

1. **Non-Commercial Use**: This application is open-source and must remain completely free. You **cannot** use the MangaDex API for commercial purposes, monetize the app, run ads, or lock features behind a paywall.
2. **Rate Limiting**: Do not abuse the API. Ensure your requests stay within the allowed rate limits (typically 5 requests per second). Do not aggressively scrape or attempt to download the entire database.
3. **Attribution**: The source of the content (MangaDex) and the scanlation groups who translated the manga must be properly credited in the UI.
4. **Content Rules**: Adhere to MangaDex's content policies. Be aware that filtering by `contentRating` (safe, suggestive, erotica, pornographic) is required by the API to fetch specific types of manga.
5. **No Direct Scraping**: Always use the official REST API endpoints. Do not scrape HTML pages from the MangaDex website.

For full terms and conditions, please refer to the official [MangaDex API Documentation](https://api.mangadex.org/docs/).

You can test at [https://maikadex-client.vercel.app/](https://maikadex-client.vercel.app/)
