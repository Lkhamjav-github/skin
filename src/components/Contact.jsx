import React, { useEffect, useState } from "react";
import home from "../icons/home2.png";
export const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1025);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validate = () => {
    let newErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log("Name:", formData.name);
      console.log("Phone:", formData.phone);
      console.log("Email:", formData.email);
      console.log("Message:", formData.message);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#10393b",
          backgroundImage:
            "url('https://wpriverthemes.com/anaton/wp-content/uploads/2023/05/42.png')",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "200px",
          paddingBottom: "150px",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 style={{ color: "white" }}>Get in touch with Us</h1>
        <div
          style={{
            display: "flex",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "10px",
              gap: "10px",
            }}
          >
            <img src={home} alt="" />
            <a style={{ fontWeight: "600", color: "white" }} href="">
              HOME
            </a>
          </div>
          <i class="fa-solid fa-angle-right"></i>

          <li
            style={{
              marginLeft: "20px",
              fontWeight: "600",
              color: "#ff8a43",
              listStyle: "none",
              fontSize: "14px",
            }}
          >
            GET IN TOUCH WITH US
          </li>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            width: "75%",
          }}
        >
          <div
            style={{
              width: isMobile ? "100%" : "40%",
              textAlign: isMobile ? "center" : "left",
              padding: "50px",
              marginTop: isMobile ? "" : "100px",
            }}
          >
            <h1>Contact Information</h1>
            <p>
              Plan upon yet way get cold spot its week. Almost do am or limits
              hearts. Resolve parties.
            </p>

            <div
              style={{
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#10393b",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  fontSize: "30px",
                  color: "white",
                }}
                className="fa-solid fa-phone"
              ></i>
              <div style={{ marginLeft: "20px" }}>
                <h4>Hotline</h4>
                <p>(+123) 456-7890</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#10393b",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  fontSize: "30px",
                  color: "white",
                }}
                className="fa-solid fa-location-dot"
              ></i>
              <div style={{ marginLeft: "20px" }}>
                <h4>Support</h4>
                <p>(+123) 456-7891</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#10393b",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  fontSize: "30px",
                  color: "white",
                }}
                className="fa-solid fa-envelope-open-text"
              ></i>
              <div style={{ marginLeft: "20px" }}>
                <h4>Customer Service</h4>
                <p>(+123) 456-7892</p>
              </div>
            </div>
          </div>

          <div
            style={{
              width: isMobile ? "100%" : "50%",
              marginTop: isMobile ? "100px" : "",
              padding: "80px",
              boxShadow: "0px 0px 32px 0px rgba(0,0,0,0.44)",
            }}
          >
            <h4 style={{ color: "#ff8a43" }}>HAVE QUESTIONS?</h4>
            <h2>Send us a Message</h2>

            <form style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
              <div>
                <input
                  style={{
                    width: "100%",
                    borderBottom: "1px solid black",
                    borderTop: "0",
                    borderRight: "0",
                    borderLeft: "0",
                    marginBottom: "15px",
                    outline: "none",
                    borderBottomColor: errors.name ? "red" : "#ccc",
                  }}
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>

              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <input
                    style={{
                      width: "100%",
                      borderBottom: "1px solid black",
                      borderTop: "0",
                      borderRight: "0",
                      borderLeft: "0",
                      marginBottom: "15px",
                      outline: "none",
                      borderBottomColor: errors.email ? "red" : "#ccc",
                    }}
                    type="text"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    style={{
                      width: "100%",
                      borderBottom: "1px solid black",
                      borderTop: "0",
                      borderRight: "0",
                      borderLeft: "0",
                      marginBottom: "15px",
                      outline: "none",
                      borderBottomColor: errors.phone ? "red" : "#ccc",
                    }}
                    type="text"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  {errors.phone && (
                    <p style={{ color: "red" }}>{errors.phone}</p>
                  )}
                </div>
              </div>
              <div>
                <textarea
                  style={{
                    width: "100%",
                    height: "250px",
                    borderBottom: "1px solid black",
                    marginBottom: "15px",
                    outline: "none",
                    borderBottomColor: errors.message ? "red" : "#ccc",
                  }}
                  placeholder="Tell Us About Project *"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                {errors.message && (
                  <p style={{ color: "red" }}>{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#10393b",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
