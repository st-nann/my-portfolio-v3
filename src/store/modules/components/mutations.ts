import { MutationTree } from 'vuex'
import { mutation_type } from './mutation-types'
import State from './states'
import Vue from 'vue'

const mutations: MutationTree<State> = {
  [mutation_type.SNACKBAR](state: State, data: object): void {
    Vue.set(state, 'message', data['txt'])
    Vue.set(state, 'status', data['type'])
  }
}

export default mutations
