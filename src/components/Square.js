function Square({ value, setSquareValue }) {
  return (
    <button
      onClick={setSquareValue}
      style={{ color: value ? "#61dafb" : "black" }}
    >
      {value || "-"}
    </button>
  );
}

export default Square;
