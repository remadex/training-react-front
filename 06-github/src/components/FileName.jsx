import FileIcon from './FileIcon';

const FileName = ({ name, type }) => (
  <div className="flex space-x-2">
    <FileIcon type={type} />
    <span>{name}</span>
  </div>
);

export default FileName;
