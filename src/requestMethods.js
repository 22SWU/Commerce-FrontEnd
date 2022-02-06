import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmQ0MzA4ZGZjMjA3MTE3YjEzZmE4MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDEyNzM5OCwiZXhwIjoxNjQ0Mzg2NTk4fQ.4OgPLjCsr6L0ugvkHbZErT20NKOW3gsZinzAs-uNkX8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
