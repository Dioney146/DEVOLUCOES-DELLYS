/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_URL_CONTROLE: (process.env.NEXT_PUBLIC_URL_CONTROLE || process.env.URL_CONTROLE || "https://controle-de-entregas-iota.vercel.app").trim(),
    NEXT_PUBLIC_URL_TRANSFERENCIAS: (process.env.NEXT_PUBLIC_URL_TRANSFERENCIAS || process.env.URL_TRANSFERENCIAS || "https://reentregas-dellys.vercel.app").trim(),
  },
};
