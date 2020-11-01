import KiwiSaverRetirementCalculatorPage from '../support/pageObjects/kiwiSaverRetirementCalculatorPage';

describe ('Information messages validations', () => {
    let kiwiSaverRetirementCalculatorPage: KiwiSaverRetirementCalculatorPage;
    const urlPath = 'http://www.westpac.co.nz/kiwisaver/calculators/kiwisaver-calculator/'


    const currentAgeMessage = 'This calculator has an age limit of 18 to 64 years old.';
    const employmentStatusMessage = 'If you are earning a salary or wage, select ‘Employed’. Your employer contributions will be automatically calculated at a rate of 3% of your before-tax salary or wages. You can also select ‘Self-employed’ or ‘Not employed’ and then enter below (in the Voluntary contributions field), the amount and frequency of any contributions that you wish to make.';
    const salaryMessage = 'Only include your total annual income that is paid to you by your employer(s). Other income sources such as rental income or dividends should not be included.';
    const memberContributionMessage = 'You can choose to contribute a regular amount equal to 3%, 4%, 6%, 8% or 10% of your before-tax salary or wage. If you do not select a rate, your rate will be 3%.';
    const kiwiSaverBalanceMessage = 'If you do not have a KiwiSaver account, then leave this field blank.';
    const voluntaryContributionsMessage = 'If you are';
    const riskProfileMessage = 'The risk profile affects your potential investment returns';
    const savingsGoalMessage = 'Enter the amount you would like to have saved when you reach your intended retirement age.';

    beforeEach(() => {
        cy.server({enable: true});
        kiwiSaverRetirementCalculatorPage = new KiwiSaverRetirementCalculatorPage();
        kiwiSaverRetirementCalculatorPage.visit(urlPath);
    });

    it ('should show correct information message for current age field', () => {
        kiwiSaverRetirementCalculatorPage.clickCurrentAgeInfoIcon();
        kiwiSaverRetirementCalculatorPage.validateCurrentAgeInformation(currentAgeMessage);
    });

    it ('should show correct information message for employment status field', () => {
        kiwiSaverRetirementCalculatorPage.clickEmploymentStatusInfoIcon();
        kiwiSaverRetirementCalculatorPage.validateEmploymentStatusInformation(employmentStatusMessage);
    });

    it ('should show correct information message for salary field', () => {
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Employed');
        kiwiSaverRetirementCalculatorPage.clickSalaryInfoIcon();
        kiwiSaverRetirementCalculatorPage.validateSalaryInformation(salaryMessage);
    });

    it ('should show correct information message for member contribution field', () => {
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Employed');
        kiwiSaverRetirementCalculatorPage.clickMemberContributionInfoIcon();
        kiwiSaverRetirementCalculatorPage.validatMemberContributionInformation(memberContributionMessage);
    });

    it ('should show correct information message for kiwisaver balance field', () => {
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Employed');
        kiwiSaverRetirementCalculatorPage.clickKiwiSaverBalanceInfoIcon();
        kiwiSaverRetirementCalculatorPage.validateKiwiSaverBalanceInformation(kiwiSaverBalanceMessage);
    });

    it ('should show correct information message for voluntary contribution field', () => {
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Employed');
        kiwiSaverRetirementCalculatorPage.clickVoluntaryContributionInfoIcon();
        kiwiSaverRetirementCalculatorPage.validateVoluntaryContributionInformation(voluntaryContributionsMessage);
    });

    it ('should show correct information message for risk profile field', () => {
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Employed');
        kiwiSaverRetirementCalculatorPage.clickRiskProfileInfoIcon();
        kiwiSaverRetirementCalculatorPage.validateRiskProfileInformation(riskProfileMessage);
    });

    it ('should show correct information message for savings goal field', () => {
        kiwiSaverRetirementCalculatorPage.selectEmploymentStatus('Employed');
        kiwiSaverRetirementCalculatorPage.clickSavingsGoalInfoIcon();
        kiwiSaverRetirementCalculatorPage.validateSavingsGoalInformation(savingsGoalMessage);
    });
});