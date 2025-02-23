import "../Css/features.css";

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>🌟 Key Features</h2>
      <div className="feature-container">
        {/* Card 1 */}
        <div className="feature-card">
          <h3>Task Management</h3>
          <p>Organize and track your daily tasks efficiently.</p>
        </div>

        {/* Card 2 */}
        <div className="feature-card">
          <h3>Collaboration</h3>
          <p>Work together with your team in real-time.</p>
        </div>

        {/* Card 3 */}
        <div className="feature-card">
          <h3>Reminders</h3>
          <p>Never miss an important task with smart reminders.</p>
        </div>

        {/* Card 4 */}
        <div className="feature-card">
          <h3>Secure & Fast</h3>
          <p>Enjoy a safe and high-performance experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
