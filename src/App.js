import "./styles.css";

const PlayerHeader = () => {
  return <h3>세르히오 아구에로</h3>;
};

const PlayerTitle = () => {
  return <h1>해외 축구</h1>;
};

export default function App() {
  return (
    <div className="App">
      <PlayerTitle />
      <PlayerHeader />
      <PlayerHeader />
    </div>
  );
}
