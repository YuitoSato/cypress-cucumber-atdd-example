/// <reference types="cypress"/>

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { TableDefinition } from 'cucumber';
//
// type FormRow = {
//   selector: string;
//   value: string;
// }

Given(`{string} に遷移している`, (url: string) => {
  cy.visit('localhost:3000' + url);
});

When(/^以下のようにフォームを入力する$/,  (table: TableDefinition) => {
  table.hashes().forEach((row)=> {
    cy.get(`[data-id="${row.selector}"]`).type(row.value);
  })
});

When(/^"([^"]*)" をクリックする$/, (buttonText: string) => {
  cy.contains(buttonText).click();
});

Then(/^以下のデータが "([^"]*)" に存在する$/, function () {

});
Then(`以下のデータが {string} リストの {int} 番目に存在する`, (listSelector: string, listIndex: number, table: TableDefinition) => {

  table.hashes().forEach(row => {
    const element = cy.get(`[data-id="${listSelector}"]`)
      .get(`li:nth-child(${listIndex})`);

    element.get(`[data-id="${row.selector}"]`).contains(row.value).should('exist');
  });
});
