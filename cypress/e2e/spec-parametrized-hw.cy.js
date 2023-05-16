describe("Parametrized test suite", () => {

    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
    })

    const testngadmin = (inputUserName,  inputUserEmail, checkboxClick = false) => {
        cy.get('[placeholder="Jane Doe"]').type(`${inputUserName}`);
        cy.get('nb-card-body > form > input:nth-child(2)').type(`${inputUserEmail}`);
        if(checkboxClick){
            cy.get('nb-card-body > form > nb-checkbox > label > input').click({force: true});
        }
    }

    it ('t1', () => {
        testngadmin('Test', 'test@test.com', true)
        cy.get('[placeholder="Jane Doe"]').should("contain.value", `Test`);
        cy.get('nb-card-body > form > input:nth-child(2)').should("contain.value", `test@test.com`);
        cy.get('nb-card-body > form > nb-checkbox > label > input').should("contain.checked", true);
    })

    it ('t2', () => {
        testngadmin('Test2', 'test2@test.com', true)
        cy.get('[placeholder="Jane Doe"]').should("contain.value", `Test2`);
        cy.get('nb-card-body > form > input:nth-child(2)').should("contain.value", `test2@test.com`);
        cy.get('nb-card-body > form > nb-checkbox > label > input').should("contain.checked", true);
    })
})


describe("Parametrized test suite 1", () => {
    const testngadmin1 = (UserName, UserEmail, checkboxClick = false) =>

    function () {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
        cy.get('[placeholder="Jane Doe"]').type(`${UserName}`);
        cy.get('nb-card-body > form > input:nth-child(2)').type(`${UserEmail}`);
        if(checkboxClick){
            cy.get('nb-card-body > form > nb-checkbox > label > input').click({force: true});
        }
        cy.get('[placeholder="Jane Doe"]').should("contain.value", `${UserName}`);
        cy.get('nb-card-body > form > input:nth-child(2)').should("contain.value", `${UserEmail}`);
        cy.get('nb-card-body > form > nb-checkbox > label > input').should("contain.checked", true);
        
    };

    it ('t3', testngadmin1('Test3', 'test3@test.com', true));
    it ('t4', testngadmin1('Test4', 'test4@test.com', true));
    })