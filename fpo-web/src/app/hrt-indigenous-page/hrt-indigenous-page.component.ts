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
  selector: "app-hrt-indigenous-page",
  templateUrl: "./hrt-indigenous-page.component.html",
  styleUrls: ["./hrt-indigenous-page.component.scss"],
})
export class HrtIndigenousPageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  private json = {
    showNavigationButtons: false,
    completeText: "",
    showQuestionNumbers: "off",
    pages: [
      {
        name: "Mediation",
        elements: [
          {
            type: "html",
            name: "question1",
            html:
              '<p>Indigenous Peoples are First Nations, Métis, or Inuit.<p>Indigenous Navigators at the Tribunal can:<ul><li>Explain the process and options<li>Discuss incorporating Indigenous protocols and ways of resolving disputes.</ul>',
          },
          {
            type: "checkbox",
            name: "question1",
            hideNumber: true,
            titleLocation: "hidden",
            choices: [
              "I confirm I am First Nations, Métis or Inuit. I want an Indigenous Navigator to contact me about the process.",
            ],
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

        if (allFormData.indigenous) {
          this.formData = allFormData.indigenous;
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
          name: "indigenous",
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
