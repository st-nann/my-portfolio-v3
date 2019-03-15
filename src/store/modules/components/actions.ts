import { ActionContext, ActionTree } from 'vuex'
import { mutation_type } from './mutation-types'
import State from './states'

const actions: ActionTree<State, State> = {
  updateSnackbar({ commit }: ActionContext<State, State>, data: object): void {
    commit(mutation_type.SNACKBAR, data)
    setTimeout(() => {
      commit(mutation_type.SNACKBAR, { txt: '', type: '' })
    }, 5000)
  }
}

export default actions
