// Nullify env var for tests.
process.env.NEXT_PUBLIC_SITE_URL = undefined;

// Force certain date to keep test deterministic.
jest.useFakeTimers();
jest.setSystemTime(new Date(2020, 1, 1));

export {};
