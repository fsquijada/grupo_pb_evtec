const requiredOrFallback = (value: string | undefined, fallback: string): string =>
  value?.trim() || fallback;

export const env = {
  appName: requiredOrFallback(import.meta.env.VITE_APP_NAME, "PREDIX"),
  launchDate: requiredOrFallback(
    import.meta.env.VITE_LAUNCH_DATE,
    "2026-09-01T18:00:00-06:00",
  ),
  registrationApiUrl: import.meta.env.VITE_REGISTRATION_API_URL?.trim() || "",
} as const;
