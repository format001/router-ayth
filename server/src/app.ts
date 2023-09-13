import express, {Application, Request, Response} from 'express';

import bodyParser from 'body-parser';

import {
    routes,
    users,
    IRoute,
    IUser
} from './data';

const app: Application = express();
const PORT: number = 8081;

interface IBody {
    uid: number
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/user_router_list', (request: Request, response: Response) => {
    const { uid }: IBody = request.body;

    if (uid) {
        const userInfo: IUser | undefined = users.find(user => user.id == uid);

        if (userInfo) {
            const authRouteList: IRoute[] = [];
            userInfo.auth.map(rid => {
                routes.map((route: IRoute) => {
                    if (route.id === rid) {
                        authRouteList.push(route);
                    }
                })
            });

            response.status(200).send({
                code: 0,
                msg: 'ok',
                data: authRouteList
            })
        } else {
            response.status(200).send({
                code: 1001,
                msg: 'No userInfo for this UID',
                data: null
            })
        }
    } else {
        response.status(200).send({
            code: 1002,
            msg: 'No UID received',
            data: null
        })
    }
});

app.listen(PORT, () => {
    console.log('Server is running on ' + PORT);
});
