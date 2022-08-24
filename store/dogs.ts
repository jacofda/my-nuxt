import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '@/store/index'
import type Dog from '@/types/Dog'

export const state = () => ({
    all: [] as Dog[]
})

export type DogState = ReturnType<typeof state>

export const getters: GetterTree<DogState, RootState> = {
  
}

export const actions: ActionTree<DogState, RootState> = {
    async fetchDogs({ commit }) {
        const dogs: Dog[] = await this.$axios.$get('http://localhost:3001/dogBreeds')
        commit('setDogs', dogs)
    },
}

export const mutations: MutationTree<DogState> = {
    setDogs(state, value: Dog[] ) {
        state.all = value
    },
}
