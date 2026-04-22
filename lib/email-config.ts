export const BREVO_FORM_ACTION_URL = "PASTE_BREVO_FORM_URL";
export const BREVO_EMAIL_FIELD_NAME = "email";

export function hasBrevoEndpoint() {
  return BREVO_FORM_ACTION_URL !== "PASTE_BREVO_FORM_URL";
}
