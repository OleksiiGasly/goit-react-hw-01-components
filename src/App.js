import Profile from 'components/Profile/Profile';
import user from 'data/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from 'data/statistical-data.json';
import FriendList from 'components/FriendList/FriendList';
import friends from 'data/friends.json';
import TransactionHistory from 'components/Transactions/TransactionsList';
import transaction from 'data/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={data.title} stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
