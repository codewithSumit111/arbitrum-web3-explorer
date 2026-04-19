/**
 * Compute SHA-256 hash of a message string using the Web Crypto API.
 * Returns a lowercase hex-encoded hash string.
 *
 * @param {string} message - The input string to hash.
 * @returns {Promise<string>} The hex-encoded SHA-256 hash.
 */
export async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
