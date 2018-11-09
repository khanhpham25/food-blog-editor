import BlogIndexContainer from 'views/BlogIndex';
import BlogNewContainer from 'views/BlogNew';

const routes = [
  { path: '/', exact: true, component: BlogIndexContainer },
  { path: '/new-blog', exact: true, component: BlogNewContainer },
];
export default routes;
