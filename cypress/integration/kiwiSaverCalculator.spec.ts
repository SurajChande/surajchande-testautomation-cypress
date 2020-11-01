import KiwiSaverRetirementCalculatorPage from './../support/pageObjects/kiwiSaverRetirementCalculatorPage';

describe('KiwiSaver Calculation Validations', () => {
    let kiwiSaverRetirementCalculatorPage: KiwiSaverRetirementCalculatorPage;
    const urlPath = 'http://www.westpac.co.nz/kiwisaver/calculators/kiwisaver-calculator/'

    beforeEach(() => {
        cy.server({ enable: true });
        kiwiSaverRetirementCalculatorPage = new KiwiSaverRetirementCalculatorPage();
        kiwiSaverRetirementCalculatorPage.visit(urlPath);
    });

    it('should correctly calculate KiwiSaver projections for scenario A', () => {
        kiwiSaverRetirementCalculatorPage.setCurrentAge('30');
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Employed');
        kiwiSaverRetirementCalculatorPage.setSalary('82000');
        kiwiSaverRetirementCalculatorPage.selectKiwiSaverContribution('4');
        kiwiSaverRetirementCalculatorPage.selectRiskProfile('Defensive');
        kiwiSaverRetirementCalculatorPage.clickViewKiwiSaverRetirementProjections();
        kiwiSaverRetirementCalculatorPage.verifyProjectedBalace('$436,365');
    });

    it('should correctly calculate KiwiSaver projections for scenario B', () => {
        kiwiSaverRetirementCalculatorPage.setCurrentAge('45');
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Self-employed');
        kiwiSaverRetirementCalculatorPage.setKiwiSaverBalance('100000');
        kiwiSaverRetirementCalculatorPage.setVoluntaryContribution('90');
        kiwiSaverRetirementCalculatorPage.selectVoluntaryContributionFrequency('Fortnightly');
        kiwiSaverRetirementCalculatorPage.selectRiskProfile('Conservative');
        kiwiSaverRetirementCalculatorPage.setSavingsGoal('290000');
        kiwiSaverRetirementCalculatorPage.clickViewKiwiSaverRetirementProjections();
        kiwiSaverRetirementCalculatorPage.verifyProjectedBalace('$259,581');
    });

    it('should correctly calculate KiwiSaver projections for scenario C', () => {
        kiwiSaverRetirementCalculatorPage.setCurrentAge('55');
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Not employed');
        kiwiSaverRetirementCalculatorPage.setKiwiSaverBalance('140000');
        kiwiSaverRetirementCalculatorPage.setVoluntaryContribution('10');
        kiwiSaverRetirementCalculatorPage.selectVoluntaryContributionFrequency('Annually');
        kiwiSaverRetirementCalculatorPage.selectRiskProfile('Balanced');
        kiwiSaverRetirementCalculatorPage.setSavingsGoal('200000');
        kiwiSaverRetirementCalculatorPage.clickViewKiwiSaverRetirementProjections();
        kiwiSaverRetirementCalculatorPage.verifyProjectedBalace('$197,679');
    });
});