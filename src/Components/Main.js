const Main = ({activeNote, onUpdateNote}) => {

    const onEditField = (field, value) => {
        onUpdateNote({
            ...activeNote,
            [field]: value,
            lastModified: Date.now(),
        });
    };

    if (!activeNote) return <div className="no-active-note">Select your note</div>;

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input
                    type="text"
                    id="title"
                    placeholder="Note Title"
                    value={activeNote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    autoFocus
                />
                <textarea
                    id="body"
                    placeholder="Write your note here..."
                    value={activeNote.body}
                    onChange={(e) => onEditField("body", e.target.value)}
                />
            </div>
        </div>
    );
};

export default Main;