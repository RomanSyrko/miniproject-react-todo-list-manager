const Sidebar = ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote, onCheckNote}) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
        <div className="app-sidebar">
            <div className="center">
                <div className="app-sidebar-header">
                    <h1>To-Do List Manager</h1>
                </div>
                <button onClick={onAddNote}>Add Note</button>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map(({id, title, body, lastModified}, i) => (
                    <div
                        key={id}
                        className={`app-sidebar-note ${id === activeNote && "active"}`}
                        onClick={() => setActiveNote(id)}>
                        <div className="sidebar-note-title">
                            <strong
                                className={`title-name ${sortedNotes[i].completed ? "completed" : ""}`}
                            >{title && title.substr(0, 10)}</strong>
                            <div className={"wrap-delete-and-check"}>
                                <button
                                    className={"check-btn"}
                                    onClick={() => onCheckNote(sortedNotes[i])}>Check
                                </button>
                                <button
                                    className={"delete-btn"}
                                    onClick={() => onDeleteNote(id)}>Delete
                                </button>
                            </div>
                        </div>
                        <p className={`title-description ${sortedNotes[i].completed ? "completed" : ""}`}
                        >{body && body.substr(0, 35) + "..."}</p>
                        <small className="note-meta">
                            {new Date(lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;