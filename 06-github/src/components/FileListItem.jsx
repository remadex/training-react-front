import CommitMessage from './CommitMessage';
import FileName from './FileName';
import Time from './Time';

const FileListItem = ({ name, type, date, comment }) => (
  <div className="grid grid-cols-3">
    <FileName name={name} type={type} />
    <CommitMessage comment={comment} />
    <Time date={date} />
  </div>
);

export default FileListItem;
