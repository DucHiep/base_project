import { RouteObject } from '~/routers/interface';
import LayoutIndex from '~/layouts';
import Home from '~/pages/home';

const homeRouter: Array<RouteObject> = [
    {
        element: <LayoutIndex />,
        children: [
            {
                path: '/home/index',
                element: <Home />,
                meta: {
                    requiresAuth: true,
                    title: 'Home Page',
                    key: 'home',
                },
            },
        ],
    },
];

export default homeRouter;
