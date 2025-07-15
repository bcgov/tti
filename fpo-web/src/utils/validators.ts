export const PHONE_NUMBER_REGEX =
    /^(?=(?:\D*\d){7,})(?:\+?[1-9]\d{0,3}[-.\s]?)?(?:\(?\d{1,5}\)?[-.\s]?){1,4}\d{2,6}(?:\s*(?:ext\.?|extension|x|#)\s*\d{1,6})?$/i;


export const SURVEYJS_PHONE_VALIDATOR = {
    type: "regex",
    regex: PHONE_NUMBER_REGEX,
    text: "Enter a valid phone number. Example: +1 604-123-4567 x123"
}
