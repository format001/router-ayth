import { IRoute } from '../typings';
import { http } from '../libs';

function getUserRouteList (uid: number) {
  return http.post('/api/user_router_list', { uid })
    .then((data) => data)
    .catch((err) =>{
      throw err;
    })
}

export {
  getUserRouteList
}