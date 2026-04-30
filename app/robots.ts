export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/wpm", "/cdn", "/b", "/$"],
      },
    ],
    sitemap: "https://www.ezpz.coffee/sitemap.xml",
  };
}
