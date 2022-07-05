/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  rewrites: async () => {
    // In order to support multitenancy with Next.js, we use a "rewrite" to include the host in the path
    return {
      afterFiles: [
        {
          //source: '/:path*', <-- not working (won't match '/') due to https://github.com/vercel/next.js/issues/14930
          source: "/:path*{/}?",
          has: [{ type: "host", value: "(?<siteHost>.*)" }],
          destination: "/site/:siteHost/:path*"
        }
      ],
      fallback: [
        {
          source: "/:path*{/}?",
          has: [{ type: "host", value: "(?<siteHost>.*)" }],
          destination: "/site/:siteHost/fallback/:path*"
        }
      ]
    };
  }
};

module.exports = config;
