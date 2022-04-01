module.exports = {
  name: "clients", // optional, falls back to object key
  description: "client sites",
  options: {
    frequency: 60 * 23, // 24 hours
    // if the sites don’t share assets on the same domain, we can reset
    // chrome with each run instead of each site in every run (it’s faster)
    freshChrome: "run",
  },
  urls: [
    "https://www.lelli.store/",
    "https://chadkloepfer.com",
    "https://www.bidoun.org",
    "https://www.pingchong.org",
  ],
};
