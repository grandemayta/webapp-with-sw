import Vue from 'vue';
import template from 'html-loader!./followers.template.html';


const followers = Vue.component('followers', {
  data() {
    return {
      followersResponse: ''
    }
  },
  template,
  beforeRouteEnter(to, from, next) {
    Vue
      .http
      .get(`users/${to.params.id}/followers`)
      .then(response => next(vm => vm.followersResponse = response.data));
  },
});

export default followers;