import Vue from 'vue';
import template from 'html-loader!./repos.template.html';


const repos = Vue.component('repos', {
  data() {
    return {
      reposResponse: ''
    }
  },
  template,
  beforeRouteEnter(to, from, next) {
    Vue
      .http
      .get(`users/${to.params.id}/repos`)
      .then(response => next(vm => vm.reposResponse = response.data));
  },
});

export default repos;