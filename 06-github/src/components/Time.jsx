import { formatDistance } from 'date-fns';

const Time = ({ date }) => <div>{formatDistance(date, new Date())}</div>;

export default Time;
