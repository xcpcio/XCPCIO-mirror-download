import { defineConfig } from 'umi';

export default defineConfig({
    title: 'XCPCIO-MIRROR-DOWNLOAD',
    nodeModulesTransform: {
        type: 'none',
    },
    hash: true,
    routes: [
        { 
            exact: true,
            path: '/:filename', 
            component: '@/pages/[filename]' 
        },
        { 
            exact: true,
            path: '/',
            component: '@/pages/index'
        },
    ],
});
