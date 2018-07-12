import axios from 'axios';

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3030/api',
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,
  
  getUser() {
    return service
      .get('/users/profile')
      .then(res => res.data)
      .catch(errHandler);
  },

  editUser(data) {
    return service
      .put('/users/profile')
      .then(res => res.data)
      .catch(errHandler);
  },

  deleteUser() {
    return service
      .delete('/users/profile')
      .then(res => res.data)
      .catch(errHandler);
  },

  getHostsList() {
    return service
      .get('/host/all')
      .then(res => res.data)
      .catch(errHandler);
  },

  addHostList(data) {
    return service
      .post('/host/add')
      .then(res => res.data)
      .catch(errHandler);
  },

  getHostList() {
    return service
      .get('/host')
      .then(res => res.data)
      .catch(errHandler);
  },

  deleteHostList() {
    return service
      .delete('/host/:_id')
      .then(res => res.data)
      .catch(errHandler);
  },

  getComponent() {
    return service
      .get('/host/comp/:_id')
      .then(res => res.data)
      .catch(errHandler);
  },

  addComponent(data) {
    return service
      .post('/host/comp/add')
      .then(res => res.data)
      .catch(errHandler);
  },

  editComponent(data) {
    return service
      .put('/host/comp/edit/:_id')
      .then(res => res.data)
      .catch(errHandler);
  },

  deleteComponent() {
    return service
      .delete('/host/comp/:_id')
      .then(res => res.data)
      .catch(errHandler);
  },

  getBookmarksList() {
    return service
      .get('/bm/all')
      .then(res => res.data)
      .catch(errHandler);
  },

  addBookmarkList(data) {
    return service
      .post('/bm/add')
      .then(res => res.data)
      .catch(errHandler);
  },

  getBookmarkList() {
    return service
      .get('/bm')
      .then(res => res.data)
      .catch(errHandler);
  },

  deleteBookmarkList() {
    return service
      .delete('/bm/:_id')
      .then(res => res.data)
      .catch(errHandler);
  },

  addBookmark(data) {
    return service
      .post('/host/bm/comp/:_id')
      .then(res => res.data)
      .catch(errHandler);
  },

  deleteBookmark() {
    return service
      .delete('/host/bm/comp/:_id')
      .then(res => res.data)
      .catch(errHandler);
  },

  searchComponents(data) {
    return service
      .get('/search', data)
      .then(res => res.data)
      .catch(errHandler);
  },
  
  getSecret() {
    return service
      .get('/secret')
      .then(res => res.data)
      .catch(errHandler);
  },
  
  signup(userInfo) {
    return service
      .post('/signup', userInfo)
      .then(res => res.data)
      .catch(errHandler);
  },

  // signup(userInfo) {
  //   const formData = new FormData();
  //   Object.keys(userInfo).forEach(key => formData.append(key, userInfo[key]));
  //   return service
  //     .post('/signup', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })
  //     .then(res => res.data)
  //     .catch(errHandler);
  // },

  login(email, password) {
    return service
      .post('/login', {
        email,
        password,
      })
      .then(res => {
        const { data } = res;
        localStorage.setItem('user', JSON.stringify(data));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        return data;
      })
      .catch(errHandler);
  },

  logout() {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('user');
  },

  loadUser() {
    const userData = localStorage.getItem('user');
    if (!userData) return false;
    const user = JSON.parse(userData);
    if (user.token && user.name) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
      return user;
    }
    return false;
  },

  isLoggedIn() {
    return localStorage.getItem('user') != null
  },


  addPicture(file) {
    const formData = new FormData();
    formData.append("picture", file)
    return service
      .post('/users/first-user/pictures', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler);
  },
};


// export default {
//   // ...
//   signup(userInfo) {
//     const formData = new FormData();
//     Object.keys(userInfo).forEach(key => formData.append(key, userInfo[key]));
//     return service
//       .post('/signup', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then(res => res.data)
//       .catch(errHandler);
//   },
//   // ...
// }
