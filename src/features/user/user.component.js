import Vue from 'vue';
import template from 'html-loader!./user.template.html';


const user = Vue.component('user', {
  data() {
    return {
      userResponse: '',
      togglePopover: false
    }
  },
  template,
  methods: {
    handlePopover() {
      this.togglePopover = this.togglePopover ? false : true;
    }
  },
  beforeRouteEnter(to, from, next) {
    Vue
      .http
      .get(`users/${to.params.id}`)
      .then(response => next(vm => vm.userResponse = response.data));
  },
});

export default user;