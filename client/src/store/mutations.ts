import { IState } from './state';
import { SET_ROUTE_TREE, SET_AUTH } from './actionTypes';
import { IRoute } from '../typings';


export default {
  [SET_ROUTE_TREE] (state: IState, routeTree: IRoute[]) {
    state.routeTree = routeTree;
  },
  [SET_AUTH] (state: IState, auth: boolean) {
    state.hasAuth = auth;
  }
}