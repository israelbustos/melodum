import axios from 'axios';


const LOGIN_USER_KEY = 'HOME_LOGIN_USER_KEY';

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = 'http://127.0.0.1:8000';
// }
baseURL = 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    
    signUp = async (user_name, email, password) => {
        const savedPost = await api
          .post("/users/signup/", {
            user_name: user_name,
            email: email,
            password: password,
          })
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            throw new Error(error);
          });
        return savedPost;
      };

      signIn = async (email, password) => {
        const savedPost = await api
          .post("/users/signin/", {
            email: email,
            password: password,
          })
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            throw new Error(error);
          });
        return savedPost;
      };

      getUsers = async () => {
        const posts = await api
          .get("/users/")
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            throw new Error(error);
          });
        return posts;
      };

        // ///////////////////////////////////////
  // Items
  // ///////////////////////////////////////

  getItems = async () => {
    let url = "/items/";
    const items = await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return items;
  };

  // ///////////////////////////////////////
  // Carts
  // //////////////////////////////////////

  getCarts = async () => {
    const carts = await api
      .get("/cart/", {requireToken: true})
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return carts;
  };

  addCarts = async (item_id) => {
    const savedCart = await api
      .post("/cart/add/", {
        item: item_id,
        quantity: 1,
      },{requireToken: true})
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedCart;
  };

  updateCarts = async (cart_id, quantity) => {
    const savedCart = await api
      .put("/cart/update/" + cart_id + "/", {
        quantity: quantity,
      },{requireToken: true})
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedCart;
  };

  deleteCarts = async (cart_id) => {
    const response = await api
      .delete("/cart/delete/" + cart_id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };

    ////////////////////////////////////////////
  // Order/Checkout
  // ////////////////////////////////////////

  orderAdd = async (params = {}) => {
    const order = await api
      .post("/orders/add/", params)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return order;
  };
}





