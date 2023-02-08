export default {
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  },
  requests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter(req => req.coachId === coachId);
  }
};