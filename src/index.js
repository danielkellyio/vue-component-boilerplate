import VueComponent from "./VueComponent.vue";
const plugin = {
  install(Vue, options = { sizes: [] }) {
    Vue.component(VueComponent.name, VueComponent);
  }
};
export { VueComponent };
export default plugin;

//Auto-install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
