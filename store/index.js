const state = () => ({
  windowWidth: null,
  isColorBlockOpen: false,
})

const mutations = {
  setWindowWidth: (state, payload) => (state.windowWidth = payload),
  handleColorBlock: (state) =>
    (state.isColorBlockOpen = !state.isColorBlockOpen),
}

const getters = {
  windowWidth: (state) => state.windowWidth,
  isColorBlockOpen: (state) => state.isColorBlockOpen,
}

export { state, mutations, getters }
