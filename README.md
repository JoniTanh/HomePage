# React + Vite

### Frontend setup

secrets.js

```
const SECRETS = {
  EMAIL: "",
  PHONE: "",
};

export default SECRETS;
```

### Backend setup

.env

```
PORT=
MAILGUN_API_KEY=
MAILGUN_DOMAIN=
EMAIL=

FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
