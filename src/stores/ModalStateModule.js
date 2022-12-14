import { compileTemplate } from "vue/compiler-sfc";

const ModalStateModule = {
  state: {
    isShowEditModal: false,
    isShowLoading: false,
    noteEdit: {},
  },
  getters: {
    getEditModalState(state) {
      return state.isShowEditModal;
    },
    getLoadingState(state){
      return state.isShowLoading;
    }
  },
  mutations: {
    closeEditModal(state) {
      state.isShowEditModal = false;
    },
    displayEditModal(state) {
      state.isShowEditModal = true;
    },
    closeLoading(state){
      state.isShowLoading = false;
    },
    displayLoading(state){
      state.isShowLoading = true;
    }
  },
  action: {
    closeLoading(){
      commit("closeLoading");
    },
    displayLoading(){
      commit("displayLoading");
    }
  },
};

export default ModalStateModule;
