"use client";
import { TOKEN } from "@/constants/auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { MoonLoader } from "react-spinners";

const Signin = () => {
  const [isLoading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem(TOKEN) ?? "");
  const [username, setUsername] = useState("mturleyd");
  const [password, setPassword] = useState("GyLnCB8gNIp");
  const router = useRouter();

  const LOGIN_ENDPOINT = process.env.NEXT_PUBLIC_LOGIN as string;
  console.log({ LOGIN_ENDPOINT });
  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(LOGIN_ENDPOINT, {
        username,
        password,
      })
      .then((response) => {
        const { token: jwt } = response.data;
        localStorage.setItem(TOKEN, jwt);
        setToken(jwt);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);

  if (isLoading || token) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          background: "#f1f1f1",
        }}
      >
        <MoonLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        style={{
          width: "300px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src="your-logo-url"
            alt="Logo"
            style={{ width: "100px", height: "100px" }}
          />
          <h2>Title</h2>
        </div>
        <div>
          <label>
            {/* {intl.formatMessage({ id: "username" })} */}
            <FormattedMessage id="username" />
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>
            <FormattedMessage id="password" />
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
