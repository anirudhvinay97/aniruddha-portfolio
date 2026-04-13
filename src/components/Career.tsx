import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Growth Marketing Strategist</h4>
                <h5>Eleos Social</h5>
              </div>
              <h3>2025–Now</h3>
            </div>
            <p>
              Supporting growth strategy, monetization planning, and partnership
              development for a fast-moving business. I helped shape a data-backed
              growth narrative that supported a $300M capital raise, identified
              high-value global partnership opportunities, and turned market
              intelligence into board-ready recommendations.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Customer Growth & Insights Strategist</h4>
                <h5>Williams-Sonoma, Inc.</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Worked at the intersection of customer experience, operations, and
              analytics. Recovered $120K+ in daily at-risk revenue by diagnosing
              200+ fulfillment exceptions, built dashboards that improved
              throughput across business units, and used SQL-driven analysis to
              improve inventory accuracy and on-time delivery.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Strategy Consultant</h4>
                <h5>City of Tampere</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Helped design a €48M smart-city digital transformation strategy
              focused on AI, IoT, and ecosystem planning. Built a phased roadmap,
              aligned multiple public-sector stakeholders, and helped create an
              operating model with shared KPIs and governance protocols.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Content & Engagement Strategist</h4>
                <h5>100 Million Learners Club, ASU</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Improved global learner engagement by restructuring 200+ multimedia
              assets and helping scale content systems for a distributed audience.
              I also reduced content build time by migrating 50+ courses, creating
              reusable workflows, and improving onboarding and QA processes.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Brand Growth Lead</h4>
                <h5>Samruddha Organics</h5>
              </div>
              <h3>2019–23</h3>
            </div>
            <p>
              Built and grew a D2C organic dairy brand from the ground up. Took
              the business to break-even in 11 months, grew the customer base,
              expanded regional market share, and improved supply-chain efficiency
              through sharper brand positioning, content-led acquisition, and
              data-driven operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;