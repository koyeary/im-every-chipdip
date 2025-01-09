import React from "react";

const ProfileForm = ({
  formData: { name, email, linkedin, github },
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="linkedin">LinkedIn:</label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={linkedin}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="github">GitHub:</label>
        <input
          type="url"
          id="github"
          name="github"
          value={github}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
