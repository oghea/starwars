export const apiV1 = {
  movie: `films/`,
  movies: args => `films/${args}/`,
  character: args => `people/${args}/`,
  planet: args => `planets/${args}/`,
  species: args => `species/${args}/`,
  vehicle: args => `vehicles/${args}/`,
}

export default {
  apiV1
}
