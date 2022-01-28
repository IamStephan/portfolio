import replaceAsync from 'string-replace-async'

const tokenRegex = (token: string) =>
  new RegExp(`(${token})\\([^\\)]*\\)(\\.[^\\)]*\\))?`, 'g')

/**
 * @description Checks to see if their is a token in the string
 * @param token The token name to check e.g. image will look for 'image(_args_)
 * @param text The text to search in
 * @returns
 */
export const hasToken = (token: string, text: string) => {
  return tokenRegex(token).test(text)
}

/**
 *
 * @param token The token name to check e.g. image will look for 'image(_args_)
 * @param text The text to search in
 * @returns Returns the list of args from the token
 */
export const parseToken = (token: string, text: string) => {
  const value = text.match(tokenRegex(token))?.[0] ?? ''
  const argsRaw = value.match(/("|')((?:\\\1|(?:(?!\1).))*)\1/g) || []
  // This is assuming that the params cannot contain ' and " inside args
  const args = argsRaw.map((arg) => arg.trim().replaceAll(/\"|\'/g, ''))

  return args
}

/**
 *
 * @param token The token name to check e.g. image will look for 'image(_args_)
 * @param text The text to search in
 * @param cb A callback to handle each match of the token, passing the token args to the callback
 * @returns Returns the transformed text
 */
export const replaceAllTokens = async (
  token: string,
  text: string,
  cb: (args: Array<string>) => Promise<string>
): Promise<string> => {
  return await replaceAsync(
    text,
    tokenRegex(token),
    async (tokenMatch: string) => {
      let args = parseToken(token, tokenMatch)

      return await cb(args)
    }
  )
}
