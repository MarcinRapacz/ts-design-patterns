import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { RegisterClientView } from "./RegisterClientView";

const submitButton = new Button();
const clientType = new Checkbox();

new RegisterClientView(clientType, submitButton);

submitButton.click();
clientType.select();
