import KiwiSaverRetirementCalculatorPage from '../support/pageObjects/kiwiSaverRetirementCalculatorPage';

describe('KiwiSaver Calculation Validations - Slow', () => {
    let kiwiSaverRetirementCalculatorPage: KiwiSaverRetirementCalculatorPage;
    const urlPath = 'http://www.westpac.co.nz/kiwisaver/calculators/kiwisaver-calculator/';

    // Adding 2 sec cy.wait()s in this specs so that when reviewing the execution can be seen in slow motion
    // cy.wait()s are not recommended. However, added waits here to facilitate review

    beforeEach(() => {
        cy.server({ enable: true });
        kiwiSaverRetirementCalculatorPage = new KiwiSaverRetirementCalculatorPage();
        kiwiSaverRetirementCalculatorPage.visit(urlPath);
    });

    it('should correctly calculate KiwiSaver projections for scenario A', () => {
        kiwiSaverRetirementCalculatorPage.setCurrentAge('30');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Employed');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.setSalary('82000');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.selectKiwiSaverContribution('4');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.selectRiskProfile('Defensive');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.clickViewKiwiSaverRetirementProjections();
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.verifyProjectedBalace('$436,365');
    });

    it('should correctly calculate KiwiSaver projections for scenario B', () => {
        kiwiSaverRetirementCalculatorPage.setCurrentAge('45');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Self-employed');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.setKiwiSaverBalance('100000');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.setVoluntaryContribution('90');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.selectVoluntaryContributionFrequency('Fortnightly');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.selectRiskProfile('Conservative');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.setSavingsGoal('290000');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.clickViewKiwiSaverRetirementProjections();
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.verifyProjectedBalace('$259,581');
    });

    it('should correctly calculate KiwiSaver projections for scenario C', () => {
        kiwiSaverRetirementCalculatorPage.setCurrentAge('55');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Not employed');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.setKiwiSaverBalance('140000');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.setVoluntaryContribution('10');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.selectVoluntaryContributionFrequency('Annually');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.selectRiskProfile('Balanced');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.setSavingsGoal('200000');
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.clickViewKiwiSaverRetirementProjections();
        cy.wait(2000);
        kiwiSaverRetirementCalculatorPage.verifyProjectedBalace('$197,679');
    });
});