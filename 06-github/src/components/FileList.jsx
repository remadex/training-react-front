import FileListItem from './FileListItem';

const FileList = ({ files }) => (
  <div className="m-4">
    {files.map((f) => (
      <FileListItem
        key={f.id}
        name={f.name}
        comment={f.latestCommit.message}
        type={f.type}
        date={f.update_at}
      />
    ))}
  </div>
);

export default FileList;
