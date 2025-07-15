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
  selector: "app-hrt-group-respondent-contact-information-page",
  templateUrl: "./hrt-group-respondent-contact-information-page.component.html",
  styleUrls: ["./hrt-group-respondent-contact-information-page.component.scss"],
})
export class HrtGroupRespondentContactInformationPageComponent
  implements OnInit, OnDestroy {
  subscription: Subscription;

  private json = {
    showNavigationButtons: false,
    completeText: "",
    showQuestionNumbers: "off",

    pages: [
      {
        name: "Who discriminated against the group or class (Respondent)?",
        elements: [
          {
            type: "html",
            name: "question5",
            html:
              "<p><strong>Information about Respondents:</strong></p>Usually, there is only <strong>one</strong> Respondent. Usually, the only Respondent is an <strong>organization</strong> such as:<ul><li>A company or business that employed you, in a complaint about employment.<li>A landlord, in a complaint about a tenancy.<li>A government body or business, in a complaint about services.<li>A union, in a complaint about union membership.</ul><p>Organizations are usually responsible for their employees’ conduct.</p><p>Only name another respondent if they are responsible for the same discrimination that this complaint is about.<p>Only name a person as a respondent if:<ul><li>the person discriminated against you, and<li>you have a reason to seek a remedy against them. For example:</li><ul><li>no one else is responsible for the discrimination,<li>no one else can provide the remedy, or<li>the person’s conduct deserves a remedy</ul></ul><p>Give the correct legal name. Read about <a href='https://www.bchrt.bc.ca/complaint-process/complain/naming-respondents/#correct-legal-name'>how to find the correct legal name</a> under <a href='https://www.bchrt.bc.ca/complaint-process/complain/naming-respondents/'>Naming a Respondent</a> at <a href='https://www.bchrt.bc.ca/'>bchrt.bc.ca</a>.</p>",
          },
          {
            type: "checkbox",
            name: "Check here to confirm you want to name an organization as Respondent #1.",
            choices: [
              {
                value: "Yes, I want to name the organization that descriminated against the group or class.",
                text: "Yes, I want to name the organization that descriminated against the group or class.",
              },
            ],
          },
          {
            type: "paneldynamic",
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
                name: "Relationship to group or class members",
                title:
                  "Relationship to group or class members (For example, employer)",
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
                maxLength: 40,
                isRequired: true,
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
                maxLength: 10,
                startWithNewLine: false,
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
                maxLength: 40,
                startWithNewLine: false,
                title: "Cell phone number",
              },
              {
                type: "text",
                name: "Respondent Contact Fax",
                width: "33%",
                maxLength: 40,
                startWithNewLine: false,
                title: "Fax",
              },
            ],
            panelAddText: "ADD Another Respondent",
            panelRemoveText: "REMOVE Above Respondent",
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

        if (allFormData.respondentContact) {
          this.formData = allFormData.respondentContact;
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
    //  this.initSurvey();

    this.renderSurvey();
  }
  initSurvey() {
    // addQuestionTypes(Survey);
    // console.log("Survey.Survey.cssType", Survey.Survey.cssType);
    // Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.page.root = "sv_page";
    Survey.defaultBootstrapCss.pageDescription = "sv_page_description";
    Survey.defaultBootstrapCss.pageTitle = "sv_page_title";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
    Survey.defaultBootstrapCss.question.title = "sv_q_title";
    Survey.defaultBootstrapCss.question.description = "sv_q_description small";
    Survey.defaultBootstrapCss.panel.title = "sv_p_title";
    Survey.defaultBootstrapCss.panel.container = "sv_p_container";
    Survey.defaultBootstrapCss.panel.description = "sv_p_description";
    Survey.defaultBootstrapCss.row = "sv_row";
    Survey.defaultBootstrapCss.matrixdynamic.button = "btn btn-default";
    Survey.defaultBootstrapCss.paneldynamic.button = "btn btn-default";
    Survey.defaultBootstrapCss.paneldynamic.root = "sv_p_dynamic"; // not used?
    Survey.defaultBootstrapCss.checkbox.item = "sv-checkbox";
    Survey.defaultBootstrapCss.checkbox.controlLabel = "sv-checkbox-label";
    Survey.defaultBootstrapCss.checkbox.materialDecorator = "";
    Survey.defaultBootstrapCss.radiogroup.item = "sv-radio";
    Survey.defaultBootstrapCss.radiogroup.controlLabel = "sv-checkbox-label";
    Survey.defaultBootstrapCss.radiogroup.materialDecorator = "";
    //Add a property a text property into all questions types and into page
    // Survey.JsonObject.metaData.addProperty("question", "popupdescription:text");
    // Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");
    // console.log(Survey.JsonObject.metaData.addProperty)
    Survey.StylesManager.applyTheme("bootstrap");
  }
  renderSurvey() {
    console.log("hi!1");
    // let surveyModel =
    this.survey = new Survey.Model(this.json);
    this.survey.maxOthersLength = 255;
    if (this.formData) {
      console.log("hi122!");
      this.survey.data = this.formData;
    }
    console.log("hi!2");
    Survey.SurveyNG.render("surveyElementHRT", { model: this.survey });
    console.log("hi!3");
  }
  handleNextStep() {
    if (this.survey.isLastPage) {
      const validated = this.survey.completeLastPage();
      if (validated) {
        this.missionService.confirmMission({
          name: "respondentContact",
          data: this.survey.data,
          complete: true,
        });
        this.router.navigateByUrl("hrt-group/progress");
      }
    } else {
      this.survey.nextPage();
    }
  }
}
