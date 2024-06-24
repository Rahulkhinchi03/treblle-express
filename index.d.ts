declare module '@treblle/express' {
  type TreblleOptionsBase = {
    apiKey?: string
    projectId?: string
    additionalFieldsToMask?: string[]
    showErrors?: boolean
    blocklistPaths?: string[] | RegExp
  }

  function treblle(options: TreblleOptionsBase)

  export default treblle
}
