import "regenerator-runtime";
import Axios from "axios";

const adminUrl = process.env.ADMIN_URL || "http://localhost:3002";

(async () => {
  const Admin = await Axios.get(`${adminUrl}/bundle.js`);
  eval(Admin.data);
})();
