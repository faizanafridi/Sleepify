*** Settings ***
Documentation    Test suite for Sleepify login functionality
Resource         ../resources/login_keywords.robot
Resource         ../test_data/login_data.robot
Test Setup      Open Sleepify
Test Teardown   Close Sleepify

*** Test Cases ***

Invalid Login Test
    [Tags]    invalid-login
    [Documentation]    Test login with invalid credentials
    Switch To Login Form
    Input Login Credentials    ${INVALID_EMAIL}    ${INVALID_PASSWORD}
    login_keywords.Click Button  ${SUBMIT_BUTTON}
    Verify Error Message    Please Enter Valid Credentials!
Valid Registration Test
    [Tags]    valid-registration
    [Documentation]    Test registration with valid details
    Switch To Login Form
    login_keywords.Click Button  ${REGISTER_LINK}
    Sleep  1s
    ${RANDOM_EMAIL}=    Evaluate    'user_' + __import__('uuid').uuid4().hex[:6] + '@test.com'
    Set Global Variable    ${EMAIL}    ${RANDOM_EMAIL}
    Input Registration Details    ${VALID_NAME}   ${RANDOM_EMAIL}  ${VALID_PASSWORD}
    login_keywords.Click Button  ${SUBMIT_BUTTON}
    Sleep  5s
    Verify Successful Navigation To Home
Valid Login Test
    [Documentation]    Test login with valid credentials
    Switch To Login Form
    Input Login Credentials    ${EMAIL}     ${VALID_PASSWORD}
    login_keywords.Click Button  ${SUBMIT_BUTTON}
    Sleep  2s
    Verify Successful Navigation To Home


Invalid Registration Test
    [Documentation]    Test registration with invalid details
    Switch To Login Form
    login_keywords.Click Button  ${REGISTER_LINK}
    Input Registration Details    ${INVALID_NAME}    ${INVALID_EMAIL}    ${INVALID_PASSWORD}
    login_keywords.Click Button  ${SUBMIT_BUTTON}
    Verify Error Message    Enter Valid Information Please!

Switch Between Login And Register Forms
    [Documentation]    Test switching between login and register forms
    Switch To Login Form
    login_keywords.Click Button  ${REGISTER_LINK}
    Element Should Be Visible    ${REGISTER_NAME_INPUT}
    login_keywords.Click Button  ${SIGN_IN_LINK} 
    Wait Until Element Is Visible    ${LOGIN_EMAIL_INPUT}
    Wait Until Element Is Not Visible    ${REGISTER_NAME_INPUT} 