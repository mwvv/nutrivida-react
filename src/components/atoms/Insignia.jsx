

function Insignia({ tipo }) {
  return <span className={`insignia insignia--${tipo.toLowerCase()}`}>{tipo}</span>
}
export default Insignia