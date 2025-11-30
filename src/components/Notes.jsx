import { notes } from '../data';

function Notes() {
  return (
    <section id="notes" className="notes">
      <div className="container">
        <h2 className="section-title">Notes for You</h2>
        <div className="notes-grid">
          {notes.map((note) => (
            <div key={note.id} className="note-card">
              <p className="note-content">"{note.content}"</p>
              <p className="note-author">— {note.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Notes;

