import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f1c'),
    exact: true
  },
  {
    path: '/blog/2018/12/28/hello_world',
    component: ComponentCreator('/blog/2018/12/28/hello_world', 'eb3'),
    exact: true
  },
  {
    path: '/blog/2019/02/21/intro1',
    component: ComponentCreator('/blog/2019/02/21/intro1', 'b77'),
    exact: true
  },
  {
    path: '/blog/2019/02/28/intro2',
    component: ComponentCreator('/blog/2019/02/28/intro2', '753'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '397'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'cd0'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3f4'),
            routes: [
              {
                path: '/docs/guideArrayXYZ',
                component: ComponentCreator('/docs/guideArrayXYZ', 'f65'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/guideuserblock',
                component: ComponentCreator('/docs/guideuserblock', '29e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/imac_dac',
                component: ComponentCreator('/docs/imac_dac', 'bb2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/imac_editor',
                component: ComponentCreator('/docs/imac_editor', '31b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'a5a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/motion-server-getting-started',
                component: ComponentCreator('/docs/motion-server-getting-started', '00e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/motion-server-sample-codes',
                component: ComponentCreator('/docs/motion-server-sample-codes', 'a61'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/net_config',
                component: ComponentCreator('/docs/net_config', '854'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/supported_devices',
                component: ComponentCreator('/docs/supported_devices', 'bd9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tutorial_1',
                component: ComponentCreator('/docs/tutorial_1', 'cf9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tutorial_2',
                component: ComponentCreator('/docs/tutorial_2', 'd87'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tutorial_3',
                component: ComponentCreator('/docs/tutorial_3', 'ff3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tutorial_4',
                component: ComponentCreator('/docs/tutorial_4', 'f43'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/update_software',
                component: ComponentCreator('/docs/update_software', 'b68'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
