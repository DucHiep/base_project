import { Navigate, useRoutes, RouteObject } from 'react-router-dom';
import { useEffect, useState } from 'react';

const loadModules = async () => {
    const modules = import.meta.glob('./modules/*.tsx');
    const moduleContents: RouteObject[] = [];

    for (const path in modules) {
        const module = await modules[path]();
        // kiểm tra  kiểu dữ liệu của biến trước khi dùng
        if (typeof module === 'object' && module) {
            moduleContents.push(...(Object.values(module) as RouteObject[]));
        }
    }

    return moduleContents;
};

const Router = () => {
    const [routerArray, setRouterArray] = useState<RouteObject[]>([]);

    useEffect(() => {
        loadModules().then((moduleContents) => {
            const rootRouter = [
                { path: '/', element: <Navigate to='/login' /> },
                ...moduleContents.flat(2),
                { path: '*', element: <Navigate to='/404' /> },
            ];

            setRouterArray(rootRouter);
        });
    }, []);

    const routes = useRoutes(routerArray);

    return routes;
};

export default Router;
