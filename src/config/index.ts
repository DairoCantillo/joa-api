export default {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL || "",
  bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || "10", 10),
  secretKey: process.env.SECRET_KEY || "secret",
};
