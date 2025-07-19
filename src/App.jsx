
import './App.css';
import './styles/reset.css';
import './styles/profile.css';
import './styles/stats.css';
import './styles/friendlist.css';
import './styles/transactionHistory.css';
import friends from "./data/friends.json";
import userData from "./data/user.json";
import userStats from './data/statisticsData.json';
import transactionHistory from './data/transactionHistory.json';
import { UserFriendList } from './parts/userFriendList';
import { UserProfile } from './parts/userProfile';
import { UserStats } from './parts/userStats';
import { TransactionHistory } from './parts/userTransactionHistory';
function App() {
  return (
   <>
   <UserProfile userData = {userData}/>
   <UserStats userStats = {userStats}/>
    <UserFriendList friends = {friends}/>
    <TransactionHistory transactionHistory = {transactionHistory}/>
   </>
  );
}

export default App;
