import Vue from 'vue';
import template from 'html-loader!./search.template.html';


const search = Vue.component('search', {
  data: () => {
    return {
      search: ''
    }
  },
  template
});

export default search;