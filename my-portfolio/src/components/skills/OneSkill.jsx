import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OneSkill({ name, icon, color }) {
  return (
    <span className="one-skill">
      <p>{name}</p>
      <FontAwesomeIcon icon={icon} color={color} />
    </span>
  );
}
