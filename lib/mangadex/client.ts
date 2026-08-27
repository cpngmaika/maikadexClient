import axios from "axios";

export const mangadexClient = axios.create({
    baseURL: "https://api.mangadex.org",
});