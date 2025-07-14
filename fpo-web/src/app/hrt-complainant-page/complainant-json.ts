export default {
  pages: [
    {
      name: "Who experienced discrimination (Complainant)?",
      elements: [
        {
          type: "text",
          name: "Legal Name - First Name",
          isRequired: true,
          maxLength: 255,
        },
        {
          type: "text",
          name: "Legal Name - Last Name",
          isRequired: true,
          maxLength: 255,
        },
        {
          type: "text",
          name: "Preferred name - e.g. traditional name, nickname, alias",
          maxLength: 255,
        },
        {
          type: "checkbox",
          name: "Use my preferred name",
          choices: [
            {
              value: "When talking to me",
              text: "When talking to me",
            },
            {
              value: "When writing to me",
              text: "When writing to me",
            },
            {
              value: "In decision in addition to my legal name",
              text: "In decision in addition to my legal name",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "Title",
          title: "Title",
          choices: ["Mr.", "Ms.", "Other"],
        },
        {
          type: "text",
          name: "Other title",
          visibleIf: "{Title} = ['item3']",
        },
      ],
      title: "Who experienced discrimination (Complainant)?",
    },
    {
      name: "Who will communicate with the Tribunal about this Complaint?",
      elements: [
        {
          type: "radiogroup",
          name: "Select only one option:",
          choices: [
            {
              value: "The complainant",
              text: "The complainant",
            },
            "A lawyer for the complainant",
            "A legal advocate (Example: a person who works for a law clinic)",
            "Another person – You must file a Form 1.2 with this complaint (attach PDF of form 1.2)",
          ],
        },
      ],
      title: "Who will communicate with the Tribunal about this Complaint?",
    },
    {
      name: "Complainant Contact Information",
      elements: [
        {
          type: "text",
          name:
            "Name of the person who will communicate with the Tribunal, if different from the Complainant",
        },
        {
          type: "text",
          name: "First name",
          maxLength: 40,
        },
        {
          type: "text",
          name: " Last name",
          maxLength: 40,
        },
        {
          type: "radiogroup",
          name: "Contact Title",
          title: "Title",
          choices: ["Mr.", "Ms.", "Other"],
        },
        {
          type: "radiogroup",
          name: "Pronoun",
          choices: ["She", "He", "They", "Other"],
        },
        {
          type: "text",
          name: "Other pronoun",
          visibleIf: "{Pronoun} = 'Other'",
        },
      ],
      visibleIf:
        "{Select only one option:} = 'A lawyer for the complainant' or {Select only one option:} = 'A legal advocate (Example: a person who works for a law clinic)' or {Select only one option:} = 'Another person – You must file a Form 1.2 with this complaint (attach PDF of form 1.2)'",
      title: "Complainant Contact Information",
    },
    {
      name: "Complainant’s address for Delivery",
      elements: [
        {
          type: "html",
          name: "question1",
          html:
            "<p>You must provide</p><ol type=\"a\"><li>an address where all parties can send you documents. Give the address of the person who will communicate with the Tribunal.</li><li>an email address, if possible. The Tribunal and parties usually communicate by email.</li></ol><p>If you have contact information that you want to keep confidential, do not put it on this form. Provide it by email, mail, fax, or in person.</p><p>  <strong>You must notify the Tribunal of any change to the address for delivery.</strong> A document sent to an address below is considered received by the complainant.</p>",
        },
        {
          type: "text",
          name: "Complainant Contact Mailing address",
          title: "Mailing address",
          isRequired: true,
        },
        {
          type: "text",
          name: "Complainant Contact City ",
          width: "30%",
          title: "City ",
          isRequired: true,
        },
        {
          type: "dropdown",
          name: "Complainant Contact Province",
          startWithNewLine: false,
          title: "Province",
          isRequired: true,
          choices: [
            "Alberta",
            "British Columbia",
            "Manitoba",
            "New Brunswick",
            "Newfoundland and Labrador",
            "Nova Scotia",
            "Northwest Territories",
            "Nunavut",
            "Ontario",
            "Prince Edward Island",
            "Québec",
            "Saskatchewan",
            "Yukon",
          ],
        },
        {
          type: "text",
          name: "Complainant Contact Postal Code",
          width: "30%",
          startWithNewLine: false,
          title: "Postal Code",
          isRequired: true,
        },
        {
          type: "text",
          name: "Complainant Contact Phone number  ",
          width: "30%",
          title: "Phone number  ",
          isRequired: true,
          maxLength: 40,
        },
        {
          type: "text",
          name: "Complainant Contact Email",
          width: "40%",
          title: "Email",
          isRequired: true,
          maxLength: 80,
          validators: [{ type: "email" }],
        },
        {
          type: "text",
          name: "Complainant Contact Cell Phone number  ",
          width: "30%",
          startWithNewLine: false,
          title: "Cellphone number  ",
          maxLength: 40,
        },
        {
          type: "text",
          name: "Complainant Contact Fax",
          width: "30%",
          startWithNewLine: false,
          title: "Fax",
          maxLength: 40,
        },
      ],
      visibleIf: "{Select only one option:} <> 'The complainant'",
    },
  ],
};
