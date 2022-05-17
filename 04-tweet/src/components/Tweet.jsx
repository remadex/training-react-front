import Author from './Author';
import Avatar from './Avatar';
import Message from './Message';
import Time from './Time';

const Tweet = () => (
  <div className="flex items-center border border-gray-300 m-8">
    <Avatar />
    <div className="space-y-1 text-lg font-medium leading-6">
      <Author />
      <Time />
      <Message />
    </div>
  </div>
);

export default Tweet;
