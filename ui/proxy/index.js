import "regenerator-runtime";
import Axios from "axios";

(async () => {
  console.log(document.URL);
  const Admin = await Axios.get("http://localhost:3002/bundle.js");
  await eval(Admin.data);
})();
