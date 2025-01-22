import "./style.css";
import Card from "react-animated-3d-card";
import portfolio from "../../assets/projets/data";

export function Project() {
  return (
    <div
      className="section projects"
    >
      <h5 className="h5-title">projets</h5>
      <div className="cards">
        {portfolio.map((port, index) => (
          <Card
            key={index} 
            cursorPointer={false}
            shineStrength={0.75}
            style={{
              width: "300px",
              height: "100%",
              borderRadius: "15px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", 
              cursor: "pointer",
              overflow: "hidden",
              marginBottom:'20px'
            }}
            onClick={() => console.log(`Card ${index} clicked`)}
          >
            <div className="card-content">
                <img src={port.image} alt="project-pictures" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
