*** Settings ***
Library    SeleniumLibrary
Resource    common.robot

*** Variables ***
${LOGIN_EMAIL_INPUT}        //input[@name="email"]
${LOGIN_PASSWORD_INPUT}     //input[@name="password"]
${REGISTER_NAME_INPUT}      //input[@name="names"]
${SUBMIT_BUTTON}            //input[@type="submit"]
${REGISTER_LINK}            //a[contains(text(),'Register')]
${LOGIN_IN_LINK}            //button[contains(text(),'Log in')]
${SIGN_IN_LINK}             //a[contains(text(),'Sign In')]
${ERROR_MESSAGE}            //span[@class="text-red-600"]

*** Keywords ***
Input Login Credentials
    [Arguments]    ${email}    ${password}
    Wait Until Element Is Visible    ${LOGIN_EMAIL_INPUT}
    Input Text    ${LOGIN_EMAIL_INPUT}    ${email}
    Input Text    ${LOGIN_PASSWORD_INPUT}    ${password}

Input Registration Details
    [Arguments]    ${name}    ${email}    ${password}
    Wait Until Element Is Visible    ${REGISTER_NAME_INPUT}
    Input Text    ${REGISTER_NAME_INPUT}    ${name}
    Input Text    ${LOGIN_EMAIL_INPUT}    ${email}
    Input Text    ${LOGIN_PASSWORD_INPUT}    ${password}

Click Button
    [Arguments]   ${button}
    Wait Until Element Is Visible    ${button}
    Click Element    ${button}


Switch To Login Form
    Wait Until Element Is Visible    ${LOGIN_IN_LINK}
    Click Element    ${LOGIN_IN_LINK}

Verify Error Message
    [Arguments]    ${expected_message}
    Wait Until Element Is Visible    ${ERROR_MESSAGE}
    Element Should Be Visible    ${ERROR_MESSAGE}
    Element Text Should Be    ${ERROR_MESSAGE}    ${expected_message}

Verify Successful Navigation To Home
    Location Should Be    ${URL}/ 