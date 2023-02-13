import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Activities from '../pages/Activities';
import Contact from '../pages/Contact';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/activities', component: Activities },
    { path: '/contact', component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
