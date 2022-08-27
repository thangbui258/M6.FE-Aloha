import store from './store';
import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import LoginPage from "./Pages/LoginPage/LoginPage";
import UserHomePage from "./Pages/UserHomePage/UserHomePage";
import UserReportPage from "./Pages/UserReportPage/UserReportPage";
import UserBudgetPage from "./Pages/UserBudgetPage/UserBudgetPage";
import UserTransactionsPage from "./Pages/UserTransactionsPage/UserTransactionsPage";
import MyWalletPage from "./Pages/MyWallet/MyWallet";
import PrivateRoute from './utils/PrivateRoute'
import UserChangeProfile from "./Pages/UserChangeProfile/UserChangeProfile";
import MyAccountPage from "./Pages/MyAccountPage/MyAccountPage";
import Category from "./Pages/Category/Category";
import UserSearchTransactionPage from "./Pages/UserSearchTransactionPage/UserSearchTransactionPage";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Routes>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/" element={<UserHomePage/>}/>

                        <Route path="/transactions" element={<UserTransactionsPage/>}/>
                        <Route path="/report" element={<UserReportPage/>}/>
                        <Route path="/budget" element={<UserBudgetPage/>}/>
                        <Route path="/my-wallets" element={<MyWalletPage/>}/>
                        <Route path="/my-account" element={<MyAccountPage/>}/>
                        <Route path="/my-account/change-profile" element={<UserChangeProfile/>}/>
                        <Route path="/categories" element={<Category/>}/>
                        <Route path="/search" element={<UserSearchTransactionPage/>}/>
                        <Route path="/store" element={<UserTransactionsPage/>}/>
                        <Route path="/help" element={<UserTransactionsPage/>}/>
                    </Route>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
