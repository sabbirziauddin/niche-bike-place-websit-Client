import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button,  } from '@mui/material';
import {

    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import AddProducts from './AddProducts/AddProducts';
import Review from '../Review/Review';
import ViewAllOrder from '../ViewAllOrder/ViewAllOrder';
import useAuth from '../../../hooks/useAuth';
import MuiButton from '../../../styledComponent/MuiButton';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';




const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const {admin,logOut} = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            
            
            <Divider />
            <List>
                {
                    !admin&&<Box>
                        <Link to='/allProducts'>
                            <Button color="inherit" >Best Products</Button>
                        </Link>
                        <br />
                        <Link to={`${url}/myorder`}>
                            <Button color="inherit" >MYorder</Button>
                        </Link>
                        <br />


                        <Link to={`${url}/review`}>
                            <Button color="inherit" > Review</Button>
                        </Link>
                        <br />
                        <Link to={`${url}/pay`}>
                            <Button color="inherit" > pay</Button>
                        </Link>
                        <br />
                    </Box>
                }
                
            </List>
            
            
            
            
            
            {
               admin&& <box>
                    <Link to={`${url}/viewAllProducts`}>
                        <Button color="inherit" > Manage all product</Button>
                    </Link>
                    <br />
                    <Link to={`${url}/addProducts`}>
                        <Button color="inherit" > Add a Products</Button>
                    </Link>
                    <br />
                    <Link to={`${url}/manageAllProduct`}>
                        <Button color="inherit" > Managed products </Button>
                    </Link>
                    
                    <br />
                    <Link to={`${url}/makeAdmin`}>
                        <Button color="inherit" >make Admin</Button>
                    </Link>

                    </box>
            }
            <br />
            <MuiButton onClick={logOut}> Log out</MuiButton>
           

            
            
            
            <Divider />
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin dashboard
                        <Link to='/home'>
                            <Button color="inherit" sx={{ color: '#fff' }}>Home</Button>
                        </Link>
                    </Typography>
                    
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        
                        
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/manageAllProduct`}>
                        <ManageAllProducts></ManageAllProducts>
                        
                    
                    </Route>
                    <Route path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                        
                    
                    </Route>
                    <Route path={`${path}/viewAllProducts`}>
                        <ViewAllOrder></ViewAllOrder>
                        
                    
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                        
                    
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrders></MyOrders>


                    </Route>
                    
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
