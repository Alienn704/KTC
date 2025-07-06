import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

const RegistrationForm: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    dob: "",
    country: "",
    hobbies: [] as string[],
    profilePicture: null as File | null,
    bio: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      const hobby = value;
      setForm((prev) => {
        const updatedHobbies = checked
          ? [...prev.hobbies, hobby]
          : prev.hobbies.filter((h) => h !== hobby);
        return { ...prev, hobbies: updatedHobbies };
      });
    } else if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setForm((prev) => ({ ...prev, profilePicture: file }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const nameRegex = /^.{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const phoneRegex = /^\d{10,}$/;
    const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (!nameRegex.test(form.fullName))
      newErrors.fullName = "Full Name must be at least 3 characters.";
    if (!emailRegex.test(form.email))
      newErrors.email = "Invalid email address.";
    if (!passwordRegex.test(form.password))
      newErrors.password =
        "Password must be at least 8 characters with letters and numbers.";
    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!phoneRegex.test(form.phone))
      newErrors.phone = "Phone number must be at least 10 digits.";
    if (!form.gender) newErrors.gender = "Please select a gender.";
    if (!form.dob || new Date().getFullYear() - new Date(form.dob).getFullYear() < 18)
      newErrors.dob = "You must be at least 18 years old.";
    if (!form.country) newErrors.country = "Please select a country.";
    if (form.hobbies.length === 0)
      newErrors.hobbies = "Select at least one hobby.";
    if (!form.profilePicture || !imageTypes.includes(form.profilePicture.type))
      newErrors.profilePicture = "Upload a valid .jpg, .jpeg, or .png file.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      <label>Full Name</label>
      <input name="fullName" value={form.fullName} onChange={handleChange} />
      {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

      <label>Email</label>
      <input name="email" value={form.email} onChange={handleChange} />
      {errors.email && <p className={styles.error}>{errors.email}</p>}

      <label>Password</label>
      <input type="password" name="password" value={form.password} onChange={handleChange} />
      {errors.password && <p className={styles.error}>{errors.password}</p>}

      <label>Confirm Password</label>
      <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
      {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}

      <label>Phone Number</label>
      <input name="phone" value={form.phone} onChange={handleChange} />
      {errors.phone && <p className={styles.error}>{errors.phone}</p>}

      <label>Gender</label>
      <div className={styles.radioGroup}>
        {['Male', 'Female', 'Other'].map((g) => (
          <label key={g}>
            <input type="radio" name="gender" value={g} onChange={handleChange} /> {g}
          </label>
        ))}
      </div>
      {errors.gender && <p className={styles.error}>{errors.gender}</p>}

      <label>Date of Birth</label>
      <input type="date" name="dob" value={form.dob} onChange={handleChange} />
      {errors.dob && <p className={styles.error}>{errors.dob}</p>}

      <label>Country</label>
      <select name="country" value={form.country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="VN">Vietnam</option>
      </select>
      {errors.country && <p className={styles.error}>{errors.country}</p>}

      <label>Hobbies</label>
      <div>
        {['Reading', 'Traveling', 'Gaming'].map((h) => (
          <label key={h}>
            <input
              type="checkbox"
              name="hobbies"
              value={h}
              checked={form.hobbies.includes(h)}
              onChange={handleChange}
            />{' '}
            {h}
          </label>
        ))}
      </div>
      {errors.hobbies && <p className={styles.error}>{errors.hobbies}</p>}

      <label>Profile Picture</label>
      <input type="file" name="profilePicture" onChange={handleChange} />
      {errors.profilePicture && <p className={styles.error}>{errors.profilePicture}</p>}

      <label>Bio</label>
      <textarea
        name="bio"
        maxLength={300}
        value={form.bio}
        onChange={handleChange}
      ></textarea>
      <p className={styles.helper}>{300 - form.bio.length} characters remaining</p>

      <button type="submit" className={styles.submitBtn}>Register</button>
    </form>
  );
};

export default RegistrationForm;
