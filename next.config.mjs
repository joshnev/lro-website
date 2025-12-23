// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           { key: "X-Content-Type-Options", value: "nosniff" },
//           { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
//           { key: "X-Frame-Options", value: "DENY" },
//           {
//             key: "Strict-Transport-Security",
//             value: "max-age=15552000; includeSubDomains",
//           },

//           {
//             key: "Content-Security-Policy",
//             value: [
//               "default-src 'self'",
//               "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
//               "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
//               "font-src 'self' https://fonts.gstatic.com data:",
//               "img-src 'self' https: data: blob:",
//               "connect-src 'self' https: wss:",
//               "object-src 'none'",
//               "base-uri 'self'",
//               "frame-ancestors 'none'",
//             ].join("; "),
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
