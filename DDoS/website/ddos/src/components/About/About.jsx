export default function About() {
    return (
      <div className="flex flex-col items-center mt-4">
        {/* Text Section */}
        <div className=" gap-5 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold">
              Welcome to DiosXecure Proactive DDoS Detection & Mitigation
            </h2>
            <p className="mt-4 text-gray-700 text-sm">
              In today’s digital landscape, DDoS attacks threaten businesses of all sizes, causing downtime, revenue loss, and security risks. At DiosXecure, we provide an advanced, real-time solution to detect and mitigate DDoS attacks, ensuring your online services stay secure and uninterrupted.

              <h2>Why Choose Us?</h2>
              We leverage Software-Defined Networking (SDN) and Machine Learning for:
              <ul className="list-disc pl-5">
                <li><strong>✅ Real-Time Threat Detection –</strong> Instantly identify malicious patterns.</li>
                <li><strong>✅ Automated Mitigation –</strong> Block malicious traffic before impact.</li>
                <li><strong>✅ Scalable & Adaptive –</strong> Protection for businesses of all sizes.</li>
              </ul>
              <h3 className="mt-4">Key Features:</h3>
              <ul className="list-disc pl-5">
                <li><strong>Live Traffic Analytics –</strong> Visualize threats and bandwidth usage.</li>
                <li><strong>Instant Attack Alerts –</strong> Get real-time security notifications.</li>
                <li><strong>Customizable Security –</strong> Tailor defenses to your needs.</li>
                <li><strong>Detailed Reports –</strong> Track incidents and analyze network health.</li>
              </ul>
              <h3 className="mt-4">Seamless Integration & 24/7 Support</h3>
              Easily integrates with your network, requiring minimal setup. Our experts are available 24/7 for assistance.
              <p className="font-bold mt-4">Stay Secure with DiosXecure</p>
              Ensure your digital infrastructure remains stable, secure, and high-performing—protect your business today!
              </p>
          </div>
        </div>
  
        {/* Image Grid with Background */}
        <div className="relative w-full h-96 mb-6 p-6">

          <div className="absolute inset-0 bg-white bg-opacity-50"></div>
  
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 h-full justify-around justify-items-center">
            <img src="/first.jpg" alt="Stat 1" className="w-full h-full object-cover rounded-xl" />
            <img src="/second.jpg" alt="Stat 2" className="w-full h-full object-cover rounded-xl" />
            <img src="/third.jpg" alt="Stat 3" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    );
  }
  