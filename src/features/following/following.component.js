import Vue from 'vue';
import template from 'html-loader!./following.template.html';


const following = Vue.component('following', {
  data() {
    return {
      followingResponse: ''
    }
  },
  template,
  beforeRouteEnter(to, from, next) {
    Vue
      .http
      .get(`users/${to.params.id}/following`)
      .then(response => next(vm => vm.followingResponse = response.data));
  },
});

export default following;