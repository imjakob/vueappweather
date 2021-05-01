import { createApp } from "vue";
import { Input, Button, Spin, Col, Row, Form } from "ant-design-vue";

import App from "./App.vue";
import { store } from "./store";

const app = createApp(App);

app.config.productionTip = false;
app.use(Input);
app.use(Button);
app.use(Spin);
app.use(Col);
app.use(Row);
app.use(Form);

app.use(store);

app.mount("#app");
