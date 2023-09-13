import { IRoute } from "../typings";

function formatRouteTree (data: IRoute[]) {
  const parents = data.filter(routeInfo => routeInfo.pid === 0),
        children = data.filter(routeInfo => routeInfo.pid !== 0);

  dateToTree(parents, children);

  return parents;

  function dateToTree (parents: IRoute[], children: IRoute[]) {
    parents.map(parent => {
      children.map((child, index) => {
        if (child.pid === parent.id) {
          let _children: IRoute[] = JSON.parse(JSON.stringify(children));
          _children.splice(index, 1);
          dateToTree([child], _children);
          if (parent.children) {
            parent.children.push(child);
          } else {
            parent.children = [child];
          }
        }
      })
    })
  }
}

export {
  formatRouteTree
}
