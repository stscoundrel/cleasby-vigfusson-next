export interface Redirect404ResponseSchema{
  props: object,
  notFound: boolean,
}

export const redirect404 = (): Redirect404ResponseSchema => ({
  props: {},
  notFound: true,
})

export default redirect404
