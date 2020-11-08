import React from "react";
import { useRole } from "../../app/AppContext";

export function SwitchRoleButton() {
  const { role, setRole } = useRole();
  return (
    <button onClick={() => setRole(role === "user" ? "admin" : "user")}>
      Current role: <b>{role}</b>
    </button>
  );
}
