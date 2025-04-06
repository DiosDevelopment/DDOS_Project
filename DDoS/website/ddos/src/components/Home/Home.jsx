import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard() {
  const [status, setStatus] = useState("🟢 Monitoring");
  const [blockedIPs, setBlockedIPs] = useState([]);
  const [packetsBlocked, setPacketsBlocked] = useState([]);
  const [timeLabels, setTimeLabels] = useState([]);
  const [lastPacketCount, setLastPacketCount] = useState(0);
  const [attackInProgress, setAttackInProgress] = useState(false);
  const [lastBlockedIP, setLastBlockedIP] = useState(null);
  const [LegitInProgress, setLegitInProgress] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`/ddos_status.txt?t=${new Date().getTime()}`)
        .then((res) => res.text())
        .then((text) => {
          const trimmedText = text.trim();

          if (trimmedText === "ATTACK") {
            setStatus("🚨 UNDER ATTACK (Mitigation Started)");
            
            if (!attackInProgress) {
              const newIP = `10.0.0.${Math.floor(100 + Math.random() * 100)}`;
              setLastBlockedIP(newIP);  
            }

            setAttackInProgress(true);

            
            let randomIncrease = Math.floor(Math.random() * 15);
            if (Math.random() < 0.3) randomIncrease = 0;
            if (Math.random() < 0.15) randomIncrease += 15;

            const newCount = lastPacketCount + randomIncrease;
            setPacketsBlocked((prev) => [...prev, newCount]);
            setLastPacketCount(newCount);
            setTimeLabels((prev) => [...prev, new Date().toLocaleTimeString()]);
          } 
          else if (trimmedText === "LEGIT") {
            setStatus("✅ LEGIT TRAFFIC");
            setLegitInProgress(true)
          } 
          else if (attackInProgress && trimmedText === ""){
            setStatus("🟢 Mitigation Completed");

            
            if (lastBlockedIP) {
              setBlockedIPs((prev) => [...prev, lastBlockedIP]);
              setLastBlockedIP(null);  
            }

            setTimeout(() => { 
                setPacketsBlocked([]);  
                setTimeLabels([]);      
                setLastPacketCount(0);  
                setStatus("🟢 Monitoring");
            }, 5000);
              
            setAttackInProgress(false);
          } 
          else {
            setTimeout(() => {  
                setStatus("🟢 Monitoring");
            }, 5000);
          }
        })
        .catch((err) => {
          console.error("Error reading ddos_status:", err);
          setStatus("⚠️ ERROR");
        });
    }, 1000);

    return () => clearInterval(interval);
  }, [attackInProgress, lastPacketCount, lastBlockedIP]);

  
  const data = {
    labels: timeLabels.length > 0 ? timeLabels : ["Waiting..."],
    datasets: [
      {
        label: "Packets Blocked Per Minute",
        data: packetsBlocked.length > 0 ? packetsBlocked : [0],
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
      },
    ],
  };

  
  const options = {
    scales: {
      x: {
        title: { display: true, text: "Time" },
        ticks: { autoSkip: true, maxTicksLimit: 10 },
      },
      y: {
        title: { display: true, text: "Packets Blocked" },
        beginAtZero: true,
        suggestedMax: Math.max(...packetsBlocked, 10),
        ticks: {
          stepSize: Math.ceil(Math.max(...packetsBlocked, 10) / 5),
        },
      },
    },
    plugins: { legend: { display: false } },
  };

  return (
    <div className="grid grid-rows-[1fr_5fr] gap-4 p-6">
      {}
      <div className="bg-gray-900 text-white text-center text-2xl font-bold py-4 rounded-lg">
        STATUS: {status}
      </div>

      {}
      <div className="grid grid-cols-2 gap-4">
        {}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">📊 Blocked Packets Per Minute</h2>
          <div className="h-64">
            <Line data={data} options={options} />
          </div>
        </div>

        {}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">🚨 Blocked Attackers</h2>
          <ul className="text-red-500 font-semibold">
            {blockedIPs.length === 0 ? (
              <li className="text-green-500">No attackers</li>
            ) : (
              blockedIPs.map((ip, index) => <li key={index}>🔴 {ip}</li>)
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
