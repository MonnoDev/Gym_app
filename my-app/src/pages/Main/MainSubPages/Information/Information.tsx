import Button from "../../../../components/Button/Button";
import "./Information.css";

const Information: React.FC = () => {

  return (
    <div>
      <div className="headerContainer">
        We are offering:
      </div>
      <div className="offerContainer">
        <div className="yogaContainer">
            <div>Find Your Balance with Yoga 🧘‍♀️</div>
            <p>Join our yoga classes to build strength, improve flexibility, and find inner calm. Whether you're a beginner or experienced yogi, our expert instructors guide you through each pose in a supportive, welcoming space. Breathe, stretch, and feel the difference.</p>
          <Button>Classes available daily — all levels welcome!</Button>
        </div>

        <div className="strenghtContainer">
            <div>
              Get Stronger Every Day 💪
            </div>
            <p>Our strength training classes are designed to help you build muscle, boost endurance, and increase confidence. With expert coaching and a focus on proper form, you'll see real results — fast. All fitness levels welcome.</p>
            <Button>
            Lift, push, and power up — join us today!
            </Button>
        </div>

        <div className="pilatesContainer">
            <div>
            Tone & Align with Pilates 🌿
            </div>
           <p>
            Our Pilates classes focus on core stability, posture, and controlled movement to help you tone, stretch, and realign your body. Perfect for all levels, Pilates is low-impact but highly effective — leaving you feeling strong, centered, and energized.
           </p>
           <Button>Join us and feel the difference from the inside </Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
