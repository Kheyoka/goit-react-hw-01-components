import React from 'react';
import Profile from './Profile/Profile';
import user from '../database/user.json';
import FriendList from './FriendList/FriendList';
import friends from '../database/friends.json';
import Statistics from './Statistics/Statistics';
import statisticalData from '../database/statistical-data.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../database/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <FriendList friends={friends} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <TransactionHistory items={transactions} />
  </>
);
export default App;
