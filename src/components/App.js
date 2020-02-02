import React from 'react';
import Profile from './Profile/Profile';
import user from '../user.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import Statistics from './Statistics/Statistics';
import statisticalData from '../statistical-data.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <FriendList friends={friends} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <TransactionHistory items={transactions} />
  </>
);
export default App;
