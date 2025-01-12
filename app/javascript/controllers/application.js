import { Application } from "@hotwired/stimulus";

const application = Application.start();

application.debug = false;
window.Stimulus = application; // Atribui o objeto Stimulus ao window

export { application };
