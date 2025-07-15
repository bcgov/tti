import { Component, OnInit, OnDestroy } from "@angular/core";

import { MissionService } from "../mission.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

// import Inputmask from "inputmask";
// import * as widgets from 'surveyjs-widgets';
// Import Survey.js
import * as Survey from "survey-angular";
import { } from "utils/validators";
// import { addQuestionTypes } from '../survey/question-types';
// widgets.inputmask(Survey);
@Component({
  selector: "app-hrt-complainant-page",
  templateUrl: "./hrt-complainant-page.component.html",
  styleUrls: ["./hrt-complainant-page.component.scss"],
})
export class HrtComplainantPageComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  private json = {
    showNavigationButtons: false,
    completeText: "",
    pages: [
      {
        name: "Who experienced discrimination (Complainant)?",
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
        title: "Who experienced discrimination (Complainant)?",
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
              "A lawyer for the complainant",
              "A legal advocate (Example: a person who works for a law clinic)",
              "Another person – You must file a Form 1.2 with this complaint.",
            ],
          },
        ],
        title: "Who will communicate with the Tribunal about this Complaint?",
      },
      {
        name:
          "Name of the person who will communicate with the Tribunal, if different from the Complainant",
        title:
          "Name of the person who will communicate with the Tribunal",
        elements: [
          {
            type: "text",
            name: "First name",
            maxLength: 255,
            isRequired: true,
          },
          {
            type: "text",
            name: "Last name",
            maxLength: 255,
            isRequired: true,
          },
          {
            type: "text",
            name: "Organization name",
            maxLength: 255,
            title: "Organization name (e.g. law firm, if applicable)",
            // isRequired: true,
          },
          {
            type: "text",
            title: "Preferred name - e.g. traditional name, nickname, alias",
            maxLength: 255,
            name:
              "Contact Preferred name - e.g. traditional name, nickname, alias",
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
          "{Select only one option} = 'A lawyer for the complainant' or {Select only one option} = 'A legal advocate (Example: a person who works for a law clinic)' or {Select only one option} = 'Another person – You must file a Form 1.2 with this complaint.'",
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
            maxLength: 10,
            title: "Postal Code",
            // isRequired: true,
          },
          {
            type: "text",
            name: "Complainant Contact Phone number",
            width: "30%",
            maxLength: 40,
            title: "Phone number  ",
            // isRequired: true,
          },
          {
            type: "text",
            name: "Complainant Contact Cell Phone number",
            width: "30%",
            maxLength: 40,
            startWithNewLine: false,
            title: "Cell phone number",
          },
          {
            type: "text",
            name: "Complainant Contact Fax",
            width: "30%",
            maxLength: 40,
            startWithNewLine: false,
            title: "Fax",
          },
          {
            type: "text",
            name: "Complainant Contact Email",
            width: "40%",
            maxLength: 80,
            title: "Email",
            validators: [{ type: "email" }],
            // isRequired: true,
          },
        ],
        // visibleIf: "{Select only one option} <> 'The complainant'",
        title: "Complainant’s address for delivery",
      },
      {
        name: "Who discriminated against you (Respondent)?",
        elements: [
          {
            type: "html",
            name: "question5",
            html:
              "<p><strong>Information about Respondents:</strong></p>Usually, there is only <strong>one</strong> Respondent. Usually, the only Respondent is an <strong>organization</strong> such as:<ul><li>A company or business that employed you, in a complaint about employment.<li>A landlord, in a complaint about a tenancy.<li>A government body or business, in a complaint about services.<li>A union, in a complaint about union membership.</ul><p>Organizations are usually responsible for their employees' conduct.</p><p>Only name another respondent if they are responsible for the same discrimination that this complaint is about.<p>Only name a person as a respondent if:<ul><li>the person discriminated against you, and<li>you have a reason to seek a remedy against them. For example:</li><ul><li>no one else is responsible for the discrimination,<li>no one else can provide the remedy, or<li>the person’s conduct deserves a remedy</ul></ul>",
          },
          {
            type: "checkbox",
            name: "Check here to confirm you want to name an organization as Respondent #1.",
            choices: [
              {
                value: "Yes, I want to name the organization that discriminated against me. ",
                text: "Yes, I want to name the organization that discriminated against me. ",
              },
            ],
          },
          {
            type: "paneldynamic",
            name: "respondentsContactInformation",
            title: "Respondent's Contact Information",
            templateElements: [
              {
                type: "html",
                name: "question6",
                html:
                  "<p>Give the correct legal name. (Read about <a href=https://www.bchrt.bc.ca/complaint-process/complain/naming-respondents/ >how to find the correct legal name</a> under <a href=https://www.bchrt.bc.ca/complaint-process/complain/naming-respondents/ >Naming a Respondent</a> at <a href=https://www.bchrt.bc.ca/ >bchrt.ca</a>)."
              },
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
                title:
                  "Relationship to you (For example: your employer, landlord, service provider)",
                isRequired: true,
                maxLength: 255,
              },
              {
                type: "text",
                name: "Respondent Contact Email",
                title: "Email",
                description: "Email is fastest. If possible, give an email address where we can send your complaint. Choose someone that you think has authority to respond to your complaint. For example, the owner, executive director, or someone in the human resources or legal department.",
                maxLength: 80,
                validators: [{ type: "email" }],
                // isRequired: true,
              },
              {
                type: "text",
                name: "Mailing address",
                isRequired: true,
                maxLength: 240,
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
                width: "33%",
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
                width: "33%",
                startWithNewLine: false,
                title: "Fax",
                maxLength: 40,
              },
            ],
            panelCount: 1,
            minPanelCount: 1,
            panelAddText: "ADD Another Respondent",
            panelRemoveText: "REMOVE Above Respondent",
          },
        ],
        title: "Who discriminated against you (Respondent)?",
      },
    ],
    showQuestionNumbers: "off",
  };

  survey: any;
  formData: object;
  constructor(private missionService: MissionService, private router: Router) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      (allFormData) => {

        if (allFormData.complainant) {
          this.formData = allFormData.complainant;
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
          name: "complainant",
          data: this.survey.data,
          complete: true,
        });
        this.router.navigateByUrl("hrt/progress");
      }
    } else {
      this.survey.nextPage();
    }
  }
}
