const state = () => ({
  isColorBlockOpen: true,
})

const mutations = {
  handleColorBlock: (state) =>
    (state.isColorBlockOpen = !state.isColorBlockOpen),
}

const getters = {
  isColorBlockOpen: (state) => state.isColorBlockOpen,
}

export { state, mutations, getters }
