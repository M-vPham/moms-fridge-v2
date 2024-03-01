declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: string;
        DATABASE_URL: string;
        MONGODB_URI_USERNAME: string;
        MONGODB_URI_PASSWORD: string;
      }
    }
  }