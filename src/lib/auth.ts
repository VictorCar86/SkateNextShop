import bcrypt from 'bcryptjs'

/**
 * Hashes a password using bcrypt
 * @param password Plain text password to hash
 * @returns Hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

/**
 * Verifies a password against a hash
 * @param password Plain text password to verify
 * @param hashedPassword Hashed password to compare against
 * @returns Boolean indicating if password matches
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}