class KiwiSaverRetirementCalculatorPage {

    public visit(urlPath: string): Cypress.Chainable {
        cy.visit(urlPath);

        return cy
            .get('.page-header__title')
            .contains('Westpac KiwiSaver Scheme Calculator.'); // To ensure the page is loaded
    }

    public clickCurrentAgeInfoIcon(): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='icon']:eq(0)").click());
            });
    }

    public validateCurrentAgeInformation(information: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[ng-show='helpService.visible(field.helpId)']:eq(0)"))
                    .should('contain', information);
            });
    }

    public clickEmploymentStatusInfoIcon(): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='icon']:eq(1)").click());
            });
    }

    public validateEmploymentStatusInformation(information: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();

                cy.wrap(body.find("[ng-show='helpService.visible(field.helpId)']:eq(1)"))
                    .should('contain', information);
            });
    }

    public clickSalaryInfoIcon(): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='icon']:eq(2)").click());
            });
    }

    public validateSalaryInformation(information: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[ng-show='helpService.visible(field.helpId)']:eq(2)"))
                    .should('contain', information);
            });
    }

    public clickMemberContributionInfoIcon(): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='icon']:eq(3)").click());
            });
    }

    public validatMemberContributionInformation(information: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();

                cy.wrap(body.find("[ng-show='helpService.visible(field.helpId)']:eq(3)"))
                    .should('contain', information);
            });
    }

    public clickKiwiSaverBalanceInfoIcon(): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='icon']:eq(4)").click());
            });
    }

    public validateKiwiSaverBalanceInformation(information: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[ng-show='helpService.visible(field.helpId)']:eq(4)"))
                    .should('contain', information);
            });
    }

    public clickVoluntaryContributionInfoIcon(): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='icon']:eq(5)").click());
            });
    }

    public validateVoluntaryContributionInformation(information: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[ng-show='helpService.visible(field.helpId)']:eq(5)"))
                    .should('contain', information);
            });
    }

    public clickRiskProfileInfoIcon(): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='icon']:eq(6)").click());
            });
    }

    public validateRiskProfileInformation(information: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[ng-show='helpService.visible(field.helpId)']:eq(6)"))
                    .should('contain', information);
            });
    }

    public clickSavingsGoalInfoIcon(): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='icon']:eq(7)").click());
            });
    }

    public validateSavingsGoalInformation(information: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();

                cy.wrap(body.find("[ng-show='helpService.visible(field.helpId)']:eq(7)"))
                    .should('contain', information);
            });
    }

    public setCurrentAge(age: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[type='text']:eq(0)")).type(age);
            });
    }

    public selectEmploymentStatus(status: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='control select-control  no-selection']:eq(0)").click());

                if (status == "Employed") {
                    cy.wrap(body.find("[value='employed']").click()); //Select Employment Status Employed
                }
                else if (status == "Self-employed") {
                    cy.wrap(body.find("[value='self-employed']").click()); //Select Employment Status Self-employed
                }
                else if (status == "Not employed") {
                    cy.wrap(body.find("[value='not-employed']").click()); //Select Employment Status Not employed
                }
            });
    }

    public setSalary(salary: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[ng-model='displayModel']:eq(1)")).type(salary);
                cy.wrap(body.find("[ng-model='displayModel']:eq(2)")).click();
            });
    }

    public setKiwiSaverBalance(kiwiSaverBalance: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[ng-model='displayModel']:eq(1)")).type(kiwiSaverBalance);
            });
    }

    public setSavingsGoal(savingsGoal: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[ng-model='displayModel']:eq(3)")).type(savingsGoal);
            });
    }

    public setVoluntaryContribution(voluntaryContribution: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[ng-model='displayModel']:eq(2)")).type(voluntaryContribution);
            });
    }

    public selectRiskProfile(riskProfile: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();

                if (riskProfile == "Defensive") {
                    cy.wrap(body.find("[id='radio-option-013']").click()); //select Defensive risk profile
                }
                else if (riskProfile == "Conservative") {
                    cy.wrap(body.find("[id='radio-option-016']").click()); //select Conservative risk profile
                }
                else if (riskProfile == "Balanced") {
                    cy.wrap(body.find("[id='radio-option-019']").click()); //select Balanced risk profile
                }
                else if (riskProfile == "Growth") {
                    cy.wrap(body.find("[id='radio-option-01C']").click()); //select Growth risk profile
                }

            });
    }

    public selectKiwiSaverContribution(contribution: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();

                if (contribution == "3") {
                    cy.wrap(body.find("[id='radio-option-04C']").click()); //select 3% Contribution
                }
                else if (contribution == "4") {
                    cy.wrap(body.find("[id='radio-option-04F']").click()); //select 4% Contribution
                }
                else if (contribution == "6") {
                    cy.wrap(body.find("[id='radio-option-04I']").click()); //select 6% Contribution
                }
                else if (contribution == "8") {
                    cy.wrap(body.find("[id='radio-option-04L']").click()); //select 8% Contribution
                }
                else if (contribution == "10") {
                    cy.wrap(body.find("[id='radio-option-04O']").click()); //select 10% Contribution
                }

            });
    }

    public clickViewKiwiSaverRetirementProjections(): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='btn btn-regular btn-results-reveal btn-has-chevron']")).click();
            });
    }

    public verifyProjectedBalace(balance: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body).find("[class='result-value result-currency ng-binding']").should('contain', balance);
            });
    }

    public selectVoluntaryContributionFrequency(frequency: string): Cypress.Chainable {
        return cy
            .get('#calculator-embed > iframe').then(($iframe) => {
                const body = $iframe.contents();
                cy.wrap(body.find("[class='control select-control  no-selection']:eq(0)").click());

                if (frequency == "Weekly") {
                    cy.wrap(body.find("[value='week']").click()); //select Weekly frequncy
                }
                else if (frequency == "Fortnightly") {
                    cy.wrap(body.find("[value='fortnight']").click()); //select Fortnightly frequency
                }
                else if (frequency == "Monthly") {
                    cy.wrap(body.find("[value='month']").click()); //select Monthly frequency
                }
                else if (frequency == "Annually") {
                    cy.wrap(body.find("[value='year']").click()); //select Annual frequency
                }
            });
    }
}

export default KiwiSaverRetirementCalculatorPage;