export default function useLocalStorage() {
  const setdata = (value) => {
    localStorage.setItem("token", JSON.stringify(value));
  };
  const getData = () => {
    let data = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null;
    return data;
  };
  const removeData = () => {
    localStorage.removeItem("token");
  };

  return { setdata, getData, removeData };
}
