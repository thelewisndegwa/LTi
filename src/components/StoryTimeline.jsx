import { storyEvents } from '../data';

function StoryTimeline() {
  return (
    <section id="story" className="story-timeline">
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <div className="timeline">
          {storyEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StoryTimeline;

