import TodoStore from "./todoStore";
import ViewStore from "./viewStore";

export const initStores = () => ({
  todo: new TodoStore(),
  view: new ViewStore()
})