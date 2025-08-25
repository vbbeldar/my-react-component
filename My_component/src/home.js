import React from "react";

function UserProfile({ user }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>User Profile</h2>
      <div style={styles.info}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "300px",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  info: {
    marginTop: "10px",
    lineHeight: "1.5",
  }
};

export default UserProfile;
