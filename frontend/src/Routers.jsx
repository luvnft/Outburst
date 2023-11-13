import { Feed } from "./pages/Dashboard"

const Routers = [
    {
        title : "Dashboard",
        layout : "Dashboard Layout",
        pages : [
            {
                name : "News Feed",
                path : "/",
                element : <Feed />
            },
            {
                name : "News Feed",
                path : "/home",
                element : <Feed />
            },
        ]
    }
];

export default Routers;