import { Component, OnInit, OnDestroy } from "@angular/core";

import { MissionService } from "../mission.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

// import Inputmask from "inputmask";
// import * as widgets from 'surveyjs-widgets';
// Import Survey.js
import * as Survey from "survey-angular";
// import { addQuestionTypes } from '../survey/question-types';
// widgets.inputmask(Survey);
@Component({
  selector: "app-hrt-retaliation-party-info-page",
  templateUrl: "./hrt-retaliation-party-info-page.component.html",
  styleUrls: ["./hrt-retaliation-party-info-page.component.scss"],
})
export class HrtRetaliationPartyInfoPageComponent implements OnInit, OnDestroy {
  subscription: Subscription;


  private json = {
    showNavigationButtons: false,
    completeText: "",
    showQuestionNumbers: "off",

    pages: [
      {
        name: "Who experienced retaliation (Complainant)?",
        elements: [
          {
            type: "text",
            name: "Legal Name - First Name",
            isRequired: true,
            maxLength: 40,
          },
          {
            type: "text",
            name: "Legal Name - Last Name",
            isRequired: true,
            maxLength: 40,
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
            hasOther: true,
            choices: ["Mr.", "Ms.", "Mx."],
            otherText: "Not listed above",
          },
          {
            type: "radiogroup",
            name: "Pronoun",
            hasOther: true,
            choices: ["She", "He", "They"],
            otherText: "Not listed above",
          },
        ],
        title: "Who experienced retaliation (Complainant)?",
      },
      {
        name: "Who will communicate with the Tribunal about this Complaint?",
        elements: [
          {
            isRequired: true,
            type: "radiogroup",
            name: "Select only one option",
            choices: [
              {
                value: "The complainant",
                text: "The complainant",
              },
              "A lawyer",
              "A legal advocate (Example: A person who works for a law clinic)",
              "Another person – You must file a Form 1.2 with this complaint",
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
            name: "First name",
            isRequired: true,
            maxLength: 40,
          },
          {
            type: "text",
            name: "Last name",
            isRequired: true,
            maxLength: 40,
          },
          {
            type: "text",
            name: "Organization name",
            title: "Organization name (e.g. law firm, if applicable)",
            maxLength: 255,
          },
          {
            type: "text",
            name:
              "Contact Preferred name - e.g. traditional name, nickname, alias",
            title: "Preferred name - e.g. traditional name, nickname, alias",
            maxLength: 255,
          },
          {
            type: "radiogroup",
            name: "Contact Title",
            title: "Title",
            hasOther: true,
            choices: ["Mr.", "Ms.", "Mx."],
            otherText: "Not listed above",
          },
          {
            type: "radiogroup",
            name: "Contact Pronoun",
            title: "Pronoun",
            hasOther: true,
            choices: ["She", "He", "They"],
            otherText: "Not listed above",
          },
        ],
        visibleIf:
          "{Select only one option} = 'A lawyer' or {Select only one option} = 'A legal advocate (Example: A person who works for a law clinic)' or {Select only one option} = 'Another person – You must file a Form 1.2 with this complaint'",
        title:
          "Name of the person who will communicate with the Tribunal",
      },
      {
        name: "Complainant’s address for Delivery",
        title: "Complainant’s address for delivery",
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
            maxLength: 240,
            // isRequired: true,
          },
          {
            type: "text",
            name: "Complainant Contact City",
            width: "30%",
            title: "City ",
            maxLength: 40,
            // isRequired: true,
          },
          {
            type: "dropdown",
            name: "Complainant Contact Province",
            startWithNewLine: false,
            title: "Province",
            // isRequired: true,
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
            maxLength: 10,
            // isRequired: true,
          },
          {
            type: "text",
            name: "Complainant Contact Phone number",
            width: "30%",
            title: "Phone number  ",
            maxLength: 40,
            // isRequired: true,
          },
          {
            type: "text",
            name: "Complainant Contact Cell Phone number",
            width: "30%",
            startWithNewLine: false,
            title: "Cell phone number",
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
          {
            type: "text",
            name: "Complainant Contact Email",
            width: "40%",
            title: "Email",
            maxLength: 80,
            validators: [{ type: "email" }],
            // isRequired: true,
          },
        ],
        // visibleIf: "{Select only one option} <> 'The complainant'",
      },
      {
        name: "Who retaliated against you (Respondent)?",
        title: "Who retaliated against you (Respondent)?",
        elements: [
          {
            type: "html",
            name: "question5",
            html:
              "<p><strong>Information about Respondents:</strong></p>Usually, there is only <strong>one</strong> Respondent. Usually, the only Respondent is an <strong>organization</strong>.<p>Organizations are usually responsible for their employees' conduct.<p>Only name another respondent if they are responsible for the same discrimination that this complaint is about.<p>Only name a person as a respondent if:<ul><li>the person retaliated against you, and<li>you have a reason to seek a remedy against them. For example:</li><ul><li>no one else is responsible for the retaliation,<li>no one else can provide the remedy, or<li>the person’s conduct deserves a remedy.</ul></ul>",
          },
          {
            type: "checkbox",
            name: "Check here to confirm you want to name an organization as Respondent #1.",
            choices: [
              {
                value: "Yes, I want to name the organization that retaliated against me. ",
                text: "Yes, I want to name the organization that retaliated against me. ",
              },
            ],
          },
          {
            type: "paneldynamic",
            panelAddText: "ADD Another Respondent",
            panelRemoveText: "REMOVE Above Respondent",
            name: "respondentsContactInformation",
            title: "Respondent's Contact Information",
            templateElements: [
              {
                type: "text",
                name: "Name of the Respondent",
                description: " [If naming an employer, give the name and address from a paystub, T4, or employment contract.]",
                maxLength: 255,
                isRequired: true,
              },
              {
                type: "text",
                name: "Relationship to you",
                maxLength: 255,
                title:
                  "Relationship to you (For example: your employer, landlord, service provider)",
                isRequired: true,
              },
              {
                type: "text",
                name: "Respondent Contact Email",
                maxLength: 80,
                description: "Email is fastest. If possible, give an email address where we can send your complaint. Choose someone that you think has authority to respond to your complaint. For example, the owner, executive director, or someone in the human resources or legal department.",
                title: "Email",
                validators: [{ type: "email" }],
                // isRequired: true,
              },
              {
                type: "text",
                name: "Mailing address",
                maxLength: 240,
                isRequired: true,
              },
              {
                type: "text",
                name: "Address line 2",
                maxLength: 240,
              },
              {
                type: "text",
                name: "City",
                isRequired: true,
                maxLength: 40,
              },
              {
                type: "dropdown",
                name: "Province",
                startWithNewLine: false,
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
                name: "Postal Code",
                startWithNewLine: false,
                maxLength: 10,
                // isRequired: true,
              },
              {
                type: "text",
                name: "Respondent Contact Phone number",
                width: "30%",
                title: "Phone number  ",
                maxLength: 40,
                // isRequired: true,
              },
              {
                type: "text",
                name: "Respondent Contact Cell Phone number",
                width: "30%",
                startWithNewLine: false,
                title: "Cell phone number",
                maxLength: 40,
              },
              {
                type: "text",
                name: "Respondent Contact Fax",
                width: "30%",
                startWithNewLine: false,
                maxLength: 40,
                title: "Fax",
              },
            ],
            panelCount: 1,
            minPanelCount: 1,
          },
        ],
      },
    ],
  };

  survey: any;
  formData: object;
  constructor(private missionService: MissionService, private router: Router) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      (allFormData) => {
        console.log("allFormData", allFormData);

        if (allFormData.partyInfo) {
          this.formData = allFormData.partyInfo;
          console.log("hi!");
        }
        this.subscription.unsubscribe();
      }
    );
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    // console.log("Survey.Survey.cssType", Survey.Survey.cssType);
    // this.initSurvey();

    this.renderSurvey();
  }

  renderSurvey() {
    // let surveyModel =
    this.survey = new Survey.Model(this.json);
    this.survey.maxOthersLength = 255;
    if (this.formData) {
      this.survey.data = this.formData;
    }
    Survey.SurveyNG.render("surveyElementHRT", { model: this.survey });
  }
  handlePreviousStep() {
    if (this.survey.isFirstPage) {
      return;
    }
    this.survey.prevPage();
    // this.currentPageTitle = this.survey.currentPage.title;
  }
  handleNextStep() {
    if (this.survey.isLastPage) {
      const validated = this.survey.completeLastPage();
      if (validated) {
        this.missionService.confirmMission({
          name: "partyInfo",
          data: this.survey.data,
          complete: true,
        });
        this.router.navigateByUrl("hrt-retaliation/progress");
      }
    } else {
      this.survey.nextPage();
    }
  }
}
