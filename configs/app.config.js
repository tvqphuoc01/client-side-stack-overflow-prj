export const AppConfig = {
  apiAuthBase: process.env.HOST_AUTH,
  apiMainBase: process.env.HOST_MAIN,
  enableApiMockup: !!parseInt(process.env.NEXT_PUBLIC_ENABLE_API_MOCKUP || "0"),
};
